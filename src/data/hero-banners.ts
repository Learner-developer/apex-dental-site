import type { ImageMetadata } from 'astro';
import bannerTrust from '@visuals/banner/banner-trust-general.webp';
import bannerOrthodontics from '@visuals/banner/banner-orthodontics-braces.webp';
import bannerRootCanal from '@visuals/banner/banner-root-canal-comfort.webp';
import bannerImplants from '@visuals/banner/banner-implants-restorative.webp';
import bannerFamily from '@visuals/banner/banner-family-pediatric.webp';
import { telUrl, whatsappNumber } from './site';

export interface HeroBannerCta {
  label: string;
  href: string;
  external?: boolean;
  variant?: 'primary' | 'ghost';
}

export interface HeroBanner {
  id: string;
  image: ImageMetadata;
  imageAlt: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  showRatingBadge?: boolean;
  ctas: HeroBannerCta[];
}

const wa = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const heroBanners: HeroBanner[] = [
  {
    id: 'trust',
    image: bannerTrust,
    imageAlt: 'Apex Dental clinic team providing trusted dental care in Bengaluru',
    eyebrow: 'Vidyaranyapura, Bengaluru',
    headline: 'Where Quality Meets Affordability',
    subhead:
      "Bengaluru's 4.97★ dental & orthodontic clinic — 482 patient reviews, led by an MDS-qualified orthodontist.",
    showRatingBadge: true,
    ctas: [
      {
        label: 'Book on WhatsApp',
        href: wa("Hi, I'd like to book an appointment at Apex Dental & Orthodontic Clinic."),
        external: true,
        variant: 'primary',
      },
      { label: 'Call Now', href: telUrl, variant: 'ghost' },
    ],
  },
  {
    id: 'orthodontics',
    image: bannerOrthodontics,
    imageAlt: 'Orthodontic braces treatment at Apex Dental clinic',
    eyebrow: 'Orthodontics & Braces',
    headline: 'Straighter Teeth in 7–11 Months',
    subhead: 'Free braces & clear aligner consultation with Dr. Jyothi Sajjan, MDS Orthodontist.',
    ctas: [
      {
        label: 'Book Free Consultation',
        href: wa("Hi, I'd like to book a free braces & clear aligner consultation at Apex Dental."),
        external: true,
        variant: 'primary',
      },
    ],
  },
  {
    id: 'root-canal',
    image: bannerRootCanal,
    imageAlt: 'Calm modern treatment room at Apex Dental clinic',
    eyebrow: 'Painless Root Canal',
    headline: 'Root Canals, Without the Dread',
    subhead:
      'A calm, modern treatment room — most patients describe root canal here as painless.',
    ctas: [
      {
        label: 'Book Your Visit',
        href: wa("Hi, I'd like to book a visit at Apex Dental & Orthodontic Clinic."),
        external: true,
        variant: 'primary',
      },
    ],
  },
  {
    id: 'implants',
    image: bannerImplants,
    imageAlt: 'Dental implants and restorative dentistry at Apex Dental',
    eyebrow: 'Implants & Restorative',
    headline: 'Missing Teeth, Fully Restored',
    subhead: 'Titanium implants and zirconia crowns, built to last.',
    ctas: [
      {
        label: 'Ask About Implants',
        href: wa("Hi, I'd like to ask about dental implants at Apex Dental."),
        external: true,
        variant: 'primary',
      },
    ],
  },
  {
    id: 'family',
    image: bannerFamily,
    imageAlt: 'Friendly family dental checkup at Apex Dental clinic',
    eyebrow: 'Family & Pediatric',
    headline: "A Dental Visit Your Kids Won't Dread",
    subhead: 'Friendly, unhurried checkups the whole family can trust.',
    ctas: [
      {
        label: 'Book a Family Checkup',
        href: wa("Hi, I'd like to book a family checkup at Apex Dental."),
        external: true,
        variant: 'primary',
      },
    ],
  },
];
