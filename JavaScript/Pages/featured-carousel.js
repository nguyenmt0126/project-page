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
        const valueHTML = staticValue
            ? `<span class="spec-value-minimal mt-1">${t(staticValue)}</span>`
            : `<span class="spec-value-minimal mt-1" data-spec="${dataKey}"></span>`;

        return `
            <div class="col-6 col-md spec-block-minimal mb-4">
                <span class="spec-label-minimal">${t(specKey)}</span>
                ${valueHTML}
            </div>
        `;
    };

    if (firstVehicle.type === 'car') {
        specsHTML = `
            ${generateSpecItem('spec_range', 'range')}
            ${generateSpecItem('spec_seats', 'seats')}
            ${generateSpecItem('spec_power', 'power')}
        `;
    } else {
        specsHTML = `
            ${generateSpecItem('spec_range', 'range')}
            ${generateSpecItem('spec_trunk', null, 'spec_trunk_val')}
            ${generateSpecItem('spec_max_speed', 'speed')}
        `;
    }

    infoBox.innerHTML = `
        <hr class="vehicle-divider mb-2 mt-0">
        
        <div class="row text-center mb-2 justify-content-center w-100 mx-auto">
            <div class="col-6 col-md spec-block-minimal mb-4">
                <span class="spec-label-minimal">${t('Vehicle Type')}</span>
                <span class="spec-value-minimal mt-1" id="${infoId}-name"></span>
            </div>
            
            ${specsHTML}
            
            <div class="col-6 col-md spec-block-minimal mb-4 d-flex flex-column align-items-center position-relative">
                <span class="spec-label-minimal">${t('spec_price_from')}</span>
                <span class="spec-value-minimal lh-1 mt-1" id="${infoId}-price"></span>
                <div class="position-absolute w-100 text-center" style="top: 100%; left: 0; margin-top: -5px;">
                    <div class="text-decoration-line-through text-muted fw-normal" style="font-size: 0.8rem; display: none; line-height: 1.2;" id="${infoId}-price-old"></div>
                    <div class="badge bg-danger rounded-pill mt-1" id="${infoId}-discount" style="font-size: 0.7rem; font-weight: 700; line-height: 1.2; padding: 0.35em 0.65em;"></div>
                </div>
            </div>
        </div>
        
        <div class="d-flex justify-content-center gap-3 mb-4 mt-2">
            <a href="#" class="btn btn-primary rounded-1 px-5 py-2 fw-bold tesla-btn-primary" id="${infoId}-order-btn">${t('btn_order')}</a>
            <a href="#" class="btn btn-outline-primary rounded-1 px-5 py-2 fw-bold tesla-btn-outline" id="${infoId}-link">${t('btn_detail')}</a>
        </div>
        
        <!-- Hidden elements to preserve updateDisplay logic -->
        <span id="${infoId}-new-badge" style="display: none;"></span>
    `;

    const nameEl = document.getElementById(`${infoId}-name`);
    const newBadgeEl = document.getElementById(`${infoId}-new-badge`);
    const priceEl = document.getElementById(`${infoId}-price`);
    const priceOldEl = document.getElementById(`${infoId}-price-old`);
    const discountEl = document.getElementById(`${infoId}-discount`);
    const colorsEl = document.getElementById(`${infoId}-colors`);
    const linkEl = document.getElementById(`${infoId}-link`);
    const orderEl = document.getElementById(`${infoId}-order-btn`);
    const specValueEls = infoBox.querySelectorAll('.spec-value-minimal[data-spec]');

    // Extract the bullets container and insert it immediately before the buttons wrapper
    const buttonsWrapper = infoBox.querySelector('.d-flex.justify-content-center.gap-3');
    if (bulletsContainer && buttonsWrapper) {
        bulletsContainer.classList.replace('mt-4', 'mt-1');
        bulletsContainer.classList.replace('pb-2', 'mb-3');
        infoBox.insertBefore(bulletsContainer, buttonsWrapper);
    }

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

        if (orderEl) {
            orderEl.href = '#';
            orderEl.onclick = (e) => {
                e.preventDefault();
                if (typeof window.openOrderWithVehicle === 'function') {
                    window.openOrderWithVehicle(vehicle.id);
                }
            };
        }

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
    updateBullets();

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