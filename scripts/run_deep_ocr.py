import os
import json
import re
from PIL import Image
import winocr

assets_dir = 'Assets'
files = sorted([f for f in os.listdir(assets_dir) if not f.endswith('.mp4')])

results = []

for idx, fn in enumerate(files):
    p = os.path.join(assets_dir, fn)
    try:
        with Image.open(p) as img:
            w, h = img.size
            if img.mode != 'RGB':
                img_rgb = img.convert('RGB')
            else:
                img_rgb = img
            
            ocr_text_center = ""
            if w >= 800 and h >= 800 and abs(w - h) < 50:
                left = int(w * 0.12)
                top = int(h * 0.10)
                right = int(w * 0.88)
                bottom = int(h * 0.90)
                crop = img_rgb.crop((left, top, right, bottom))
                try:
                    res_c = winocr.recognize_pil_sync(crop)
                    ocr_text_center = res_c.get('text', '').strip()
                except Exception:
                    pass
            
            try:
                ocr_img = img_rgb
                if max(w, h) > 1600:
                    ocr_img = img_rgb.resize((w // 2, h // 2))
                res = winocr.recognize_pil_sync(ocr_img)
                ocr_text_full = res.get('text', '').strip()
            except Exception as e:
                ocr_text_full = f"OCR Error: {e}"
            
            results.append({
                'filename': fn,
                'width': w,
                'height': h,
                'ocr_center': re.sub(r'\s+', ' ', ocr_text_center),
                'ocr_full': re.sub(r'\s+', ' ', ocr_text_full)
            })
    except Exception as e:
        results.append({
            'filename': fn,
            'error': str(e)
        })
    
    if (idx + 1) % 30 == 0 or idx == len(files) - 1:
        print(f"Processed {idx + 1}/{len(files)}")

with open('scripts/deep_assets_ocr.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("Saved to scripts/deep_assets_ocr.json")
