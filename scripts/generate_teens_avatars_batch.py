"""
Script Maestro de Procesamiento y Recorte Neuronal de Avatares 3D Teens Studio
Fuente de verdad: TEENS_STUDIO_ROADMAP.md y curriculumTeensStudio.ts
"""
import os
import sys
from pathlib import Path
from rembg import remove, new_session
from PIL import Image

session = new_session("u2net")
target_dir = Path("public/images/avatars-3d")
target_dir.mkdir(parents=True, exist_ok=True)

def process_single_avatar(src_image_path: Path, dest_filename: str) -> bool:
    """Recorta el fondo mediante U2-Net y guarda en WebP optimizado."""
    if not src_image_path.exists():
        print(f"[!] Archivo fuente no encontrado: {src_image_path}")
        return False
    
    img = Image.open(src_image_path)
    cutout = remove(img, session=session)
    bbox = cutout.getbbox()
    if bbox:
        cutout = cutout.crop(bbox)
        
    cutout.thumbnail((800, 800), Image.Resampling.LANCZOS)
    dest_path = target_dir / dest_filename
    cutout.save(dest_path, "WEBP", quality=90)
    
    size_kb = dest_path.stat().st_size / 1024
    print(f"[✓] Guardado con éxito: {dest_filename} ({size_kb:.1f} KB)")
    return True

if __name__ == "__main__":
    print("=== PIPELINE DE AVATARES 3D TEENS STUDIO LISTO ===")
    print("Directorio de salida:", target_dir.resolve())
