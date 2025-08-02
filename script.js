document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar Shrink/Color Change on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Dynamic Services Loading
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer && typeof servicesData !== 'undefined') {
        servicesData.forEach(service => {
            const serviceCard = `
                <div class="col">
                    <div class="service-card animate-on-scroll fade-in-up">
                        <i class="bi ${service.icon} service-icon"></i>
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                    </div>
                </div>
            `;
            servicesContainer.insertAdjacentHTML('beforeend', serviceCard);
        });
    }

    // Dynamic Portfolio Loading
    const portfolioContainer = document.getElementById('portfolio-container');
    const portfolioModal = new bootstrap.Modal(document.getElementById('portfolioModal'));
    const modalTitle = document.getElementById('portfolioModalLabel');
    const modalDescription = document.querySelector('.modal-description');
    const modalCategory = document.querySelector('.modal-category');
    const modalCarouselInner = document.getElementById('modalCarouselInner');

    if (portfolioContainer && typeof portfolioData !== 'undefined') {

        const reveresedPortfolioData = [...portfolioData].reverse(); // Reverse the portfolio data for display

        reveresedPortfolioData.forEach(item => {
            // Use the first image for the grid view
            const displayImage = item.images[0];

            const portfolioItemHTML = `
                <div class="col">
                    <div class="portfolio-item animate-on-scroll fade-in-up"
                         data-bs-toggle="modal"
                         data-bs-target="#portfolioModal"
                         data-portfolio-id="${item.id}">
                        <img src="${displayImage}" class="img-fluid" alt="${item.title}">
                        <div class="portfolio-overlay">
                            <h3>${item.title}</h3>
                            <p>${item.category}</p>
                        </div>
                    </div>
                </div>
            `;
            portfolioContainer.insertAdjacentHTML('beforeend', portfolioItemHTML);
        });

        // Add event listener to each portfolio item for modal display
        portfolioContainer.addEventListener('click', (event) => {
            const portfolioItemElement = event.target.closest('.portfolio-item');
            if (portfolioItemElement) {
                const itemId = parseInt(portfolioItemElement.dataset.portfolioId);
                const selectedItem = portfolioData.find(item => item.id === itemId);

                if (selectedItem) {
                    modalTitle.textContent = selectedItem.title;
                    modalDescription.textContent = selectedItem.description;
                    modalCategory.textContent = selectedItem.category;

                    // Populate carousel with all images for the selected item
                    modalCarouselInner.innerHTML = ''; // Clear previous images
                    selectedItem.images.forEach((imageSrc, index) => {
                        const carouselItem = `
                            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                <img src="${imageSrc}" class="d-block w-100" alt="${selectedItem.title} - Image ${index + 1}">
                            </div>
                        `;
                        modalCarouselInner.insertAdjacentHTML('beforeend', carouselItem);
                    });

                    portfolioModal.show();
                }
            }
        });
    }

    // Dynamic Client Logos Loading
    const logoTrack1 = document.getElementById('logo-track-1');
    const logoTrack2 = document.getElementById('logo-track-2');

    if (logoTrack1 && logoTrack2 && typeof customerLogos !== 'undefined') {
        // Duplicate logos to ensure continuous animation without gaps
        const allLogos = [...customerLogos, ...customerLogos];

        allLogos.forEach(client => {
            const logoHtml = `
                <div class="client-logo">
                    <img src="${client.logo}" alt="${client.name} Logo">
                </div>
            `;
            logoTrack1.insertAdjacentHTML('beforeend', logoHtml);
            logoTrack2.insertAdjacentHTML('beforeend', logoHtml); // Populate second track for seamless loop
        });
    }

    // Dynamic Testimonials Loading
    const testimonialCarouselInner = document.getElementById('testimonial-carousel-inner');
    if (testimonialCarouselInner && typeof testimonialsData !== 'undefined') {
        testimonialsData.forEach((testimonial, index) => {
            const testimonialHtml = `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <div class="testimonial-card animate-on-scroll fade-in-up">
                        <p>"${testimonial.quote}"</p>
                        <p class="client-name">${testimonial.name}</p>
                        <p class="client-title">${testimonial.title}</p>
                    </div>
                </div>
            `;
            testimonialCarouselInner.insertAdjacentHTML('beforeend', testimonialHtml);
        });
    }

    // Intersection Observer for Scroll Animations
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Unobserve once animated
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    // EmailJS Form Submission and Validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const mobile = document.getElementById('mobile');
            const message = document.getElementById('message').value;

            // Sri Lankan mobile number validation (starts with 0 or +94, followed by 9 digits)
            const mobilePattern = /^(0|\+94)?[0-9]{9}$/;
            if (!mobilePattern.test(mobile.value)) {
                mobile.classList.add('is-invalid');
                return; // Stop form submission
            } else {
                mobile.classList.remove('is-invalid');
            }

            // Get current time in Colombo, Sri Lanka
            const now = new Date();
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
                timeZone: 'Asia/Colombo' // Colombo, Sri Lanka timezone
            };
            const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);

            const templateParams = {
                name: name,
                email: email,
                mobile: mobile.value,
                message: message,
                time: formattedTime
            };

            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS IDs
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Your message has been sent successfully! We will get back to you soon.');
                    contactForm.reset(); // Clear the form
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Failed to send message. Please try again later.');
                });
        });
    }
});