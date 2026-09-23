const fs = require('fs');
const path = require('path');

const testList = [
  // Stickers & Labels
  '/assets/custom-sticker-label-printing-guide.jpg',
  '/assets/holographic-stickers.jpg',
  '/assets/bakery-stickers.jpg',
  '/assets/fmcg-stickers.jpg',
  '/assets/vinayl-sticker.jpg',
  '/assets/clear-transparent-sticker.jpg',
  '/assets/waterproof-sticker.jpg',
  '/assets/machine-barcode-label.jpg',
  '/assets/scratch-coupon-sticker.jpg',
  '/assets/transport-barcode-label.jpg',
  '/assets/product-label.jpg',
  '/assets/pharmacy-label.jpg',
  // Paper Bags
  '/assets/custom-printed-paper-bags-guide.jpg',
  '/assets/paper-kraft-bag.jpg',
  '/assets/full-color-printing-bag.jpg',
  '/assets/ribbon-handle-bag.jpg',
  '/assets/promotional-bags.jpg',
  // Bill Books & Stamps
  '/assets/custom-bill-books-invoice-printing.jpg',
  '/assets/cash-voucher.jpg',
  '/assets/letterheads.jpg',
  '/assets/rubber-stamp.jpg',
  '/assets/stamps.jpg',
  // Hampers & Gifts
  '/assets/corporate-gifting-banner.jpg',
  '/assets/corporate-hampers.jpg',
  '/assets/start-up-hampers.jpg',
  '/assets/eco-friendly-stationery-kit.jpg',
  '/assets/diary-with-pen-holder.jpg',
  '/assets/personalised-notebooks.jpg',
  '/assets/perosnalised-pens.jpg',
  '/assets/promotional-pens.jpg',
  '/assets/promotional-keychains.jpg',
  '/assets/customized-lanyards.jpg',
  // Photo Frames & Keepsakes
  '/assets/gifts-banner.jpg',
  '/assets/mdf-glowing-designer-photo-frame.jpg',
  '/assets/wooden-engraving-photo-frame.jpg',
  '/assets/memory-bloom-resin-art-frame.jpg',
  '/assets/moon-collage-cutout-frame.jpg',
  '/assets/butterfly-collage-frame.jpg',
  '/assets/3d-glowing-crystal-ball.jpg',
  '/assets/magic-mirror.jpg',
  // Packaging Boxes
  '/assets/packaging-banner.jpg',
  '/assets/jwellery-box.jpg',
  '/assets/bakery-box-printing.jpg',
  '/assets/dry-fruit-box.jpg',
  '/assets/food-box.jpg',
  '/assets/mailer-box.jpg',
  '/assets/product-box.jpg',
  '/assets/seeds-box-pacakging.jpg',
  '/assets/spice-pacakging.jpg',
  '/assets/pickle-pacakging.jpg',
  '/assets/wedding-box.jpg',
  '/assets/toy-box.jpg',
  '/assets/machien-box-printing.jpg',
  // Visiting Cards
  '/assets/in-standard-visiting-cards-hero-image-01.png',
  '/assets/visiting-cards-banner.jpg',
  '/assets/visiting-cards.jpg',
  '/assets/textured-visiting-card.jpg',
  '/assets/velvet-visiting-card.jpg',
  '/assets/die-cut-visiting-card.jpg',
  '/assets/emboss-visiting-card.jpg',
  '/assets/foil-visiting-card.jpg',
  '/assets/gloss-visiting-card.jpg',
  '/assets/kraft-visiting-card.jpg',
  '/assets/transaparent-visiting-card.jpg',
  '/assets/non-tearable-visiting-card.jpg',
  '/assets/lawyers-card.jpg',
  '/assets/atm-visiting-card.jpg',
  '/assets/square-visiting-card.jpg',
  '/assets/3d-uv-visiting-card.jpg',
  // Standees & Banners
  '/assets/canopy-tent.jpg',
  '/assets/customized-umbrella.jpg',
  '/assets/promotional-sunshade-umbrella-firstcry-daycare.jpg',
  '/assets/promotional-sunshade-umbrella-1st-lady-begusarai.jpg',
  '/assets/frontlit-backlit-flex-banner.jpg',
  '/assets/flex-banner-with-ms-iron-frame.jpg',
  '/assets/backlit-banner.jpg',
  '/assets/promotional-banner.jpg',
  '/assets/pooja-banners.jpg',
  '/assets/suplement-banners.jpg',
  '/assets/welding-banner.jpg',
  '/assets/collge-banners.jpg',
  '/assets/digital-cloth-satin-fabric-banner.jpg',
  '/assets/promotional-flags.jpg',
  '/assets/standees.jpg',
  '/assets/standing-banner.jpg',
  '/assets/hotel-standees.jpg',
  '/assets/exibition-roll-up-standees.jpg',
  '/assets/exibition-standees.jpg',
  // Mugs & Apparel
  '/assets/corporate-coffee-mug.jpg',
  '/assets/matka-coffee-mugs.jpg',
  '/assets/cello-lacus-mugs.jpg',
  '/assets/custom-black-mugs.jpg',
  '/assets/frosted-beer-mugs.jpg',
  '/assets/customized-birthady-mug.jpg',
  '/assets/personalised-heart-mugs.jpg',
  '/assets/custom-t-shirt.jpg',
  '/assets/custom-polo-t-shirt.jpg',
  '/assets/kids-t-shirts.jpg',
  '/assets/women-custom-t-shirts.jpg',
  '/assets/customize-hoodie.jpg',
  // Signage
  '/assets/turnkey-commercial-branding-fabrication.jpg',
  '/assets/stainless-steel-sign-board-outdoor.jpg',
  '/assets/glossy-led-acrylic-3d-letters.jpg',
  '/assets/led-glow-sign-board-box.avif',
  '/assets/led-slim-light-box-poster-panels.jpg',
  '/assets/acp-sign-board-cladding.jpg',
  '/assets/outdoor-flex-hoardings-billboards-ooh.jpg',
  '/assets/outdoor-digital-wall-painting-stencil-signage.avif',
  '/assets/high-tack-vinyl-wall-wraps-media-fabrication.jpg',
  '/assets/one-way-vision-frosted-glass-film.jpg',
  '/assets/3d-wallpaper-printing-for-interiors.avif',
  '/assets/sunboard-printing.jpg',
  '/assets/wall-decals.jpg',
  // Brochures & Flyers & Posters
  '/assets/customized-brochure.jpg',
  '/assets/doctors-catalogue.jpg',
  '/assets/pharmacy-catalogue.jpg',
  '/assets/marketing-booklets.jpg',
  '/assets/flyers.jpg',
  '/assets/real-estate-flyer.jpg',
  '/assets/resort-flyers.jpg',
  '/assets/startup-flyers.jpg',
  '/assets/event-flyers.jpg',
  '/assets/bulk-posters.jpg',
  '/assets/event-posters.jpg',
  '/assets/institute-poster.jpg',
  '/assets/orthocares-posters.jpg'
];

let missing = 0;
for (const item of testList) {
  const p = path.resolve('client/public' + item);
  if (!fs.existsSync(p)) {
    console.log('MISSING:', item);
    missing++;
  }
}

if (missing === 0) {
  console.log(`ALL ${testList.length} TESTED ASSETS EXIST ON DISK! PERFECT!`);
} else {
  console.log(`Missing count: ${missing}`);
}
