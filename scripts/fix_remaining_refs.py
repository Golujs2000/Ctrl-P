import os
import shutil
from PIL import Image

pub_assets = os.path.join('client', 'public', 'assets')

# Generate favicon formats
dark_fav = os.path.join(pub_assets, 'ctrlp-brand-favicon-dark.png')
if os.path.exists(dark_fav):
    shutil.copy2(dark_fav, os.path.join(pub_assets, 'brand-favicon.png'))
    with Image.open(dark_fav) as img:
        img.save(os.path.join(pub_assets, 'brand-favicon.webp'), 'WEBP')
    print("Created brand-favicon.png and brand-favicon.webp")

# Generate hero-background.webp
hero_banner = os.path.join(pub_assets, 'ctrlp-hero-brand-background-banner.png')
if os.path.exists(hero_banner):
    with Image.open(hero_banner) as img:
        img.save(os.path.join(pub_assets, 'hero-background.webp'), 'WEBP')
    print("Created hero-background.webp")

# Update client references
ref_fixes = {
    '/assets/mockup-visiting-card-slc-partners-advocate-patna.png': '/assets/mockup-visiting-card-rupesh-kumar-advocate-high-court.png',
    '/assets/visiting-card-laxmi-diagnostic-centre-patna.jpg': '/assets/mockup-visiting-card-glowmax-hospital-patna.png',
    '/assets/visiting-card-manoj-mobile-communication-patna.jpg': '/assets/mockup-visiting-card-riya-mobile-communication-punpun.png',
    '/assets/visiting-card-radhika-transport-boring-road-patna.jpg': '/assets/mockup-visiting-card-ganga-enterprises-sanitary-punpun.jpg',
    '/assets/tri-fold-marketing-brochure-uru-marketing.jpg': '/assets/mockup-trifold-brochure-geospatial-analytics-aryabhatta.png',
    '/assets/poster-creative-brochure-catalog-print-design.jpg': '/assets/mockup-bifold-brochure-mbbs-russia-admission.png',
}

src_dir = os.path.join('client', 'src')
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.html')):
            file_path = os.path.join(root, f)
            with open(file_path, 'r', encoding='utf-8') as fp:
                c = fp.read()
            mod = False
            for old_r, new_r in ref_fixes.items():
                if old_r in c:
                    c = c.replace(old_r, new_r)
                    mod = True
                    print(f"In {f}: replaced {old_r} -> {new_r}")
            if mod:
                with open(file_path, 'w', encoding='utf-8') as fp:
                    fp.write(c)

print("Reference fix complete!")
