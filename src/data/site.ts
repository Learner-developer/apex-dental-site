export const SHOW_BEFORE_AFTER_GALLERY = false;

export const clinicName = 'Apex Dental & Orthodontic Clinic';
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

export const hours = {
  weekdays: 'Monday–Saturday',
  morning: '9:30 AM – 2:00 PM',
  evening: '4:30 PM – 8:30 PM',
  closed: 'Closed Sunday',
};

export const googleMapsCid = '16137579278529908569';
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&cid=${googleMapsCid}&hl=en&z=16&output=embed`;

export const seo = {
  title: 'Apex Dental & Orthodontic Clinic | Vidyaranyapura, Bengaluru',
  description:
    'Dental & orthodontic care in Vidyaranyapura, Bengaluru. 4.97★ from 482 reviews. MDS-qualified orthodontist, free braces consultation. Book on WhatsApp.',
  ogDescription:
    'Braces, root canal, implants & family dentistry in Vidyaranyapura, Bengaluru — 4.97★, 482 reviews, led by an MDS Orthodontist.',
};

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Meet the Doctors', href: '#doctors' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
] as const;
