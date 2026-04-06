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
                    // Start compact
                    if (consultPopup) consultPopup.classList.remove('has-vehicle');
                    const consultSelect = document.getElementById('consultVehicleSelect');
                    if (consultSelect) consultSelect.value = "";
                    // Reset preview image so old car image doesn't linger
                    const consultImg = document.getElementById('consultVehicleImg');
                    if (consultImg) {
                        consultImg.src = '';
                        consultImg.style.opacity = '0';
                        consultImg.style.transform = 'scale(0.96) translateX(15px)';
                    }
                    
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
                    // Ensure it starts compact
                    if (orderPopup) orderPopup.classList.remove('has-vehicle');
                    const orderSelect = document.getElementById('orderVehicleSelect');
                    if (orderSelect) orderSelect.value = "";
                    // Reset preview image so old car image doesn't linger
                    const orderImg = document.getElementById('orderVehicleImg');
                    if (orderImg) {
                        orderImg.src = '';
                        orderImg.style.opacity = '0';
                        orderImg.style.transform = 'scale(0.96) translateX(15px)';
                    }
                    
                    openPopup(orderOverlay);
                };

                if (orderBtn) orderBtn.addEventListener('click', openOrder);
                if (preOrderBtn) {
                    preOrderBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        const vehicleId = preOrderBtn.getAttribute('data-vehicle-id');
                        if (vehicleId && typeof window.openOrderWithVehicle === 'function') {
                            window.openOrderWithVehicle(vehicleId);
                        } else {
                            openOrder(e);
                        }
                    });
                }

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

        // --- Popup 4: Login & Register Form ---
        const loginOverlay = document.getElementById('loginPopupOverlay');
        const loginClose = document.getElementById('loginPopupClose');
        const loginToggleBtn = document.getElementById('loginToggleBtn');
        
        const loginFormState = document.getElementById('loginFormState');
        const registerFormState = document.getElementById('registerFormState');
        const loginSuccessState = document.getElementById('loginSuccessState');
        
        const showRegisterBtn = document.getElementById('showRegisterBtn');
        const showLoginBtn = document.getElementById('showLoginBtn');
        const togglePassword = document.getElementById('togglePassword');
        const displayUsername = document.getElementById('displayUsername');
        const logoutBtn = document.getElementById('logoutBtn');

        if (loginOverlay) {
            setupPopupClose(loginOverlay, loginClose);

            // Toggle Password Visibility
            if (togglePassword) {
                togglePassword.addEventListener('click', () => {
                    const passInput = document.getElementById('loginPassword');
                    const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
                    passInput.setAttribute('type', type);
                    togglePassword.classList.toggle('fa-eye');
                    togglePassword.classList.toggle('fa-eye-slash');
                });
            }

            // State Switching
            if (showRegisterBtn) {
                showRegisterBtn.addEventListener('click', () => {
                    loginFormState.style.display = 'none';
                    registerFormState.style.display = 'block';
                });
            }
            if (showLoginBtn) {
                showLoginBtn.addEventListener('click', () => {
                    registerFormState.style.display = 'none';
                    loginFormState.style.display = 'block';
                });
            }

            // Open from navbar
            if (loginToggleBtn) {
                loginToggleBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    const loggedUser = JSON.parse(localStorage.getItem('currentUser'));
                    if (loggedUser) {
                        loginFormState.style.display = 'none';
                        registerFormState.style.display = 'none';
                        loginSuccessState.style.display = 'block';
                        populateProfile(loggedUser);
                    } else {
                        loginSuccessState.style.display = 'none';
                        registerFormState.style.display = 'none';
                        loginFormState.style.display = 'block';
                    }
                    
                    openPopup(loginOverlay);
                });
            }

            // Tab Switching Logic
            const profileTabs = document.querySelectorAll('.profile-tab');
            profileTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    profileTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    const isInfo = tab.dataset.tab === 'info';
                    document.getElementById('tabContentInfo').classList.toggle('d-none', !isInfo);
                    document.getElementById('tabContentSecurity').classList.toggle('d-none', isInfo);
                });
            });

            // Populate Profile Data
            function populateProfile(user) {
                const nameDisplay = document.getElementById('profileNameDisplay');
                const emailDisplay = document.getElementById('profileEmailDisplay');
                const avatarImg = document.getElementById('profileAvatar');
                
                if (nameDisplay) nameDisplay.textContent = user.username;
                if (emailDisplay) emailDisplay.textContent = user.email;
                if (avatarImg && user.avatar) avatarImg.src = user.avatar;
                
                // Form fields
                document.getElementById('profName').value = user.username || '';
                document.getElementById('profEmail').value = user.email || '';
                document.getElementById('profDOB').value = user.dob || '';
                document.getElementById('profCCCD').value = user.cccd || '';
                document.getElementById('profAddress').value = user.address || '';
            }

            // Avatar Change Simulation
            const avatarInput = document.getElementById('changeAvatar');
            if (avatarInput) {
                avatarInput.addEventListener('change', function(e) {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function(event) {
                            const base64Img = event.target.result;
                            document.getElementById('profileAvatar').src = base64Img;
                            
                            // Save to local storage for persistence
                            updateLocalUserData({ avatar: base64Img });
                        };
                        reader.readAsDataURL(file);
                    }
                });
            }

            // Handle Profile Info Update
            const profileInfoForm = document.getElementById('profileInfoForm');
            if (profileInfoForm) {
                profileInfoForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const updatedData = {
                        username: document.getElementById('profName').value,
                        dob: document.getElementById('profDOB').value,
                        cccd: document.getElementById('profCCCD').value,
                        address: document.getElementById('profAddress').value
                    };
                    
                    updateLocalUserData(updatedData);
                    alert('Cập nhật thông tin thành công!');
                    
                    // Update header name immediately
                    document.getElementById('profileNameDisplay').textContent = updatedData.username;
                });
            }

            // Handle Security Update (Password)
            const profileSecurityForm = document.getElementById('profileSecurityForm');
            if (profileSecurityForm) {
                profileSecurityForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const newPass = document.getElementById('profNewPass').value;
                    if (newPass) {
                        updateLocalUserData({ password: newPass });
                        alert('Đã đổi mật khẩu thành công!');
                        document.getElementById('profNewPass').value = '';
                    } else {
                        alert('Vui lòng nhập mật khẩu mới.');
                    }
                });
            }

            // Helper to sync local data
            function updateLocalUserData(newData) {
                const current = JSON.parse(localStorage.getItem('currentUser'));
                const updated = { ...current, ...newData };
                localStorage.setItem('currentUser', JSON.stringify(updated));
                
                // Also update the "registeredUsers" list so the updated info persists logins
                let registered = JSON.parse(localStorage.getItem('registeredUsers')) || [];
                const resIdx = registered.findIndex(u => u.email === updated.email);
                if (resIdx > -1) {
                    registered[resIdx] = { ...registered[resIdx], ...newData };
                } else {
                    // It was a user from the MD file, add them to local overwrites
                    registered.push(updated);
                }
                localStorage.setItem('registeredUsers', JSON.stringify(registered));
                
                // Sync navbar display
                updateNavbarUser(updated);
            }

            // Helper to get users from MD and LocalStorage
            async function fetchAllUsers() {
                let users = [];
                try {
                    const response = await fetch('../Data/users.md');
                    if (response.ok) {
                        const text = await response.text();
                        const lines = text.split('\n');
                        for (let i = 4; i < lines.length; i++) {
                            const line = lines[i].trim();
                            if (line.startsWith('|')) {
                                const parts = line.split('|').map(p => p.trim()).filter(p => p !== '');
                                if (parts.length >= 7) {
                                    users.push({ 
                                        email: parts[0], 
                                        password: parts[1], 
                                        username: parts[2],
                                        avatar: parts[3],
                                        dob: parts[4],
                                        cccd: parts[5],
                                        address: parts[6]
                                    });
                                } else if (parts.length >= 3) {
                                    users.push({ email: parts[0], password: parts[1], username: parts[2] });
                                }
                            }
                        }
                    }
                } catch (e) { console.warn('Users.md not accessible directly. Using local data only.'); }
                
                const localUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
                // Merge local over MD (local wins if updated)
                const combined = [...users];
                localUsers.forEach(lu => {
                    const idx = combined.findIndex(u => u.email === lu.email);
                    if (idx > -1) combined[idx] = lu;
                    else combined.push(lu);
                });
                return combined;
            }

            // Handle Login
            const loginForm = document.getElementById('loginForm');
            if (loginForm) {
                loginForm.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const email = document.getElementById('loginEmail').value;
                    const pass = document.getElementById('loginPassword').value;
                    
                    const allUsers = await fetchAllUsers();
                    const user = allUsers.find(u => u.email === email && u.password === pass);
                    
                    if (user) {
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        location.reload(); // Just reload as requested
                    } else {
                        alert('Sai email hoặc mật khẩu!');
                    }
                });
            }

            // Handle Registration
            const registerForm = document.getElementById('registerForm');
            if (registerForm) {
                registerForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const username = document.getElementById('regUsername').value;
                    const email = document.getElementById('regEmail').value;
                    const pass = document.getElementById('regPassword').value;
                    
                    // Save to "Simulated DB"
                    const localUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
                    if (localUsers.find(u => u.email === email)) {
                        alert('Email này đã được đăng ký!');
                        return;
                    }
                    
                    localUsers.push({ username, email, password: pass });
                    localStorage.setItem('registeredUsers', JSON.stringify(localUsers));
                    
                    alert('Đăng ký thành công! Vui lòng đăng nhập.');
                    registerForm.reset();
                    showLoginBtn.click(); // Switch back to login
                });
            }

            // Handle Logout
            if (logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    localStorage.removeItem('currentUser');
                    updateNavbarUser(null);
                    closePopup(loginOverlay);
                    location.reload(); // Refresh to reset state UI
                });
            }

            // Function to update user in global Navbar
            function updateNavbarUser(user) {
                if (loginToggleBtn) {
                    if (user && user.username) {
                        const avatarHtml = user.avatar ? `<img src="${user.avatar}" class="navbar-avatar">` : '<i class="fas fa-user-check text-success me-2"></i>';
                        loginToggleBtn.innerHTML = `${avatarHtml}<span class="navbar-user-name text-success">${user.username}</span>`;
                    } else {
                        loginToggleBtn.innerHTML = '<i class="fas fa-user"></i>';
                    }
                }
            }

            // Initial check on page load
            const initialUser = JSON.parse(localStorage.getItem('currentUser'));
            if (initialUser) updateNavbarUser(initialUser);
        }
    });

    // --- Global Helper for external triggers (Accessible anywhere after popup.js loads) ---
    window.openOrderWithVehicle = (vehicleId) => {
        const orderOverlay = document.getElementById('orderPopupOverlay');
        const orderPopup = document.getElementById('orderPopup');
        const orderSelect = document.getElementById('orderVehicleSelect');
        const orderImgId = 'orderVehicleImg';

        if (!orderOverlay || !orderSelect) return;

        // 1. Set the select value (Must happen AFTER initVehicleSelect has been called in DOMContentLoaded)
        orderSelect.value = vehicleId;

        // 2. Trigger the change event logic (to show banner and update image)
        const allVehicles = getAllVehicles();
        const vehicle = allVehicles.find(v => v.id === vehicleId);
        
        if (vehicle) {
            if (orderPopup) orderPopup.classList.add('has-vehicle');
            updatePreviewImage(orderImgId, vehicle.img);
        } else {
            if (orderPopup) orderPopup.classList.remove('has-vehicle');
        }

        // 3. Open the popup
        openPopup(orderOverlay);
    };
})();
