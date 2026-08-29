"""
Script de Generación y Recorte Neuronal en Lote para Teens Level 0
Ejecuta la generación por IA y el recorte neuronal con rembg (U2-Net)
"""
import os
import sys
from pathlib import Path
from rembg import remove, new_session
from PIL import Image

session = new_session("u2net")
target_dir = Path("public/images/avatars-3d")
target_dir.mkdir(parents=True, exist_ok=True)

def process_image(src_path: Path, dest_path: Path):
    if not src_path.exists():
        print(f"[!] Source not found: {src_path}")
        return False
    
    img = Image.open(src_path)
    cutout = remove(img, session=session)
    bbox = cutout.getbbox()
    if bbox:
        cutout = cutout.crop(bbox)
    cutout.thumbnail((800, 800), Image.Resampling.LANCZOS)
    cutout.save(dest_path, "WEBP", quality=90)
    print(f"[✓] Processed: {dest_path.name} ({dest_path.stat().st_size / 1024:.1f} KB)")
    return True

if __name__ == "__main__":
    print("Batch avatar processor ready.")
