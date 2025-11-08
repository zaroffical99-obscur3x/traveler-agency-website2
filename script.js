// ============================================================
// BEAUTIFUL DESTINATION IMAGES (Real Unsplash Photos)
// ============================================================

const HERO_DESTINATIONS = [
    {
        name: "Maldives Paradise",
        url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80"
    },
    {
        name: "Bali Indonesia",
        url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80"
    },
    {
        name: "Dubai UAE",
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
    },
    {
        name: "Paris France",
        url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80"
    },
    {
        name: "Santorini Greece",
        url: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1920&q=80"
    },
    {
        name: "Tokyo Japan",
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80"
    },
    {
        name: "Istanbul Turkey",
        url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1920&q=80"
    },
    {
        name: "Bangkok Thailand",
        url: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1920&q=80"
    },
    {
        name: "Singapore",
        url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=80"
    },
    {
        name: "Sri Lanka",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
    }
];

// ============================================================
// CUSTOMER REVIEWS
// ============================================================

const REVIEWS = [
    {
        name: "Sarah Johnson",
        location: "New York, USA",
        rating: 5,
        package: "Maldives Paradise",
        text: "Absolutely breathtaking experience! The Travel Globe arranged everything perfectly. The overwater villa was stunning and the service was impeccable. This was truly the vacation of a lifetime!"
    },
    {
        name: "Ahmed Hassan",
        location: "Dubai, UAE",
        rating: 5,
        package: "European Grand Tour",
        text: "Our European tour was flawlessly organized. From the hotels to the guided tours, everything exceeded our expectations. The team was responsive and helpful throughout our journey. Highly recommended!"
    },
    {
        name: "Priya Sharma",
        location: "Mumbai, India",
        rating: 5,
        package: "Bali Cultural Retreat",
        text: "The Bali retreat was a perfect blend of relaxation and culture. The yoga sessions, temple visits, and authentic cuisine made this trip unforgettable. Thank you Travel Globe for such amazing memories!"
    },
    {
        name: "David Chen",
        location: "Singapore",
        rating: 5,
        package: "Swiss Alps Adventure",
        text: "The Swiss Alps package was spectacular! Skiing in pristine mountains, cozy chalets, and world-class hospitality. The Travel Globe team thought of every detail. Can't wait to book again!"
    },
    {
        name: "Maria Garcia",
        location: "Barcelona, Spain",
        rating: 5,
        package: "Dubai Luxury Experience",
        text: "Dubai was absolutely magnificent! The 5-star hotels, desert safari, and Burj Khalifa visit were all perfectly planned. The Travel Globe made our honeymoon truly special and luxurious!"
    },
    {
        name: "James Wilson",
        location: "London, UK",
        rating: 5,
        package: "Japan Cherry Blossom",
        text: "Experiencing cherry blossoms in Japan was a dream come true. The itinerary was perfect, taking us to the best spots at the right time. Exceptional service and unforgettable moments!"
    }
];

// ============================================================
// OFFERS DATA
// ============================================================

const OFFERS = [
    {
        title: "Maldives Paradise",
        price: "$2,499",
        startDate: "Apr 10, 2026",
        endDate: "Apr 20, 2026",
        icon: "fa-umbrella-beach"
    },
    {
        title: "European Grand Tour",
        price: "$3,299",
        startDate: "May 15, 2026",
        endDate: "May 29, 2026",
        icon: "fa-landmark"
    },
    {
        title: "Swiss Alps Adventure",
        price: "$2,899",
        startDate: "Jan 10, 2026",
        endDate: "Jan 17, 2026",
        icon: "fa-mountain"
    },
    {
        title: "Bali Retreat",
        price: "$1,899",
        startDate: "Mar 5, 2026",
        endDate: "Mar 15, 2026",
        icon: "fa-spa"
    },
    {
        title: "Dubai Luxury",
        price: "$2,199",
        startDate: "Feb 20, 2026",
        endDate: "Feb 28, 2026",
        icon: "fa-building"
    }
];

// ============================================================
// PACKAGES DATA
// ============================================================

