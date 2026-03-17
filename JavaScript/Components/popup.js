/**
 * L-Corparation - Popup Manager
 * Popup 1: Promo Banner — auto-shows on page load
 * Popup 2: Consultation Form — opens from navbar button, with vehicle selector
 */

(function () {
    'use strict';

    const PROMO_DELAY_MS = 1500;

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
        document.body.classList.add('modal-open');
        
        // Pre-load images inside the popup when it opens
        const lazyImages = overlay.querySelectorAll('.lazy-load');
        if (typeof loadImage === 'function') {
            lazyImages.forEach(img => loadImage(img));
        }
    }

    function closePopup(overlay) {
        if (!overlay) return;
        overlay.classList.remove('active');
        overlay.classList.add('closing');
        document.body.classList.remove('modal-open');
        setTimeout(() => overlay.classList.remove('closing'), 400); // Matched with CSS transition
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

    // === Vehicle Selector Logic (Unified Select) ===
    function getAllVehicles() {
        const cars = typeof carData !== 'undefined' ? carData : [];
        const scooters = typeof scooterData !== 'undefined' ? scooterData : [];
        return [...cars, ...scooters];
    }

    function initVehicleSelect(selectId, popupId, imgId) {
        const selectEl = document.getElementById(selectId);
        const popupEl = document.getElementById(popupId);
        const imgEl = document.getElementById(imgId);
        
        if (!selectEl || !popupEl) return;

        const cars = typeof carData !== 'undefined' ? carData : [];
        const scooters = typeof scooterData !== 'undefined' ? scooterData : [];
        
        // Clear existing
        selectEl.innerHTML = '<option value="" disabled selected data-i18n="popup_select_placeholder">Chọn mẫu xe...</option>';

        // Reset to compact state
        popupEl.classList.remove('has-vehicle');

        // Helper to add group
        const addGroup = (label, vehicles) => {
            if (vehicles.length === 0) return;
            const group = document.createElement('optgroup');
            group.label = label;
            vehicles.forEach(v => {
                const option = document.createElement('option');
                option.value = v.id;
                option.textContent = v.name;
                group.appendChild(option);
            });
            selectEl.appendChild(group);
        };

        addGroup('Xe Ô tô (Cars)', cars);
        addGroup('Xe máy điện (Scooters)', scooters);

        // Start compact: No vehicle selected initially
        selectEl.value = "";

        // Change listener
        selectEl.addEventListener('change', (e) => {
            const allVehicles = [...cars, ...scooters];
            if (e.target.value === "") {
                popupEl.classList.remove('has-vehicle');
            } else {
                const vehicle = allVehicles.find(v => v.id === e.target.value);
                if (vehicle) {
                    popupEl.classList.add('has-vehicle');
                    if (imgEl) updatePreviewImage(imgId, vehicle.img);
                }
            }
        });
    }

    function updatePreviewImage(imgId, imgSrc) {
        const img = document.getElementById(imgId);
        if (!img) return;

        // Stage 1: Fade out
        img.style.opacity = '0';
        img.style.transform = 'scale(0.96) translateX(15px)';
        
        setTimeout(() => {
            img.src = imgSrc;
            setTimeout(() => {
                img.style.transform = 'scale(1) translateX(0)';
                img.style.opacity = '1';
            }, 50);
        }, 300);
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
        const consultPopup = document.getElementById('consultPopup');
        const consultClose = document.getElementById('consultPopupClose');
        const navConsultBtn = document.getElementById('navConsultBtn');

        if (consultOverlay) {
            setupPopupClose(consultOverlay, consultClose);

            // Initialize select for consultation
            initVehicleSelect('consultVehicleSelect', 'consultPopup', 'consultVehicleImg');

            // Open from navbar button
            if (navConsultBtn) {
                navConsultBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    openPopup(consultOverlay);
                });
            }

            // --- Popup 3: Order Form ---
            const orderOverlay = document.getElementById('orderPopupOverlay');
            const orderPopup = document.getElementById('orderPopup');
            const orderClose = document.getElementById('orderPopupClose');
            const orderBtn = document.querySelector('.hero-btn-primary'); // Hero section Order button
            const preOrderBtn = document.getElementById('modalPreOrderBtn'); // Spec modal Order button

            if (orderOverlay) {
                setupPopupClose(orderOverlay, orderClose);
                initVehicleSelect('orderVehicleSelect', 'orderPopup', 'orderVehicleImg');

                const openOrder = (e) => {
                    e.preventDefault();
                    openPopup(orderOverlay);
                };

                if (orderBtn) orderBtn.addEventListener('click', openOrder);
                if (preOrderBtn) preOrderBtn.addEventListener('click', openOrder);

                const orderForm = document.getElementById('orderForm');
                if (orderForm) {
                    orderForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        const selectEl = document.getElementById('orderVehicleSelect');
                        const vehicleName = selectEl ? selectEl.options[selectEl.selectedIndex].text : '';
                        
                        const msg = typeof t === 'function' ? (t('deposit_success') || 'Đặt cọc thành công!') : 'Đặt cọc thành công!';
                        alert(`${msg}\nQuý khách: ${document.getElementById('orderName').value}\nMẫu xe: ${vehicleName}`);
                        
                        orderForm.reset();
                        if (orderPopup) orderPopup.classList.remove('has-vehicle');
                        closePopup(orderOverlay);
                    });
                }
            }

            // Handle consultation form submit
            const consultForm = document.getElementById('consultForm');
            if (consultForm) {
                consultForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const selectEl = document.getElementById('consultVehicleSelect');
                    const vehicleName = selectEl ? selectEl.options[selectEl.selectedIndex].text : '';
                    
                    const msg = typeof t === 'function'
                        ? (t('popup_success') || 'Đăng ký thành công!')
                        : 'Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm.';
                    
                    alert(`${msg}${vehicleName ? `\nMẫu xe: ${vehicleName}` : ''}`);
                    consultForm.reset();
                    
                    // Reset to compact state
                    if (consultPopup) consultPopup.classList.remove('has-vehicle');
                    
                    closePopup(consultOverlay);
                });
            }
        }
    });
})();
