# TODO - Fix Vehicle Hover Effects

## Task: Fix hover on vehicle images in mega menu

### Steps:
1. [x] Read and understand the current CSS and HTML structure
2. [x] Add CSS to fix image zoom effect (only zoom image, not affect text)
3. [x] Redesign "Xem chi tiết" text styling
4. [x] Test the changes (by opening the file in browser)

### Changes made in Css/style.css:
- Added `.mega-menu-item` overflow: hidden to contain image zoom effect
- Added `.mega-menu-item img` hover transform effect (scale 1.1)
- Added new styling for `.mega-menu-details-link` (Xem chi tiết text):
  - Gradient background with green tones
  - Pill-shaped border (border-radius: 20px)
  - Uppercase text with letter spacing
  - Hover effect: background changes to solid green, text turns white, adds shadow
  - Added shine animation effect using ::before pseudo-element

