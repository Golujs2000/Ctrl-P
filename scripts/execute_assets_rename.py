import os
import shutil
import json

assets_dir = 'Assets'
dest_public_dir = os.path.join('client', 'public', 'assets')

rename_map = {
    # Ambiguous / Special items
    "MOCK UP.jpg.jpeg": "mockup-promotional-kiosk-booth-icl-fincorp-gold-loan.jpg",
    "ctrl shop.jpg": "ctrlp-storefront-exterior-stairs-entrance.jpg",
    
    # Storefront grand opening duplicates / misnamed
    "poster-retail-libaan-bags-backpack-travel-bag.jpg": "ctrlp-storefront-grand-opening-balloons-entrance-angle.jpg",
    "poster-retail-libaan-bags-executive-briefcase.jpg": "ctrlp-storefront-grand-opening-balloons-entrance-alt1.jpg",
    "poster-retail-libaan-bags-luggage-collection.jpg": "ctrlp-storefront-kalyani-complex-courtyard-despatch.jpg",
    "poster-retail-libaan-bags-luggage-showcase.jpg": "ctrlp-storefront-grand-opening-balloons-entrance-alt2.jpg",
    "poster-retail-libaan-bags-trolley-suitcases.jpg": "ctrlp-storefront-grand-opening-balloons-entrance-alt3.jpg",
    "poster-branding-ctrlp-print-design-showcase.jpg": "ctrlp-storefront-grand-opening-front-glowsign-board.jpg",
    "poster-creative-corporate-branding-kit-design.jpg": "ctrlp-storefront-grand-opening-front-glowsign-board-alt1.jpg",
    "poster-creative-custom-sticker-label-printing.jpg": "ctrlp-storefront-grand-opening-front-glowsign-board-alt2.jpg",
    "poster-creative-digital-banner-printing-artwork.jpg": "ctrlp-storefront-grand-opening-front-glowsign-board-alt3.jpg",
    "poster-creative-marketing-display-banner-design.jpg": "ctrlp-storefront-grand-opening-front-glowsign-board-alt4.jpg",
    "poster-creative-promotional-poster-high-resolution.jpg": "ctrlp-storefront-grand-opening-front-glowsign-board-alt5.jpg",
    "poster-tribute-kargil-vijay-diwas-indian-army.jpg": "ctrlp-storefront-grand-opening-front-glowsign-board-alt6.jpg",
    "poster-tribute-kargil-vijay-diwas-salute-heroes.jpg": "ctrlp-storefront-grand-opening-balloons-entrance-alt4.jpg",
    "poster-tribute-kargil-vijay-diwas-patriotism.jpg": "cutout-standee-sunboard-narendra-modi-lifesize.jpg",
    "poster-creative-flyer-pamphlet-print-design.jpg": "ctrlp-storefront-exterior-stairs-entrance-alt1.jpg",

    # Misleading poster-creative mockups
    "poster-creative-abstract-modern-art-design.png": "mockup-bifold-brochure-mbbs-russia-admission.png",
    "poster-creative-brand-typography-art.png": "mockup-wall-calendar-islamic-darul-uloom-gharib-nawaz.png",
    "poster-creative-creative-ideas-bulb.png": "mockup-school-prospectus-mount-litera-zee-school-patna.png",
    "poster-creative-creative-portfolio-branding.png": "mockup-bifold-brochure-mbbs-ukraine-admission.png",
    "poster-creative-creative-studio-branding.png": "mockup-x-banner-standee-smart-grocery-store.png",
    "poster-creative-digital-marketing-growth.png": "mockup-book-hardcover-shemford-almanac-diary.png",
    "poster-creative-digital-print-spotlight.png": "mockup-invitation-card-islamic-dawat-nama-bahar-e-madina.png",
    "poster-creative-education-career-counselling.jpg": "book-cover-school-diary-shemford-almanac.jpg",
    "poster-creative-geometric-pattern-branding.png": "mockup-book-cover-urdu-aina-e-fatawa-sharia.png",
    "poster-creative-geometric-spring-creative.png": "mockup-invitation-card-1st-wedding-anniversary.png",
    "poster-creative-graphic-design-mastery.png": "mockup-visiting-card-libaan-bags-repairing-centre.png",
    "poster-creative-growmax-business-consultancy.png": "mockup-visiting-card-glowmax-hospital-patna.png",
    "poster-creative-holika-dahan-celebration.png": "mockup-visiting-card-bhavya-mandapam-banquet-hall.png",
    "poster-creative-international-day-of-families.png": "mockup-easel-stand-wedding-welcome-board-anandita-tarun.png",
    "poster-creative-minimalist-print-concept.png": "mockup-ramadan-calendar-flyer-millat-mart-grocery.png",
    "poster-creative-paramount-coaching-institute.jpg": "outdoor-hoarding-billboard-paragon-paralite-footwear.jpg",
    "poster-creative-tea-day-chai-culture.png": "mockup-certificate-geospatial-analytics-aryabhatta-university.png",
    "poster-creative-visual-branding-concept.png": "mockup-rigid-box-packaging-shahzada-lungi-textile.png",
    "poster-creative-weekend-creative-inspiration.png": "mockup-flyer-ramadan-monthly-dhamaka-millat-mart.png",
    "poster-creative-world-intellectual-property-day.png": "mockup-visiting-card-shawdiclick-bymio-food-delivery.png",

    # Misnamed admission & awareness posters
    "poster-admission-cbse-public-school-bihar.jpg": "school-wall-calendar-new-st-johns-madhepura-2025-overview.jpg",
    "poster-admission-engineering-college-bihar.jpg": "illuminated-lightbox-3d-standee-mako-robotic-surgery.jpg",
    "poster-admission-management-paramedical-college.jpg": "official-emblem-logo-india-meteorological-department.jpg",
    "poster-admission-larme-academy-beautify-future.jpg": "poster-admission-lakme-academy-muzaffarpur-beautify-future.jpg",
    "poster-admission-larme-academy-muzaffarpur-visit.jpg": "poster-admission-lakme-academy-muzaffarpur-visit.jpg",
    "poster-admission-larme-academy-muzaffarpur.png": "poster-admission-lakme-academy-muzaffarpur-career.png",
    "poster-awareness-international-biological-diversity-day.png": "mockup-trifold-brochure-dhaba-cafe-restaurant-menu.png",
    "poster-awareness-world-turtle-day-wildlife.png": "mockup-flyer-shemford-schools-jee-neet-clat-admission.png",
    "poster-branding-ctrlp-print-concept-yellow.png": "mockup-trifold-brochure-platinum-unisex-gym-patna.png",
    "poster-celebration-april-fools-creative-humor.png": "mockup-flyer-stack-shemford-schools-spardha-exam.png",
    "poster-celebration-commonwealth-day.png": "mockup-folder-shemford-schools-evaluation-report-card.png",
    "poster-observance-national-civil-services-day.png": "mockup-visiting-card-ayan-fashion-menswear-patna.png",
    "poster-retail-city-bo-fashion-menswear.png": "mockup-packaging-box-city-boy-fashion-garments.png",
    "poster-retail-mart-grocery-supermarket.png": "mockup-rollup-standee-millat-mart-grocery-store.png",
    "poster-sports-patna-turf-club-cricket-football.png": "mockup-id-card-lanyard-turf-arena-patna-sports.png",
    "poster-coaching-academic-coaching-centre-admissions.png": "mockup-rollup-standee-ansh-coaching-centre-patna.png",
    "poster-business-ganga-concept-design.jpg": "mockup-visiting-card-ganga-enterprises-sanitary-punpun.jpg",
    "poster-business-home-decor-interior-designer.jpg": "creative-pamphlet-ar-home-decor-interior-designer-patna.jpg",
    "poster-business-magic-velvet-pencil-manufacturing.png": "mockup-packaging-box-magadh-velvet-pencil-stationery.png",
    "poster-business-mandapam-banquet-marriage-hall.png": "mockup-flyer-bhavya-mandapam-banquet-marriage-hall.png",
    "poster-business-mobile-care-repair-service.jpg": "mockup-visiting-card-mobile-care-smartphone-repair.jpg",
    "poster-business-nilek-electrical-philips-lighting.png": "mockup-visiting-card-hitek-electrical-construction.png",
    "poster-business-riya-communication-patna.png": "mockup-visiting-card-riya-mobile-communication-punpun.png",
    "poster-business-rsr-skills-it-solutions.jpg": "certificate-template-rsr-skills-it-solution-iso.jpg",
    "poster-business-sri-laxmi-surya-pvtltd.jpg": "mockup-visiting-card-sri-laxmi-surya-infra-luxury-gold.jpg",
    "poster-business-star-traders-building-materials.png": "mockup-wall-calendar-islamic-star-traders-chapra.png",
    "poster-coaching-heritage-educare-ashiana-nagar-patna.jpg": "standee-flyer-heritage-educare-coaching-ashiana-patna.jpg",
    "poster-corporate-unit-head-bihar-recruitment.jpg": "promotional-banner-tara-feed-cattle-lucky-draw.jpg",
    "poster-education-neet-pg-md-ms-mds-admission.png": "mockup-flyer-overseas-medical-study-mbbs-md-admission.png",
    "poster-entertainment-music-concert-band-night.png": "mockup-bifold-brochure-mbbs-bangladesh-admission.png",
    "poster-financial-state-bank-of-india-services.png": "mockup-rollup-standee-pair-sbi-grahak-sewa-kendra.png",
    "poster-healthcare-athang-netralaya-dr-patel.png": "mockup-invitation-folder-athang-netralaya-eye-clinic.png",
    "poster-healthcare-athang-netralaya-eye-care.png": "mockup-signboard-designs-athang-netralaya-chashma-ghar.png",
    "poster-healthcare-gi-surgeon-expert-consultation.png": "pamphlet-single-color-athang-netralaya-eye-services.png",
    "poster-healthcare-rama-surgicals-medical-supplies.png": "mockup-spiral-notebook-catalog-rama-surgicals.png",
    "poster-invitation-doctor-clinic-inauguration.png": "mockup-invitation-card-landmark-diagnostic-centre.png",
    "poster-invitation-grand-wedding-shubh-vivah.jpg": "invitation-card-envelope-template-md-ekram-uddin.jpg",
    "poster-invitation-wedding-anniversary-celebration.jpg": "mockup-invitation-card-aryabhatta-university-workshop.jpg",
    "poster-real-estate-abode-luxury-apartments-patna.png": "mockup-invitation-card-griha-pravesh-lotus-abode-patna.png",
    "poster-restaurant-spicy-indian-corner-kankarbagh-patna.jpg": "flyer-restaurant-menu-spicy-indian-corner-kankarbagh.jpg",
    "poster-visiting-card-rupesh-kumar-real-estate.png": "mockup-visiting-card-rupesh-kumar-advocate-high-court.png",
    "poster-workshop-geospatial-analytics-day4.png": "mockup-trifold-brochure-geospatial-analytics-aryabhatta.png",
    "poster-workshop-geospatial-analytics-day5.png": "mockup-rollup-standee-geospatial-analytics-aryabhatta.png",
    "poster-workshop-geospatial-analytics-urban-planning.png": "mockup-backdrop-banner-geospatial-analytics-aryabhatta.png",

    # Duplicate festival posters
    "poster-festival-chaitra-navratri-shubh-aagman.jpg": "poster-festival-chaitra-navratri-gudi-padwa-2022.jpg",
    "poster-festival-gudi-padwa-new-year.jpg": "poster-festival-chaitra-navratri-gudi-padwa-2022-alt.jpg",
    "poster-festival-ramadan-kareem-lantern.jpg": "poster-festival-ramadan-kareem-lantern-greetings.jpg",
    "poster-festival-ramadan-kareem-mubarak-moon.jpg": "poster-festival-ramadan-kareem-lantern-greetings-alt.jpg"
}

