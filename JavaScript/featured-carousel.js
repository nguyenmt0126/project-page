/**
 * GreenTech - Featured Vehicle Carousel Functions
 */

function initVehicleSpecCarousel() {
    if (typeof carData === 'undefined' || typeof scooterData === 'undefined') {
        console.error('carData or scooterData is not defined.');
        return;
    }
    setupCarousel(carData, 'car-main-img', 'car-info-box', 'car-prev-btn', 'car-next-btn');
    setupCarousel(scooterData, 'scooter-main-img', 'scooter-info-box', 'scooter-prev-btn', 'scooter-next-btn');
}

function setupCarousel(data, imgId, infoId, prevBtnId, nextBtnId) {
    const imgElement = document.getElementById(imgId);
    const infoBox = document.getElementById(infoId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    if (!imgElement || !infoBox || !prevBtn || !nextBtn || data.length === 0) return;

    let currentIndex = 0;

    // 1. Initialize Static Structure
    const firstVehicle = data[0];
    const typeLabel = firstVehicle.type === 'car' ? t('badge_car') : t('badge_scooter');
    let specsHTML = '';

    if (firstVehicle.type === 'car') {
        specsHTML = `
            <div class="spec-item">
                <span class="spec-label">${t('spec_range')}</span>
                <span class="spec-value" data-spec="range"></span>
            </div>
            <div class="spec-item">
                <span class="spec-label">${t('spec_seats')}</span>
                <span class="spec-value" data-spec="seats"></span>
            </div>
            <div class="spec-item">
                <span class="spec-label">${t('spec_power')}</span>
                <span class="spec-value" data-spec="power"></span>
            </div>
            <div class="spec-item">
                <span class="spec-label">${t('spec_acceleration')}</span>
                <span class="spec-value" data-spec="acceleration"></span>
            </div>
            <div class="spec-item">
                <span class="spec-label">${t('spec_warranty')}</span>
                <span class="spec-value">${t('spec_warranty_val')}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">${t('spec_airbags')}</span>
                <span class="spec-value">${t('spec_airbags_val')}</span>
            </div>
        `;
    } else {
            specsHTML = `
            <div class="spec-item">
                <span class="spec-label">${t('spec_range')}</span>
                <span class="spec-value" data-spec="range"></span>
            </div>
            <div class="spec-item">
                <span class="spec-label">${t('spec_max_speed')}</span>
                <span class="spec-value" data-spec="speed"></span>
            </div>
            <div class="spec-item">
                <span class="spec-label">${t('spec_charge')}</span>
                <span class="spec-value" data-spec="charge"></span>
            </div>
            <div class="spec-item">
                <span class="spec-label">${t('spec_waterproof')}</span>
                <span class="spec-value" data-spec="waterproof"></span>
            </div>
            <div class="spec-item">
                <span class="spec-label">${t('spec_engine')}</span>
                <span class="spec-value">${t('spec_engine_val')}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">${t('spec_trunk')}</span>
                <span class="spec-value">${t('spec_trunk_val')}</span>
            </div>
        `;
    }

    infoBox.innerHTML = `
        <div class="d-flex align-items-center mb-3">
            <div style="position: relative; display: inline-block;">
                <span class="badge bg-primary text-white px-3 py-2 text-uppercase ls-1">${typeLabel}</span>
                <span class="badge bg-danger text-white px-2 py-1 text-uppercase shadow-sm" id="${infoId}-new-badge" style="display: none; position: absolute; top: -12px; right: -15px; font-size: 0.7rem; z-index: 1;">${t('badge_new')}</span>
            </div>
        </div>
        <h2 class="display-3 fw-bold text-dark mb-3" id="${infoId}-name"></h2>
        <div class="mb-4">
            <span class="spec-label">${t('spec_price_from')}</span>
            <p class="lead text-primary fw-bold" style="font-size: 2rem; margin-bottom: 0;" id="${infoId}-price"></p>
            <p class="text-muted text-decoration-line-through" style="font-size: 1.2rem; margin-bottom: 0.5rem;" id="${infoId}-price-old"></p>
            <span class="badge bg-danger" id="${infoId}-discount"></span>
        </div>
        
        <div class="specs-grid mb-5">
            ${specsHTML}
        </div>

        <div class="d-flex gap-3">
            <a href="#" class="btn btn-primary rounded-pill px-5 fw-bold shadow-lg">${t('btn_order')}</a>
            <a href="#" class="btn btn-outline-primary rounded-pill px-5 fw-bold" id="${infoId}-link">${t('btn_detail')}</a>
        </div>
    `;

    const nameEl = document.getElementById(`${infoId}-name`);
    const newBadgeEl = document.getElementById(`${infoId}-new-badge`);
    const priceEl = document.getElementById(`${infoId}-price`);
    const priceOldEl = document.getElementById(`${infoId}-price-old`);
    const discountEl = document.getElementById(`${infoId}-discount`);
    const linkEl = document.getElementById(`${infoId}-link`);
    const specValueEls = infoBox.querySelectorAll('.spec-value[data-spec]');

    function updateDisplay(index) {
        const vehicle = data[index];
        
        imgElement.src = vehicle.img;
        imgElement.classList.remove('slide-in-img');
        void imgElement.offsetWidth;
        imgElement.classList.add('slide-in-img');

        if (vehicle.isNew) {
            newBadgeEl.style.display = 'inline-block';
            newBadgeEl.classList.remove('fade-in');
            void newBadgeEl.offsetWidth;
            newBadgeEl.classList.add('fade-in');
        } else {
            newBadgeEl.style.display = 'none';
        }

        nameEl.textContent = vehicle.name;
        nameEl.classList.remove('slide-in-name');
        void nameEl.offsetWidth;
        nameEl.classList.add('slide-in-name');

        priceEl.textContent = vehicle.price;
        priceEl.classList.remove('fade-in-price');
        void priceEl.offsetWidth;
        priceEl.classList.add('fade-in-price');

        if (vehicle.price_old) {
            priceOldEl.textContent = vehicle.price_old;
            priceOldEl.style.display = 'block';
            priceOldEl.classList.remove('fade-in-price');
            void priceOldEl.offsetWidth;
            priceOldEl.classList.add('fade-in-price');
        } else {
            priceOldEl.style.display = 'none';
        }

        const discountText = vehicle.type === 'car' ? t('spec_discount_10') : t('spec_discount_8');
        discountEl.textContent = discountText;

        linkEl.href = '#'; // Prevent default navigation
        linkEl.onclick = (e) => {
            e.preventDefault();
            openSpecsModal(vehicle.id);
        };

        specValueEls.forEach(el => {
            const key = el.getAttribute('data-spec');
            let value = vehicle[key];
            if (!value) {
                if (key === 'power' || key === 'acceleration') value = 'N/A';
                if (key === 'charge') value = '4h';
                if (key === 'waterproof') value = 'IP67';
            }
            if (key === 'seats' && value) value = `${value} Seats`;
            el.textContent = value;
        });
    }

    // Register controller for external access (Mega Menu click)
    if (data.length > 0) {
        const type = data[0].type;
        window.carouselControllers = window.carouselControllers || {};
        window.carouselControllers[type] = {
            goTo: (id) => {
                const idx = data.findIndex(v => v.id === id);
                if (idx !== -1) {
                    currentIndex = idx;
                    updateDisplay(currentIndex);
                }
            }
        };
    }

    updateDisplay(currentIndex);

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? data.length - 1 : currentIndex - 1;
        updateDisplay(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === data.length - 1) ? 0 : currentIndex + 1;
        updateDisplay(currentIndex);
    });
}

/**
 * Global function to navigate to a specific vehicle from Mega Menu
 */
window.navigateToVehicle = function(type, id) {
    // 1. Scroll to section
    const sectionId = type === 'car' ? 'featured-cars' : 'featured-scooters';
    const section = document.getElementById(sectionId);
    
    if (section) {
        const navbarHeight = document.getElementById('mainNavbar')?.offsetHeight || 0;
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // 2. Switch carousel to specific vehicle
    if (window.carouselControllers && window.carouselControllers[type]) {
        window.carouselControllers[type].goTo(id);
    }
};