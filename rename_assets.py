import os
import json
import re

assets_dir = 'Assets'
files = sorted(os.listdir(assets_dir))

# Explicit descriptive mappings for primary assets
name_map = {
    'ctrl p loog.png': 'brand-logo.png',
    'ctrl p favicon.png': 'brand-favicon.png',
    'ctrl p favicon black.png': 'brand-favicon-dark.png',
    'ChatGPT Image Sep 12, 2026, 01_21_22 PM.png': 'brand-identity-guideline.png',
    
    # Storefront & shop
    'WhatsApp Image 2026-09-08 at 2.21.31 PM.jpeg': 'portfolio-branded-carry-bag.jpeg',
    'WhatsApp Image 2026-09-08 at 2.21.32 PM (1).jpeg': 'banner-all-printing-solutions.jpeg',
    'WhatsApp Image 2026-09-08 at 2.21.32 PM (2).jpeg': 'storefront-entrance-celebration.jpeg',
    'WhatsApp Image 2026-09-08 at 2.21.32 PM (3).jpeg': 'storefront-kalyani-complex-plaza.jpeg',
    'WhatsApp Image 2026-09-08 at 2.21.32 PM.jpeg': 'brand-signage-gstin.jpeg',
    
    'WhatsApp Image 2026-09-09 at 10.59.20 AM.jpeg': 'sample-business-card-intekhab-1.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.21 AM (1).jpeg': 'machine-eco-flex-laminator-room.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.21 AM.jpeg': 'sample-business-card-intekhab-2.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.22 AM (1).jpeg': 'machine-gethray-eco-flex-large.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.22 AM (2).jpeg': 'office-finishing-cutting-counter.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.22 AM.jpeg': 'machine-large-format-laminator.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.23 AM (1).jpeg': 'office-consultation-desk-1.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.23 AM (2).jpeg': 'office-consultation-desk-2.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.23 AM.jpeg': 'office-workstations-pc-setup.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.24 AM (1).jpeg': 'storefront-outdoor-signage-day.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.24 AM (2).jpeg': 'storefront-board-front-view.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.24 AM.jpeg': 'storefront-exterior-steps.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.25 AM (1).jpeg': 'storefront-entrance-celebration-dup.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.25 AM.jpeg': 'kalyani-complex-main-arch.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.26 AM (1).jpeg': 'storefront-window-quote-vinyl.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.26 AM (2).jpeg': 'brand-typography-color-spec.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.26 AM.jpeg': 'storefront-kalyani-complex-plaza-dup.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.27 AM (1).jpeg': 'sample-booklet-school-abhigyan.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.27 AM (2).jpeg': 'sample-book-mission-amu-jmi.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.27 AM.jpeg': 'sample-brochure-riconex-lifecare.jpeg',
    'WhatsApp Image 2026-09-09 at 10.59.28 AM.jpeg': 'sample-brochure-aquacity-patna.jpeg',
    
    'WhatsApp Video 2026-09-11 at 1.11.08 PM (1).mp4': 'video-printing-machine-demo-2.mp4',
    'WhatsApp Video 2026-09-11 at 1.11.08 PM.mp4': 'video-printing-machine-demo-1.mp4',
    'WhatsApp Video 2026-09-11 at 1.11.09 PM (1).mp4': 'video-printing-machine-demo-4.mp4',
    'WhatsApp Video 2026-09-11 at 1.11.09 PM.mp4': 'video-printing-machine-demo-3.mp4',
    
    'Vikram Chatpati.jpg': 'packaging-label-vikram-chatpati.jpg',
    'Vikram Mawa Cream.jpg': 'packaging-label-vikram-mawa-cream.jpg',
    'Vikram Nariyal Neer.jpg': 'packaging-label-vikram-nariyal-neer.jpg',
    'Vikram Orange Candy.jpg': 'packaging-label-vikram-orange-candy.jpg',
    'Vikram Pulse.jpg': 'packaging-label-vikram-pulse.jpg',
    
    'PNBRatni.jpg': 'sample-business-card-pnb-ratni.jpg',
    'PNBRatni(1).jpg': 'sample-business-card-pnb-ratni-dup.jpg',
    'Rahul.jpg': 'sample-invitation-card-birthday.jpg',
    '12A33B24-4923-438A-AB04-245F87C83547.jpeg': 'creative-festival-cricket-diwali.jpeg',
    '488BAC44-62D5-4BB7-BAAC-81C411AAB187.jpeg': 'creative-festival-dhanteras.jpeg',
    'IMG_20180906_180232_355.jpg': 'sample-visiting-card-flyer-unique.jpg',
    
    '02-Mar-2020.jpg': 'sample-business-card-pdm-university.jpg',
    '03-Mar-2020.jpg': 'sample-business-card-ganga-motor.jpg',
    '04-Mar-2020.jpg': 'sample-business-card-design-03.jpg',
    
    'unnamed(10).jpg': 'sample-business-card-streax.jpg',
    'unnamed(11).jpg': 'sample-business-card-rym-solutions.jpg',
    'unnamed(12).jpg': 'sample-standee-rahul-electric.jpg',
    'unnamed(19).jpg': 'packaging-label-orange-candy-wrapper.jpg',
    'unnamed(20).jpg': 'packaging-label-nariyal-neer-wrapper.jpg',
    'unnamed(21).jpg': 'packaging-label-mawa-cream-wrapper.jpg',
    'unnamed(23).jpg': 'packaging-label-chatpati-wrapper.jpg',
    'unnamed(26).jpg': 'packaging-label-pulse-wrapper.jpg',
}

# Process remaining unnamed and date files
for f in files:
    if f in name_map:
        continue
    base, ext = os.path.splitext(f)
    ext = ext.lower()
    
    if f.startswith('unnamed'):
        m = re.search(r'unnamed\((\d+)\)', f)
        idx = m.group(1).zfill(2) if m else '00'
        name_map[f] = f'sample-print-work-{idx}{ext}'
    elif f.startswith('202'):
        clean_date = base.replace('(', '-').replace(')', '')
        name_map[f] = f'creative-poster-{clean_date}{ext}'
    else:
        clean_base = re.sub(r'[^a-zA-Z0-9]+', '-', base).strip('-').lower()
        name_map[f] = f'print-asset-{clean_base}{ext}'

# Ensure all new names are strictly unique
new_names = list(name_map.values())
if len(new_names) != len(set(new_names)):
    print('ERROR: Duplicate target names detected!')
    from collections import Counter
    counts = Counter(new_names)
    for name, c in counts.items():
        if c > 1:
            print(f'Duplicate: {name} ({c} times)')
    exit(1)

print(f'Total files mapped: {len(name_map)} / {len(files)}')

# Write manifest
manifest = {
    'total_files': len(name_map),
    'generated_at': '2026-09-17',
    'files': name_map
}

with open(os.path.join(assets_dir, 'assets-manifest.json'), 'w', encoding='utf-8') as fp:
    json.dump(manifest, fp, indent=2)

with open('assets-manifest.json', 'w', encoding='utf-8') as fp:
    json.dump(manifest, fp, indent=2)

# Perform the actual rename
renamed_count = 0
for old_name, new_name in name_map.items():
    old_path = os.path.join(assets_dir, old_name)
    new_path = os.path.join(assets_dir, new_name)
    if os.path.exists(old_path) and old_name != new_name:
        os.rename(old_path, new_path)
        renamed_count += 1

print(f'Successfully renamed {renamed_count} files in {assets_dir}!')
