import os
import json

with open('scripts/assets_rename_map.json', encoding='utf-8') as f:
    rename_map = json.load(f)

src_dir = os.path.join('client', 'src')

total_replacements = 0
files_modified = 0

for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.html')):
            file_path = os.path.join(root, f)
            with open(file_path, 'r', encoding='utf-8') as fp:
                content = fp.read()
            
            modified = False
            for old_name, new_name in rename_map.items():
                if old_name in content:
                    content = content.replace(old_name, new_name)
                    modified = True
                    total_replacements += 1
                    print(f"In {f}: replaced '{old_name}' -> '{new_name}'")
            
            if modified:
                with open(file_path, 'w', encoding='utf-8') as fp:
                    fp.write(content)
                files_modified += 1

print(f"\nDone! Updated {files_modified} files with {total_replacements} replacements.")
