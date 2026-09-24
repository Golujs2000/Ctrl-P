import os
import json
import re
from PIL import Image
import winocr

assets_dir = 'Assets'
files = sorted([f for f in os.listdir(assets_dir) if not f.endswith('.json') and not f.endswith('.mp4')])

print(f"Total image files to analyze: {len(files)}")

analysis = []

for idx, f in enumerate(files):
    path = os.path.join(assets_dir, f)
    try:
        with Image.open(path) as img:
            w, h = img.size
            aspect = round(w / h, 2)
            
            # Run OCR
            try:
                # Resize if image is extremely large to speed up OCR
                ocr_img = img
                if max(w, h) > 2000:
                    ocr_img = img.resize((w // 2, h // 2))
                res = winocr.recognize_pil_sync(ocr_img)
                text = res.get('text', '').strip()
                # Clean up newlines and excessive spaces
                text = re.sub(r'\s+', ' ', text)
            except Exception as e:
                text = f"OCR Error: {e}"
                
            analysis.append({
                'current_filename': f,
                'width': w,
                'height': h,
                'aspect_ratio': aspect,
                'ocr_text': text[:350]
            })
            
            if (idx + 1) % 25 == 0 or idx == len(files) - 1:
                print(f"Processed {idx + 1}/{len(files)}: {f}")
    except Exception as e:
        print(f"Error reading {f}: {e}")

output_file = 'scripts/assets_detailed_ocr_analysis.json'
with open(output_file, 'w', encoding='utf-8') as out:
    json.dump(analysis, out, indent=2, ensure_ascii=False)

print(f"Analysis saved to {output_file}")