# Step 1: Perform renaming in Assets safely
print("--- Step 1: Renaming in Assets ---")
# To avoid any collision, first rename mapped files to temporary names
temp_map = {}
for old_fn, new_fn in rename_map.items():
    old_p = os.path.join(assets_dir, old_fn)
    if os.path.exists(old_p):
        tmp_p = os.path.join(assets_dir, f"__tmp_ren_{os.urandom(4).hex()}_{new_fn}")
        os.rename(old_p, tmp_p)
        temp_map[tmp_p] = os.path.join(assets_dir, new_fn)
    else:
        print(f"File not found to rename: {old_fn}")

# Now rename from tmp to new_fn
for tmp_p, final_p in temp_map.items():
    os.rename(tmp_p, final_p)

print(f"Successfully renamed {len(temp_map)} files in {assets_dir}!")

# Step 2: Ensure client/public/assets has all 197 files from Assets
print("--- Step 2: Syncing Assets to client/public/assets ---")
os.makedirs(dest_public_dir, exist_ok=True)
current_assets = os.listdir(assets_dir)
for f in current_assets:
    src_p = os.path.join(assets_dir, f)
    dst_p = os.path.join(dest_public_dir, f)
    if os.path.isfile(src_p):
        shutil.copy2(src_p, dst_p)

print(f"Synced {len(current_assets)} assets to {dest_public_dir}")

# Save the full rename map to a json file
with open('scripts/assets_rename_map.json', 'w', encoding='utf-8') as f:
    json.dump(rename_map, f, indent=2)

print("Saved rename map to scripts/assets_rename_map.json")
