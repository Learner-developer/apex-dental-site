import type { ImageMetadata } from 'astro';

// Guaranteed fallback assets (always committed in repository)
import fallbackClinic from '../assets/fallbacks/fallback-clinic.svg';
import fallbackDoctor from '../assets/fallbacks/fallback-doctor.svg';
import fallbackProcedure from '../assets/fallbacks/fallback-procedure.svg';
import fallbackLogo from '../assets/fallbacks/fallback-logo.svg';

export type FallbackCategory = 'clinic' | 'doctor' | 'procedure' | 'logo';

export const fallbackImages: Record<FallbackCategory, ImageMetadata> = {
  clinic: fallbackClinic,
  doctor: fallbackDoctor,
  procedure: fallbackProcedure,
  logo: fallbackLogo,
};

// Dynamic discovery of all images in Visuals/ directory (build-time safe, non-crashing)
const visualsGlob = import.meta.glob<{ default: ImageMetadata }>(
  '../../Visuals/**/*.{png,jpg,jpeg,webp,svg,avif}',
  { eager: true }
);

// Map indexed by multiple normalized keys (full path, relative path, and filename)
const imageRegistry = new Map<string, ImageMetadata>();

for (const [path, module] of Object.entries(visualsGlob)) {
  if (module && module.default) {
    const meta = module.default;
    
    // Normalize path (e.g. "../../Visuals/01_branding/logo.png" -> "01_branding/logo.png")
    const cleanPath = path
      .replace(/^[./\\]+/, '')
      .replace(/^Visuals[/\\]/i, '')
      .toLowerCase();
    imageRegistry.set(cleanPath, meta);

    // Index by filename alone (e.g. "logo.png")
    const filename = path.split(/[/\\]/).pop()?.toLowerCase();
    if (filename && !imageRegistry.has(filename)) {
      imageRegistry.set(filename, meta);
    }
  }
}

/**
 * Safely resolves an image from the Visuals directory.
 * If the image exists, returns the ImageMetadata.
 * If missing, deleted, or misspelled, returns a clean fallback ImageMetadata without crashing the site.
 */
export function getVisualImage(
  pathOrFilename?: string | null,
  category: FallbackCategory = 'clinic'
): ImageMetadata {
  if (!pathOrFilename) {
    return fallbackImages[category] || fallbackClinic;
  }

  // Normalize query
  const query = pathOrFilename
    .replace(/^[./\\]+/, '')
    .replace(/^Visuals[/\\]/i, '')
    .replace(/^@visuals[/\\]/i, '')
    .toLowerCase();

  // 1. Direct path lookup
  if (imageRegistry.has(query)) {
    return imageRegistry.get(query)!;
  }

  // 2. Filename lookup
  const filename = pathOrFilename.split(/[/\\]/).pop()?.toLowerCase();
  if (filename && imageRegistry.has(filename)) {
    return imageRegistry.get(filename)!;
  }

  // Graceful fallback with warning
  console.warn(`[SafeImageRegistry] Image not found: "${pathOrFilename}". Falling back to "${category}".`);
  return fallbackImages[category] || fallbackClinic;
}

/**
 * Check whether an image exists in the Visuals directory.
 */
export function hasVisualImage(pathOrFilename?: string | null): boolean {
  if (!pathOrFilename) return false;
  const query = pathOrFilename
    .replace(/^[./\\]+/, '')
    .replace(/^Visuals[/\\]/i, '')
    .replace(/^@visuals[/\\]/i, '')
    .toLowerCase();

  if (imageRegistry.has(query)) return true;
  const filename = pathOrFilename.split(/[/\\]/).pop()?.toLowerCase();
  return !!filename && imageRegistry.has(filename);
}
