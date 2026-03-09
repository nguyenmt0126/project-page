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
 * (trừ đi chiều cao navbar để không bị che)
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
 * Initialize vehicle type tabs (Car / Scooter) for accessories
 */
function setupVehicleTypeTabs() {
    const carTab = document.getElementById('accessories-tab-car');
    const scooterTab = document.getElementById('accessories-tab-scooter');
    if (!carTab || !scooterTab) return;

    function updateActiveTab() {
        carTab.classList.toggle('active', currentVehicleType === 'car');
        scooterTab.classList.toggle('active', currentVehicleType === 'scooter');
    }

    carTab.addEventListener('click', function() {
        currentVehicleType = 'car';
        updateActiveTab();
        renderCategories();
        renderAccessories();
        scrollToAccessoriesTop();
    });

    scooterTab.addEventListener('click', function() {
        currentVehicleType = 'scooter';
        updateActiveTab();
        renderCategories();
        renderAccessories();
        scrollToAccessoriesTop();
    });

    updateActiveTab();
}

/**
 * Render category sidebar
 */
function renderCategories() {
    const categoriesContainer = document.getElementById('accessories-categories');
    if (!categoriesContainer) return;

    // Filter by vehicle type first
    let baseList = accessoriesData;
    if (currentVehicleType === 'car') {
        baseList = baseList.filter(item => item.vehicleType === 'car' || item.vehicleType === 'all');
    } else if (currentVehicleType === 'scooter') {
        baseList = baseList.filter(item => item.vehicleType === 'scooter' || item.vehicleType === 'all');
    }

    // Count items per category
    const categoryCount = {};
    baseList.forEach(item => {
        categoryCount[item.category] = (categoryCount[item.category] || 0) + 1;
    });
    categoryCount['all'] = baseList.length;

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
        item.addEventListener('click', function() {
            currentCategory = this.dataset.category;

            // Update active state
            categoriesContainer.querySelectorAll('.accessories-category-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            // Re-render accessories
            renderAccessories();

            // Scroll lên đầu khu vực Accessories
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
    if (currentVehicleType === 'car') {
        filtered = filtered.filter(item => item.vehicleType === 'car' || item.vehicleType === 'all');
    } else if (currentVehicleType === 'scooter') {
        filtered = filtered.filter(item => item.vehicleType === 'scooter' || item.vehicleType === 'all');
    }

    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(item => item.category === currentCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(item => 
            item.name.toLowerCase().includes(query) ||
            item.categoryName.toLowerCase().includes(query) ||
            item.vehicleName.toLowerCase().includes(query)
        );
    }

    // Update count text with translation
    if (countWrapper) {
        const total = filtered.length;
        countWrapper.innerHTML = `${t('accessories_results_prefix')} <strong id="accessories-count">${total}</strong> ${t('accessories_results_suffix')}`;
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

    return `
        <div class="accessories-item" data-id="${item.id}">
            <span class="accessories-item-discount">-${item.discount}%</span>
            <img src="${item.img}" alt="${item.name}" class="accessories-item-img" loading="lazy">
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
        searchInput.addEventListener('input', function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                searchQuery = this.value;
                renderAccessories();
                scrollToAccessoriesTop();
            }, 300);
        });

        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                clearTimeout(debounceTimer);
                searchQuery = this.value;
                renderAccessories();
                scrollToAccessoriesTop();
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
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

    loadMoreBtn.addEventListener('click', function() {
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

