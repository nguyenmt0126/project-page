/**
 * L-Corparation - Popup Manager
 * Popup 1: Promo Banner — auto-shows on page load
 * Popup 2: Consultation Form — opens from navbar button, with vehicle selector
 */

(function () {
    'use strict';

    const PROMO_DELAY_MS = 2500;

    // Vehicle segments mapping (using IDs from car-data.js / scooter-data.js)
    const vehicleSegments = {
        popular: ['vf5plus', 'vf6base', 'vf7plus', 'viper', 'feliz'],
        premium: ['vf8eco', 'vf9eco', 'limo', 'mpv7'],
        economy: ['vf3', 'minio', 'herio', 'nerio'],
        scooter: ['evo200', 'evoliteneo', 'evogrand', 'falzzz', 'feliz', 'felizsII', 'verox', 'drgnfly', 'viper']
    };

    // === Generic open/close helpers ===
    function openPopup(overlay) {
        if (!overlay) return;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePopup(overlay) {
        if (!overlay) return;
        overlay.classList.remove('active');
        overlay.classList.add('closing');
        document.body.style.overflow = '';
        setTimeout(() => overlay.classList.remove('closing'), 400);
    }

    function setupPopupClose(overlay, closeBtn) {
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                closePopup(overlay);
            });
        }
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closePopup(overlay);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('active')) {
                closePopup(overlay);
            }
        });
    }

    // === Vehicle Selector Logic ===
    function getAllVehicles() {
        const cars = typeof carData !== 'undefined' ? carData : [];
        const scooters = typeof scooterData !== 'undefined' ? scooterData : [];
        return [...cars, ...scooters];
    }

    function renderVehicleList(segment) {
        const listEl = document.getElementById('popupVehicleList');
        if (!listEl) return;

        const allVehicles = getAllVehicles();
        const segmentIds = vehicleSegments[segment] || [];

        // Filter vehicles by segment IDs
        const vehicles = segmentIds
            .map(id => allVehicles.find(v => v.id === id))
            .filter(Boolean);

        listEl.innerHTML = '';

        vehicles.forEach((v, idx) => {
            const option = document.createElement('label');
            option.className = 'popup-vehicle-option' + (idx === 0 ? ' selected' : '');

            option.innerHTML = `
                <input type="radio" name="consultVehicle" value="${v.id}" ${idx === 0 ? 'checked' : ''}>
                <div class="popup-vehicle-option-info">
                    <span class="popup-vehicle-option-name">${v.name}</span>
                    <span class="popup-vehicle-option-price">${v.price}</span>
                </div>
            `;

            option.addEventListener('click', () => {
                // Update selected state
                listEl.querySelectorAll('.popup-vehicle-option').forEach(el => el.classList.remove('selected'));
                option.classList.add('selected');

                // Update image on the right
                updateConsultImage(v.img);
            });

            listEl.appendChild(option);
        });

        // Show first vehicle image
        if (vehicles.length > 0) {
            updateConsultImage(vehicles[0].img);
        }
    }

    function updateConsultImage(imgSrc) {
        const img = document.getElementById('consultVehicleImg');
        if (!img) return;

        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        setTimeout(() => {
            img.src = imgSrc;
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, 150);
    }

    function initSegmentTabs() {
        const tabs = document.querySelectorAll('.popup-seg-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderVehicleList(tab.dataset.segment);
            });
        });
    }

    // === Init ===
    document.addEventListener('DOMContentLoaded', () => {
        // --- Popup 1: Promo Banner (auto-show) ---
        const promoOverlay = document.getElementById('promoPopupOverlay');
        const promoClose = document.getElementById('promoPopupClose');

        if (promoOverlay) {
            setupPopupClose(promoOverlay, promoClose);
            setTimeout(() => openPopup(promoOverlay), PROMO_DELAY_MS);
        }

        // --- Popup 2: Consultation Form (navbar button) ---
        const consultOverlay = document.getElementById('consultPopupOverlay');
        const consultClose = document.getElementById('consultPopupClose');
        const navConsultBtn = document.getElementById('navConsultBtn');

        if (consultOverlay) {
            setupPopupClose(consultOverlay, consultClose);

            // Initialize vehicle selector
            initSegmentTabs();
            renderVehicleList('popular');

            // Open from navbar button
            if (navConsultBtn) {
                navConsultBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    openPopup(consultOverlay);
                });
            }

            // Handle form submit
            const form = document.getElementById('consultForm');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const selectedVehicle = form.querySelector('input[name="consultVehicle"]:checked');
                    const vehicleName = selectedVehicle
                        ? getAllVehicles().find(v => v.id === selectedVehicle.value)?.name || ''
                        : '';
                    const msg = typeof t === 'function'
                        ? (t('popup_success') || 'Đăng ký thành công!')
                        : 'Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm.';
                    alert(msg + (vehicleName ? `\nMẫu xe: ${vehicleName}` : ''));
                    form.reset();
                    closePopup(consultOverlay);
                });
            }
        }
    });
})();
