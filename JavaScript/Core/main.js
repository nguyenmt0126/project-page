/**
 * L-Corparation - Main JavaScript Entry Point
 */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Render content first
    if (typeof renderMegaMenuContent === 'function') {
        renderMegaMenuContent();
    }
    
    if (typeof initVehicleSpecCarousel === 'function') {
        initVehicleSpecCarousel();
    }

    // 2. Initialize functionalities
    if (typeof initNavbarScroll === 'function') {
        initNavbarScroll();
    }
    
    if (typeof initSmoothScroll === 'function') {
        initSmoothScroll();
    }
    
    if (typeof initCarousels === 'function') {
        initCarousels();
    }
    
    // 3. Initialize Accessories Section
    if (typeof initAccessories === 'function') {
        initAccessories();
    }


});

/**
 * Loading animation on page load
 */
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);

/**
 * Calculate scrollbar width and set as CSS variable
 * This helps prevent layout shift when modal opens
 */
(function() {
    // Create a temporary element to measure scrollbar width
    const scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width:99px;height:99px;overflow:scroll;position:absolute;top:-9999px';
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    
    // Set as CSS variable
    document.documentElement.style.setProperty('--scrollbar-width', scrollbarWidth + 'px');
})();

/**
 * Open Vehicle Specs Modal with detailed brochure-style layout
 */
function openSpecsModal(vehicleId) {
    let vehicle = null;
    if (typeof carData !== 'undefined') {
        vehicle = carData.find(v => v.id === vehicleId);
    }
    if (!vehicle && typeof scooterData !== 'undefined') {
        vehicle = scooterData.find(v => v.id === vehicleId);
    }

    if (!vehicle) {
        console.error(`Vehicle with ID ${vehicleId} not found.`);
        return;
    }

    // Update Modal Title
    document.getElementById('vehicleSpecModalLabel').textContent = t('modal_title');
    
    const contentTarget = document.getElementById('specsModalContent');
    contentTarget.innerHTML = ''; // Clear previous content

    if (vehicle.specs) {
        let specsHTML = `
            <div class="col-lg-5 order-2 order-lg-1">
                <div class="table-responsive" style="max-height: 70vh; overflow-y: auto;">
                    <table class="table align-middle mb-0">
                        <tbody>`;
        
        vehicle.specs.forEach(item => {
            specsHTML += `
                <tr>
                    <td class="fw-bold" style="width: 40%;">${t(item.label) || item.label}</td>
                    <td class="text-dark">${item.value}</td>
                </tr>`;
        });

        specsHTML += `
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center justify-content-center rounded-4 mb-4 mb-lg-0" style="background-color: #f5f6f7;">
                <img src="${vehicle.img}" alt="${vehicle.name}" class="img-fluid drop-shadow-lg" style="max-height: 500px; width: 100%; object-fit: contain;">
            </div>`;
            
        contentTarget.innerHTML = specsHTML;
    } else {
        contentTarget.innerHTML = `<div class="col-12"><p class="text-center text-muted">${t('modal_updating')}</p></div>`;
    }

    const modal = new bootstrap.Modal(document.getElementById('vehicleSpecModal'));
    
    // Store the current vehicle ID on the pre-order button inside the modal
    const preOrderBtn = document.getElementById('modalPreOrderBtn');
    if (preOrderBtn) {
        preOrderBtn.setAttribute('data-vehicle-id', vehicleId);
    }
    
    modal.show();
}

/**
 * Handle About Us Read More/Less toggle
 */
document.addEventListener('DOMContentLoaded', function() {
    const aboutReadMoreBtn = document.getElementById('aboutReadMoreBtn');
    const aboutMoreContent = document.getElementById('aboutMoreContent');
    
    if (aboutReadMoreBtn && aboutMoreContent) {
        aboutMoreContent.addEventListener('shown.bs.collapse', function() {
            const span = aboutReadMoreBtn.querySelector('span');
            const icon = aboutReadMoreBtn.querySelector('i');
            if (span) span.setAttribute('data-i18n', 'about_read_less');
            if (span) span.textContent = t('about_read_less');
            if (icon) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
        
        aboutMoreContent.addEventListener('hidden.bs.collapse', function() {
            const span = aboutReadMoreBtn.querySelector('span');
            const icon = aboutReadMoreBtn.querySelector('i');
            if (span) span.setAttribute('data-i18n', 'about_read_more');
            if (span) span.textContent = t('about_read_more');
            if (icon) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    }
});