const PACKAGES = [
    {
        id: "maldives-paradise",
        title: "Maldives Paradise Escape",
        shortDesc: "Luxury beachfront resort with overwater villas, pristine waters, world-class diving and spa treatments",
        price: "$2,499",
        duration: "10 Days / 9 Nights",
        startDate: "Apr 10, 2026",
        endDate: "Apr 20, 2026",
        rating: 5,
        thumbnail: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
        tags: [
            { name: "Beach", icon: "fa-umbrella-beach" },
            { name: "Luxury", icon: "fa-gem" },
            { name: "Diving", icon: "fa-water" }
        ],
        featured: true
    },
    {
        id: "european-tour",
        title: "European Grand Tour",
        shortDesc: "Explore Paris, Rome, and Barcelona with expert guides, luxury hotels and authentic cultural experiences",
        price: "$3,299",
        duration: "14 Days / 13 Nights",
        startDate: "May 15, 2026",
        endDate: "May 29, 2026",
        rating: 5,
        thumbnail: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
        tags: [
            { name: "Culture", icon: "fa-landmark" },
            { name: "History", icon: "fa-book" },
            { name: "City", icon: "fa-city" }
        ],
        featured: true
    },
    {
        id: "swiss-alps",
        title: "Swiss Alps Adventure",
        shortDesc: "Mountain retreat with skiing, spa treatments, and breathtaking alpine scenery in luxury chalets",
        price: "$2,899",
        duration: "7 Days / 6 Nights",
        startDate: "Jan 10, 2026",
        endDate: "Jan 17, 2026",
        rating: 5,
        thumbnail: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
        tags: [
            { name: "Mountains", icon: "fa-mountain" },
            { name: "Skiing", icon: "fa-skiing" },
            { name: "Adventure", icon: "fa-hiking" }
        ],
        featured: false
    },
    {
        id: "bali-retreat",
        title: "Bali Cultural Retreat",
        shortDesc: "Immerse yourself in Balinese culture with temple visits, yoga sessions, and traditional cuisine experiences",
        price: "$1,899",
        duration: "10 Days / 9 Nights",
        startDate: "Mar 5, 2026",
        endDate: "Mar 15, 2026",
        rating: 4,
        thumbnail: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
        tags: [
            { name: "Culture", icon: "fa-om" },
            { name: "Wellness", icon: "fa-spa" },
            { name: "Beach", icon: "fa-umbrella-beach" }
        ],
        featured: false
    },
    {
        id: "dubai-luxury",
        title: "Dubai Luxury Experience",
        shortDesc: "5-star hotels, desert safaris, world-class shopping, and iconic Burj Khalifa visit with premium dining",
        price: "$2,199",
        duration: "8 Days / 7 Nights",
        startDate: "Feb 20, 2026",
        endDate: "Feb 28, 2026",
        rating: 5,
        thumbnail: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
        tags: [
            { name: "Luxury", icon: "fa-gem" },
            { name: "Shopping", icon: "fa-shopping-bag" },
            { name: "Desert", icon: "fa-sun" }
        ],
        featured: false
    },
    {
        id: "japan-cherry",
        title: "Japan Cherry Blossom Tour",
        shortDesc: "Experience Japan during sakura season with visits to Tokyo, Kyoto, and Osaka including tea ceremonies",
        price: "$3,599",
        duration: "12 Days / 11 Nights",
        startDate: "Mar 25, 2026",
        endDate: "Apr 6, 2026",
        rating: 5,
        thumbnail: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80",
        tags: [
            { name: "Culture", icon: "fa-torii-gate" },
            { name: "Nature", icon: "fa-leaf" },
            { name: "Food", icon: "fa-utensils" }
        ],
        featured: true
    }
];

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
    
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 1000);
    
    initTheme();
    renderHeroSlider();
    renderOffersTicker();
    renderPackages();
    renderReviews();
    updateActiveNav();
    
    // Scroll events
    window.addEventListener('scroll', () => {
        updateActiveNav();
        handleScrollTop();
        handleHeaderScroll();
    });
});

// ============================================================
// THEME MANAGEMENT
// ============================================================

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeUI(newTheme);
}

function updateThemeUI(theme) {
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');
    const iconMobile = document.getElementById('themeIconMobile');
    const textMobile = document.getElementById('themeTextMobile');
    
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        text.textContent = 'Light';
        iconMobile.className = 'fas fa-sun';
        textMobile.textContent = 'Light Mode';
    } else {
        icon.className = 'fas fa-moon';
        text.textContent = 'Night';
        iconMobile.className = 'fas fa-moon';
        textMobile.textContent = 'Night Mode';
    }
}

// ============================================================
// NAVIGATION
// ============================================================

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function handleHeaderScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ============================================================
// SCROLL TO TOP
// ============================================================

