/**
 * L-Corparation - Accessories Section Renderer
 * Renders accessories with sidebar categories, search, and shopee-style grid
 */

// Current state
let currentCategory = 'all';
let currentVehicleType = 'car'; // 'car' | 'scooter' | 'all'
let searchQuery = '';

// Pagination state for "Load more" behavior
const ACCESSORIES_PAGE_SIZE = 8;
let currentAccessoriesPage = 1;

/**
 * Smooth scroll viewport về đầu khu vực Accessories
 */
function scrollToAccessoriesTop() {
    const section = document.getElementById('accessory');
    if (!section) return;

    const navbar = document.getElementById('mainNavbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 70;
    const extraOffset = 16; // thêm chút khoảng cách

    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const targetTop = sectionTop - navbarHeight - extraOffset;

    window.scrollTo({
        top: targetTop < 0 ? 0 : targetTop,
        behavior: 'smooth'
    });
}

/**
 * Initialize Accessories Section
 */
function initAccessories() {
    setupVehicleTypeTabs();
    renderCategories();
    renderAccessories();
    setupSearch();
    setupLoadMore();
}

/**
 * Update the active state of vehicle tabs
 */
function updateVehicleTabsUI() {
    const carTab = document.getElementById('accessories-tab-car');
    const scooterTab = document.getElementById('accessories-tab-scooter');
    if (!carTab || !scooterTab) return;

    carTab.classList.toggle('active', currentVehicleType === 'car');
    scooterTab.classList.toggle('active', currentVehicleType === 'scooter');
}

/**
 * Initialize vehicle type tabs (Car / Scooter) for accessories
 */
function setupVehicleTypeTabs() {
    const carTab = document.getElementById('accessories-tab-car');
    const scooterTab = document.getElementById('accessories-tab-scooter');
    if (!carTab || !scooterTab) return;

    carTab.addEventListener('click', function () {
        currentVehicleType = 'car';
        currentCategory = 'all';
        currentAccessoriesPage = 1;
        updateVehicleTabsUI();
        renderCategories();
        renderAccessories();
        scrollToAccessoriesTop();
    });

    scooterTab.addEventListener('click', function () {
        currentVehicleType = 'scooter';
        currentCategory = 'all';
        currentAccessoriesPage = 1;
        updateVehicleTabsUI();
        renderCategories();
        renderAccessories();
        scrollToAccessoriesTop();
    });

    updateVehicleTabsUI();
}

function renderCategories() {
    const categoriesContainer = document.getElementById('accessories-categories');
    if (!categoriesContainer) return;

    // Count items per category (GLOBAL counts for better visibility)
    const categoryCount = {};
    accessoriesData.forEach(item => {
        categoryCount[item.category] = (categoryCount[item.category] || 0) + 1;
        if (item.isNew) {
            categoryCount['new'] = (categoryCount['new'] || 0) + 1;
        }
    });
    categoryCount['all'] = accessoriesData.length;

    let html = '';
    accessoriesCategories.forEach(cat => {
        const count = categoryCount[cat.id] || 0;
        const isActive = cat.id === currentCategory ? 'active' : '';
        const label = cat.labelKey ? t(cat.labelKey) : cat.name;
        html += `
            <li class="accessories-category-item ${isActive}" data-category="${cat.id}">
                <i class="fas ${cat.icon}"></i>
                <span>${label}</span>
                <span class="count">${count}</span>
            </li>
        `;
    });

    categoriesContainer.innerHTML = html;

    // Add click handlers
    categoriesContainer.querySelectorAll('.accessories-category-item').forEach(item => {
        item.addEventListener('click', function () {
            const newCat = this.dataset.category;
            currentCategory = newCat;
            currentAccessoriesPage = 1;

            // Tự động chuyển tab nếu chọn danh mục đặc thù
            if (newCat === 'scooter_acc' && currentVehicleType !== 'scooter') {
                currentVehicleType = 'scooter';
                updateVehicleTabsUI();
                renderCategories(); // Cập nhật lại UI Sidebar
            } else if (newCat === 'car_acc' && currentVehicleType !== 'car') {
                currentVehicleType = 'car';
                updateVehicleTabsUI();
                renderCategories();
            }

            // Update active state in UI
            categoriesContainer.querySelectorAll('.accessories-category-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            renderAccessories();
            scrollToAccessoriesTop();
        });
    });
}

/**
 * Render accessories items
 */
function renderAccessories() {
    const gridContainer = document.getElementById('accessories-grid');
    const countWrapper = document.querySelector('.accessories-results-count');
    const emptyContainer = document.getElementById('accessories-empty');
    const loadMoreBtn = document.getElementById('accessories-load-more-btn');

    if (!gridContainer) return;

    // Filter accessories
    let filtered = accessoriesData;

    // Filter by vehicle type
    // Nếu chọn các danh mục chung (Tất cả, Mới, Phong cách sống) -> Hiện toàn bộ để khớp con số Sidebar
    // Nếu chọn danh mục đặc thù (Ô tô/Xe máy) -> Đã có logic tự chuyển Tab và lọc đúng loại xe
    const isGeneralCategory = ['all', 'new', 'lifestyle'].includes(currentCategory);

    if (!isGeneralCategory) {
        if (currentVehicleType === 'car') {
            filtered = filtered.filter(item => item.vehicleType === 'car' || item.vehicleType === 'all');
        } else if (currentVehicleType === 'scooter') {
            filtered = filtered.filter(item => item.vehicleType === 'scooter' || item.vehicleType === 'all');
        }
    }

    // Filter by category
    if (currentCategory === 'new') {
        filtered = filtered.filter(item => item.isNew);
    } else if (currentCategory !== 'all') {
        filtered = filtered.filter(item => item.category === currentCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
        currentAccessoriesPage = 1; // Reset page when searching
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.categoryName.toLowerCase().includes(query) ||
            item.vehicleName.toLowerCase().includes(query)
        );
    }

    // Sort priority or Randomize
    if (currentCategory === 'all' && !searchQuery.trim()) {
        // Trộn ngẫu nhiên nếu là mục "Tất cả sản phẩm" để giao diện sinh động hơn
        for (let i = filtered.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
        }
    } else {
        // Sắp xếp ưu tiên nếu chọn danh mục cụ thể hoặc đang tìm kiếm
        filtered.sort((a, b) => {
            // Ưu tiên dòng xe đang chọn
            if (a.vehicleType === currentVehicleType && b.vehicleType !== currentVehicleType) return -1;
            if (a.vehicleType !== currentVehicleType && b.vehicleType === currentVehicleType) return 1;

            // Ưu tiên các ID mới (sct, lfs, bat...)
            const getPriority = (id) => {
                if (id.startsWith('sct-')) return 1;
                if (id.startsWith('mod-')) return 2;
                if (id.startsWith('bat-')) return 3;
                if (id.startsWith('chg-')) return 4;
                if (id.startsWith('lfs-')) return 5;
                return 10;
            };
            return getPriority(a.id) - getPriority(b.id);
        });
    }

    // Update count text with translation
    if (countWrapper) {
        const total = filtered.length;
        if (total > 0) {
            countWrapper.parentElement.style.display = 'block';
            countWrapper.innerHTML = `${t('accessories_results_prefix')} <strong id="accessories-count">${total}</strong> ${t('accessories_results_suffix')}`;
        } else {
            // Hide count info when empty state is shown (it's redundant)
            countWrapper.parentElement.style.display = 'none';
        }
    }

    // Show/hide empty state
    if (emptyContainer) {
        if (filtered.length === 0) {
            emptyContainer.style.display = 'block';
            gridContainer.style.display = 'none';
        } else {
            emptyContainer.style.display = 'none';
            gridContainer.style.display = 'grid';
        }
    }

    // Render items
    if (filtered.length === 0) {
        gridContainer.innerHTML = '';

        // Hide load more button when nothing to show
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
        return;
    }

    const itemsToShowCount = currentAccessoriesPage * ACCESSORIES_PAGE_SIZE;
    const visibleItems = filtered.slice(0, itemsToShowCount);

    let html = '';
    visibleItems.forEach(item => {
        html += createAccessoryCard(item);
    });

    gridContainer.innerHTML = html;

    // Toggle Load more button visibility
    if (loadMoreBtn) {
        if (filtered.length > visibleItems.length) {
            loadMoreBtn.style.display = 'inline-flex';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }
}

/**
 * Create HTML for a single accessory card
 */
function createAccessoryCard(item) {
    const formattedPrice = formatPrice(item.price);
    const formattedOldPrice = formatPrice(item.price_old);

    // Badges logic
    const hotBadge = item.discount > 20 ? `<span class="accessories-item-badge">HOT</span>` : '';
    const newBadge = item.isNew ? `<span class="accessories-item-new">NEW</span>` : '';
    const discountBadge = item.discount > 0 ? `<span class="accessories-item-discount">-${item.discount}%</span>` : '';

    return `
        <div class="accessories-item" data-id="${item.id}">
            <div class="accessories-item-img-wrapper">
                ${discountBadge}
                ${hotBadge}
                ${newBadge}
                <img src="${item.img}" alt="${item.name}" class="accessories-item-img" loading="lazy">
            </div>
            <div class="accessories-item-info">
                <h4 class="accessories-item-name">${item.name}</h4>
                <p class="accessories-item-vehicle">${t('accessories_fit_for')} ${item.vehicleName}</p>
                <div class="accessories-item-price">
                    <span class="accessories-item-current-price">${formattedPrice}</span>
                    <span class="accessories-item-old-price">${formattedOldPrice}</span>
                </div>
                <div class="accessories-item-actions">
                    <button class="accessories-item-btn accessories-item-btn-outline" onclick="addToCart('${item.id}')">
                        <i class="fas fa-cart-plus"></i> ${t('accessories_cart_button')}
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Setup search functionality
 */
function setupSearch() {
    const searchInput = document.getElementById('accessories-search-input');
    const searchBtn = document.getElementById('accessories-search-btn');

    if (searchInput) {
        // Search on input change (with debounce)
        let debounceTimer;
        searchInput.addEventListener('input', function () {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                searchQuery = this.value;
                renderAccessories();
                scrollToAccessoriesTop();
            }, 300);
        });

        // Search on Enter key
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                clearTimeout(debounceTimer);
                searchQuery = this.value;
                renderAccessories();
                scrollToAccessoriesTop();
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', function () {
            const input = document.getElementById('accessories-search-input');
            if (input) {
                searchQuery = input.value;
                renderAccessories();
                scrollToAccessoriesTop();
            }
        });
    }
}

/**
 * Setup "Load more" button for accessories grid
 */
function setupLoadMore() {
    const loadMoreBtn = document.getElementById('accessories-load-more-btn');
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', function () {
        currentAccessoriesPage += 1;
        renderAccessories();

        // Keep the button in view after loading more items
        loadMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

/**
 * Add item to cart (placeholder)
 */
function addToCart(itemId) {
    const item = accessoriesData.find(i => i.id === itemId);
    if (item) {
        alert(`Đã thêm "${item.name}" vào giỏ hàng!\nGiá: ${formatPrice(item.price)}`);
    }
}

// Export functions
window.initAccessories = initAccessories;
window.addToCart = addToCart;
