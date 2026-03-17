/**
 * L-Corparation - Featured Vehicle Carousel Functions
 */

function initVehicleSpecCarousel() {
    setupCarousel(carData, 'car-main-img', 'car-info-box', 'car-prev-btn', 'car-next-btn', 'car-bullets');
    setupCarousel(scooterData, 'scooter-main-img', 'scooter-info-box', 'scooter-prev-btn', 'scooter-next-btn', 'scooter-bullets');
}

function setupCarousel(data, imgId, infoId, prevBtnId, nextBtnId, bulletsId) {
    const imgElement = document.getElementById(imgId);
    const infoBox = document.getElementById(infoId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const bulletsContainer = document.getElementById(bulletsId);

    if (!imgElement || !infoBox || !prevBtn || !nextBtn || !bulletsContainer || data.length === 0) return;

    let currentIndex = 0;

    // Generate bullet buttons
    bulletsContainer.innerHTML = '';
    data.forEach((_, index) => {
        const bullet = document.createElement('button');
        bullet.className = 'bullet-btn' + (index === 0 ? ' active' : '');
        bullet.setAttribute('aria-label', `Go to slide ${index + 1}`);
        bullet.addEventListener('click', () => {
            currentIndex = index;
            updateDisplay(currentIndex);
            updateBullets();
        });
        bulletsContainer.appendChild(bullet);
    });

    function updateBullets() {
        const bullets = bulletsContainer.querySelectorAll('.bullet-btn');
        bullets.forEach((bullet, index) => {
            if (index === currentIndex) {
                bullet.classList.add('active');
            } else {
                bullet.classList.remove('active');
            }
        });
    }

    // 1. Initialize Static Structure
    const firstVehicle = data[0];
    const typeLabel = firstVehicle.type === 'car' ? t('badge_car') : t('badge_scooter');
    let specsHTML = '';

    const specIconMap = {
        'spec_range': 'fas fa-road',
        'spec_seats': 'fas fa-users',
        'spec_power': 'fas fa-bolt',
        'spec_acceleration': 'fas fa-tachometer-alt',
        'spec_warranty': 'fas fa-shield-alt',
        'spec_airbags': 'fas fa-check-circle',
        'spec_max_speed': 'fas fa-tachometer-alt',
        'spec_charge': 'fas fa-charging-station',
        'spec_waterproof': 'fas fa-water',
        'spec_engine': 'fas fa-cogs',
        'spec_trunk': 'fas fa-box-open'
    };

    const generateSpecItem = (specKey, dataKey, staticValue = null) => {
        const iconClass = specIconMap[specKey] || 'fas fa-info-circle';
        const valueHTML = staticValue
            ? `<span class="spec-value">${t(staticValue)}</span>`
            : `<span class="spec-value" data-spec="${dataKey}"></span>`;

        return `
            <div class="spec-item-optimized">
                <i class="${iconClass}"></i>
                <div>
                    <span class="spec-label">${t(specKey)}</span>
                    ${valueHTML}
                </div>
            </div>
        `;
    };

    if (firstVehicle.type === 'car') {
        specsHTML = `
            ${generateSpecItem('spec_range', 'range')}
            ${generateSpecItem('spec_seats', 'seats')}
            ${generateSpecItem('spec_power', 'power')}
            ${generateSpecItem('spec_acceleration', 'acceleration')}
            ${generateSpecItem('spec_warranty', null, 'spec_warranty_val')}
            ${generateSpecItem('spec_airbags', null, 'spec_airbags_val')}
        `;
    } else {
        specsHTML = `
            ${generateSpecItem('spec_range', 'range')}
            ${generateSpecItem('spec_max_speed', 'speed')}
            ${generateSpecItem('spec_charge', 'charge')}
            ${generateSpecItem('spec_waterproof', 'waterproof')}
            ${generateSpecItem('spec_engine', null, 'spec_engine_val')}
            ${generateSpecItem('spec_trunk', null, 'spec_trunk_val')}
        `;
    }

    infoBox.innerHTML = `
        <div class="d-flex align-items-center mb-2">
            <div style="position: relative; display: inline-block;">
                <span class="badge bg-primary text-white px-3 py-2 text-uppercase ls-1">${typeLabel}</span>
                <span class="badge bg-danger text-white px-2 py-1 text-uppercase shadow-sm" id="${infoId}-new-badge" style="display: none; position: absolute; top: -12px; right: -15px; font-size: 0.7rem; z-index: 1;">${t('badge_new')}</span>
            </div>
        </div>
        <h2 class="display-4 fw-bolder text-dark mb-3" id="${infoId}-name"></h2>
        
        <div class="bg-light p-3 rounded-3 mb-4">
            <div class="row align-items-center">
                <div class="col-12">
                    <span class="spec-label d-block mb-1">${t('spec_price_from')}</span>
                    <p class="lead text-primary fw-bold" style="font-size: 2.2rem; margin-bottom: 0; line-height: 1;" id="${infoId}-price"></p>
                    <p class="text-muted text-decoration-line-through" style="font-size: 1.1rem; margin-bottom: 5px;" id="${infoId}-price-old"></p>
                    <span class="badge bg-danger" id="${infoId}-discount"></span>
                </div>
            </div>
        </div>
        
        <div class="specs-grid-optimized mb-4">
            ${specsHTML}
        </div>

        <div class="d-flex flex-column flex-sm-row gap-3">
            <a href="#" class="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-lg flex-grow-1">${t('btn_order')}</a>
            <a href="#" class="btn btn-outline-dark btn-lg rounded-pill px-5 fw-bold flex-grow-1" id="${infoId}-link">${t('btn_detail')}</a>
        </div>
    `;

    const nameEl = document.getElementById(`${infoId}-name`);
    const newBadgeEl = document.getElementById(`${infoId}-new-badge`);
    const priceEl = document.getElementById(`${infoId}-price`);
    const priceOldEl = document.getElementById(`${infoId}-price-old`);
    const discountEl = document.getElementById(`${infoId}-discount`);
    const colorsEl = document.getElementById(`${infoId}-colors`);
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

        // The color swatch element has been removed from the template, so this logic is no longer needed.

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

    // Clone buttons to remove any previously attached event listeners (prevents double-firing on re-init)
    const freshPrev = prevBtn.cloneNode(true);
    const freshNext = nextBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(freshPrev, prevBtn);
    nextBtn.parentNode.replaceChild(freshNext, nextBtn);

    freshPrev.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? data.length - 1 : currentIndex - 1;
        updateDisplay(currentIndex);
        updateBullets();
    });

    freshNext.addEventListener('click', () => {
        currentIndex = (currentIndex === data.length - 1) ? 0 : currentIndex + 1;
        updateDisplay(currentIndex);
        updateBullets();
    });
}

/**
 * Global function to navigate to a specific vehicle from Mega Menu
 */
window.navigateToVehicle = function (type, id) {
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