function handleScrollTop() {
    const scrollTop = document.getElementById('scrollTop');
    if (window.scrollY > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
}

document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// HERO IMAGE SLIDER
// ============================================================

function renderHeroSlider() {
    const slider = document.getElementById('heroSlider');
    const duplicatedDestinations = [...HERO_DESTINATIONS, ...HERO_DESTINATIONS];
    
    slider.innerHTML = duplicatedDestinations.map(dest => `
        <div class="hero-slide" style="background-image: url('${dest.url}');" title="${dest.name}"></div>
    `).join('');
}

// ============================================================
// OFFERS TICKER
// ============================================================

function renderOffersTicker() {
    const track = document.getElementById('tickerTrack');
    const duplicatedOffers = [...OFFERS, ...OFFERS];
    
    track.innerHTML = duplicatedOffers.map(offer => `
        <div class="offer-card">
            <div class="offer-title">
                <i class="fas ${offer.icon}"></i>
                ${offer.title}
            </div>
            <div class="offer-price">${offer.price}</div>
            <div class="offer-dates">
                <i class="fas fa-calendar-alt"></i>
                ${offer.startDate} — ${offer.endDate}
            </div>
        </div>
    `).join('');
}

// ============================================================
// PACKAGES RENDERING
// ============================================================

function renderPackages() {
    const grid = document.getElementById('packagesGrid');
    
    grid.innerHTML = PACKAGES.map((pkg, index) => `
        <div class="package-card ${pkg.featured ? 'featured' : ''}" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="package-image-wrapper">
                <img src="${pkg.thumbnail}" alt="${pkg.title}" class="package-image" loading="lazy">
                <div class="package-overlay"></div>
            </div>
            <div class="package-content">
                <div class="package-tags">
                    ${pkg.tags.map(tag => `
                        <span class="tag">
                            <i class="fas ${tag.icon}"></i>
                            ${tag.name}
                        </span>
                    `).join('')}
                </div>
                <h3 class="package-title">${pkg.title}</h3>
                <p class="package-desc">${pkg.shortDesc}</p>
                <div class="rating">
                    ${generateStars(pkg.rating)}
                </div>
                <div class="package-meta">
                    <div class="package-price">${pkg.price}</div>
                    <div class="package-duration">
                        <i class="fas fa-clock"></i>
                        ${pkg.duration}
                    </div>
                </div>
                <div class="package-actions">
                    <button class="btn-primary" onclick="bookPackage('${pkg.id}', '${pkg.title}')">
                        <span>Book Now</span>
                        <i class="fas fa-arrow-right"></i>
                    </button>
                    <button class="btn-share" onclick="sharePackage('${pkg.id}', '${pkg.title}')" aria-label="Share package">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Refresh AOS for dynamically added elements
    AOS.refresh();
}

function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fas fa-star star-icon"></i>';
        } else {
            stars += '<i class="far fa-star star-icon" style="opacity: 0.3;"></i>';
        }
    }
    return stars;
}

function bookPackage(packageId, packageTitle) {
    document.getElementById('messageType').value = 'Book a Package';
    document.getElementById('selectedPackage').value = `${packageId}: ${packageTitle}`;
    document.getElementById('contactMessage').value = `I'm interested in booking the "${packageTitle}" package. Please provide more details.`;
    
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function sharePackage(packageId, packageTitle) {
    const url = `${window.location.origin}${window.location.pathname}#packages`;
    const text = `Check out this amazing travel package: ${packageTitle} from The Travel Globe!`;
    
    if (navigator.share) {
        navigator.share({
            title: packageTitle,
            text: text,
            url: url
        }).catch(() => {});
    } else {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// ============================================================
// REVIEWS RENDERING
// ============================================================

function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    
    grid.innerHTML = REVIEWS.map((review, index) => `
        <div class="review-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="review-header">
                <div class="review-avatar">${review.name.charAt(0)}</div>
                <div class="review-info">
                    <h4>${review.name}</h4>
                    <div class="review-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${review.location}
                    </div>
                </div>
            </div>
            <div class="review-stars">
                ${generateStars(review.rating)}
            </div>
            <p class="review-text">"${review.text}"</p>
            <span class="review-package">
                <i class="fas fa-plane"></i> ${review.package}
            </span>
        </div>
    `).join('');
    
    AOS.refresh();
}

// ============================================================
// CONTACT FORM
// ============================================================

function handleContactSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const messageType = document.getElementById('messageType').value;
    const message = document.getElementById('contactMessage').value;
    const selectedPackage = document.getElementById('selectedPackage').value;
    
    let fullMessage = `🌍 The Travel Globe — New Message\n\n`;
    fullMessage += `📋 Type: ${messageType}\n`;
    fullMessage += `👤 Name: ${name}\n`;
    if (phone) fullMessage += `📞 Phone: ${phone}\n`;
    if (email) fullMessage += `📧 Email: ${email}\n`;
    if (selectedPackage) fullMessage += `🎫 Package: ${selectedPackage}\n`;
    fullMessage += `\n💬 Message:\n${message}`;
    
    const whatsappNumber = '923171991742';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    
    const mailtoSubject = `${messageType} - ${name}`;
    const mailtoBody = fullMessage;
    const mailtoUrl = `mailto:jassonmiller363@gmail.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
    
    window.open(whatsappUrl, '_blank');
    setTimeout(() => {
        window.open(mailtoUrl, '_blank');
    }, 500);
    
    document.getElementById('contactForm').reset();
    document.getElementById('selectedPackage').value = '';
    
    alert('✅ Opening WhatsApp and email client with your message!');
}

// ============================================================
// FAQ ACCORDION
// ============================================================

function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const isOpen = faqItem.classList.contains('open');
    
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
    });
    
    if (!isOpen) {
        faqItem.classList.add('open');
    }
}
