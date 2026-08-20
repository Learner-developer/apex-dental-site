export const SHOW_BEFORE_AFTER_GALLERY = true;

export const siteUrl = (typeof process !== 'undefined' && process.env.SITE_URL) || 'https://apexdentalclinic.in';
export const gaMeasurementId = (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_GA_MEASUREMENT_ID) || '';

export const clinicName = 'Apex Dental & Orthodontic Clinic';
export const legalName = 'Apex Dental & Orthodontic Clinic';
export const alternateNames = [
  'Apex Dental Clinic Vidyaranyapura',
  'Apex Orthodontic Clinic Bengaluru',
  'Apex Dental & Orthodontic Care',
];
export const tagline = 'Where Quality Meets Affordability';
export const phoneDisplay = '+91 98869 63633';
export const phoneTel = '+919886963633';
export const whatsappNumber = '919886963633';
export const whatsappMessage =
  "Hi, I'd like to book an appointment at Apex Dental & Orthodontic Clinic.";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
export const telUrl = `tel:${phoneTel}`;

export const address =
  '#2, Amba Bhavani Temple Rd, near Sambhram Institute of Technology College, Vidyaranyapura Post, BHEL Layout, Chickbetahalli, Bengaluru, Karnataka 560097';

export const geo = {
  latitude: 13.0827,
  longitude: 77.5623,
  region: 'IN-KA',
  placename: 'Vidyaranyapura, Bengaluru',
  postalCode: '560097',
  streetAddress: '#2, Amba Bhavani Temple Rd, near Sambhram Institute of Technology College, Vidyaranyapura Post, BHEL Layout, Chickbetahalli',
  addressLocality: 'Bengaluru',
  addressRegion: 'Karnataka',
  addressCountry: 'IN',
};

export const businessDetails = {
  ratingValue: '4.97',
  reviewCount: 482,
  bestRating: 5,
  worstRating: 1,
  priceRange: '₹₹ (Affordable)',
  currenciesAccepted: 'INR',
  paymentAccepted: [
    'Cash',
    'UPI',
    'Google Pay',
    'PhonePe',
    'Paytm',
    'Credit Card',
    'Debit Card',
    'Net Banking',
  ],
  areasServed: [
    'Vidyaranyapura',
    'Mohammed Sab Palya (MS Palya)',
    'Chickbetahalli',
    'BHEL Layout',
    'Jalahalli East',
    'Sambhram College Campus',
    'Yelahanka',
    'Bengaluru',
  ],
};

export const hours = {
  weekdays: 'Monday–Saturday',
  morning: '9:30 AM – 2:00 PM',
  evening: '4:30 PM – 8:30 PM',
  closed: 'Closed Sunday',
  structured: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '14:00',
    },
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '16:30',
      closes: '20:30',
    },
  ],
};

export const googleMapsCid = '16137579278529908569';
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&cid=${googleMapsCid}&hl=en&z=16&output=embed`;
export const googleReviewsUrl = `https://www.google.com/maps?cid=${googleMapsCid}`;
export const googleDirectionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=Apex+Dental+%26+Orthodontic+Clinic+Vidyaranyapura+Bengaluru';

export const seo = {
  siteName: 'Apex Dental & Orthodontic Clinic',
  title: 'Apex Dental & Orthodontic Clinic | Vidyaranyapura, Bengaluru',
  description:
    'Dental & orthodontic care in Vidyaranyapura, Bengaluru. 4.97★ from 482 reviews. MDS-qualified orthodontist, painless root canals, free braces consultation. Book on WhatsApp.',
  ogTitle: 'Apex Dental & Orthodontic Clinic | Quality Dental Care in Vidyaranyapura, Bengaluru',
  ogDescription:
    'Braces, root canal, implants & family dentistry in Vidyaranyapura, Bengaluru — 4.97★, 482 reviews, led by an MDS Orthodontist.',
  ogImage: '/Visuals/01_branding_and_credentials/apex-dental-clinic-3d-wall-logo.png',
  keywords:
    'dental clinic vidyaranyapura, dentist in vidyaranyapura, orthodontist vidyaranyapura bangalore, braces cost bangalore, clear aligners vidyaranyapura, root canal treatment vidyaranyapura, dental implants bangalore, pediatric dentist vidyaranyapura, teeth whitening bengaluru',
  locale: 'en_IN',
};

export const navLinks = [
  { label: 'Specialty', href: '#services' },
  { label: 'Meet the Doctors', href: '#doctors' },
  { label: 'Results', href: '#before-after' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Clinic Tour', href: '#gallery' },
] as const;

