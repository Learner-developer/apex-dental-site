export type ClinicTourCategory =
  | 'all'
  | 'operatory'
  | 'technology'
  | 'care'
  | 'facility';

export interface ClinicTourItem {
  filename: string;
  path: string;
  title: string;
  tag: string;
  caption: string;
  category: Exclude<ClinicTourCategory, 'all'>;
}

export const clinicTourFilters: { id: ClinicTourCategory; label: string }[] = [
  { id: 'all', label: 'All Photos' },
  { id: 'operatory', label: 'Operatories' },
  { id: 'technology', label: 'Digital Tech & Diagnostics' },
  { id: 'care', label: 'Doctor Care & Treatment' },
  { id: 'facility', label: 'Clinic Facility' },
];

export const clinicTourItems: ClinicTourItem[] = [
  {
    filename: 'treatment-operatory-green-chair-setup.webp',
    path: '02_clinic_and_facilities/interior_and_equipment/treatment-operatory-green-chair-setup.webp',
    title: 'Primary Operatory Suite',
    tag: 'Treatment Room',
    caption: 'Modern treatment room configured for relaxed, unhurried patient visits with ergonomic seating.',
    category: 'operatory',
  },
  {
    filename: 'operatory-chair-with-digital-opg-xray-display.webp',
    path: '02_clinic_and_facilities/interior_and_equipment/operatory-chair-with-digital-opg-xray-display.webp',
    title: 'Chairside Digital OPG Display',
    tag: 'Digital Imaging',
    caption: 'Instant on-screen digital X-ray diagnostics right at the dental chair for transparent treatment review.',
    category: 'technology',
  },
  {
    filename: 'dr-jyothi-sajjan-performing-dental-procedure-highres.webp',
    path: '03_doctor_and_team/dr-jyothi-sajjan-performing-dental-procedure-highres.webp',
    title: 'Specialist In-Chair Procedure',
    tag: 'MDS-Led Care',
    caption: 'Dr. Jyothi Sajjan personally conducts every orthodontic adjustment and precision procedure.',
    category: 'care',
  },
  {
    filename: 'treatment-operatory-blue-chair-side.webp',
    path: '02_clinic_and_facilities/interior_and_equipment/treatment-operatory-blue-chair-side.webp',
    title: 'Secondary Operatory Suite',
    tag: 'Treatment Room',
    caption: 'Secondary fully equipped operatory to minimize wait times and ensure prompt patient attention.',
    category: 'operatory',
  },
  {
    filename: 'digital-panoramic-opg-xray-monitor.webp',
    path: '02_clinic_and_facilities/interior_and_equipment/digital-panoramic-opg-xray-monitor.webp',
    title: 'Digital Panoramic X-Ray System',
    tag: 'Precision Diagnostics',
    caption: 'High-definition full-jaw panoramic imaging for accurate orthodontic and implant planning without outside lab trips.',
    category: 'technology',
  },
  {
    filename: 'nsk-endo-mate-dt-rotary-endodontic-motor.jpg',
    path: '02_clinic_and_facilities/interior_and_equipment/nsk-endo-mate-dt-rotary-endodontic-motor.jpg',
    title: 'NSK Rotary Endodontic Motor',
    tag: 'Advanced Tech',
    caption: 'Japanese precision rotary motor technology ensuring gentle, efficient, and pain-free single-visit root canals.',
    category: 'technology',
  },
  {
    filename: 'dr-jyothi-sajjan-treating-patient-portrait.webp',
    path: '03_doctor_and_team/dr-jyothi-sajjan-treating-patient-portrait.webp',
    title: 'Chairside Patient Care',
    tag: 'Clinical Care',
    caption: 'Attentive, gentle care with thorough patient communication throughout each step of treatment.',
    category: 'care',
  },
  {
    filename: 'clinic-interior-operatory-and-sterilization-room.webp',
    path: '02_clinic_and_facilities/interior_and_equipment/clinic-interior-operatory-and-sterilization-room.webp',
    title: 'Clinical Facility Overview',
    tag: 'Hygiene Layout',
    caption: 'Spacious layout with strict separation between clean sterilization zones and patient operatories.',
    category: 'facility',
  },
  {
    filename: 'operatory-and-doctor-consultation-desk.webp',
    path: '02_clinic_and_facilities/interior_and_equipment/operatory-and-doctor-consultation-desk.webp',
    title: 'Doctor Consultation Desk',
    tag: 'Consultation',
    caption: 'Private chairside consultation desk for detailed discussions of treatment options and transparent pricing.',
    category: 'facility',
  },
  {
    filename: 'dental-chair-unit-side-view.webp',
    path: '02_clinic_and_facilities/interior_and_equipment/dental-chair-unit-side-view.webp',
    title: 'Ergonomic Dental Chair Unit',
    tag: 'Patient Comfort',
    caption: 'Cushioned ergonomic patient seating designed to provide maximum back and neck comfort during procedures.',
    category: 'operatory',
  },
  {
    filename: 'dental-chair-led-examination-light-detail.webp',
    path: '02_clinic_and_facilities/interior_and_equipment/dental-chair-led-examination-light-detail.webp',
    title: 'Surgical LED Examination Light',
    tag: 'Operatory Tech',
    caption: 'Multi-intensity shadowless LED illumination for high-precision clinical examination and cosmetic procedures.',
    category: 'technology',
  },
  {
    filename: 'dental-examination-instruments-procedure-closeup.webp',
    path: '03_doctor_and_team/dental-examination-instruments-procedure-closeup.webp',
    title: 'Sterilized Clinical Instruments',
    tag: 'Safety & Hygiene',
    caption: '100% autoclave-sterilized dental instruments pre-packaged and opened in front of each patient.',
    category: 'care',
  },
];

export type BeforeAfterFilter =
  | 'all'
  | 'braces'
  | 'cosmetic'
  | 'crowns-dentures'
  | 'cleaning';

export interface BeforeAfterItem {
  filename: string;
  path: string;
  filter: Exclude<BeforeAfterFilter, 'all'>;
}

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    filename: 'before-after-braces-severe-teeth-crowding.jpg',
    path: '05_before_and_after_cases/orthodontics_braces/before-after-braces-severe-teeth-crowding.jpg',
    filter: 'braces',
  },
  {
    filename: 'before-after-braces-crossbite-canine-alignment.jpg',
    path: '05_before_and_after_cases/orthodontics_braces/before-after-braces-crossbite-canine-alignment.jpg',
    filter: 'braces',
  },
  {
    filename: 'before-after-braces-deep-bite-alignment.png',
    path: '05_before_and_after_cases/orthodontics_braces/before-after-braces-deep-bite-alignment.png',
    filter: 'braces',
  },
  {
    filename: 'before-after-braces-overbite-profile-correction.png',
    path: '05_before_and_after_cases/orthodontics_braces/before-after-braces-overbite-profile-correction.png',
    filter: 'braces',
  },
  {
    filename: 'before-after-metal-braces-installation.jpg',
    path: '05_before_and_after_cases/orthodontics_braces/before-after-metal-braces-installation.jpg',
    filter: 'braces',
  },
  {
    filename: 'before-during-after-lower-crowding-metal-braces.jpg',
    path: '05_before_and_after_cases/orthodontics_braces/before-during-after-lower-crowding-metal-braces.jpg',
    filter: 'braces',
  },
  {
    filename: 'before-after-broken-front-tooth-composite-repair.jpg',
    path: '05_before_and_after_cases/cosmetic_and_composite_bonding/before-after-broken-front-tooth-composite-repair.jpg',
    filter: 'cosmetic',
  },
  {
    filename: 'before-after-gap-closure-diastema-composite-bonding-1.jpg',
    path: '05_before_and_after_cases/cosmetic_and_composite_bonding/before-after-gap-closure-diastema-composite-bonding-1.jpg',
    filter: 'cosmetic',
  },
  {
    filename: 'before-after-gap-closure-diastema-composite-bonding-2.jpg',
    path: '05_before_and_after_cases/cosmetic_and_composite_bonding/before-after-gap-closure-diastema-composite-bonding-2.jpg',
    filter: 'cosmetic',
  },
  {
    filename: 'before-after-gap-closure-diastema-composite-bonding-3.jpg',
    path: '05_before_and_after_cases/cosmetic_and_composite_bonding/before-after-gap-closure-diastema-composite-bonding-3.jpg',
    filter: 'cosmetic',
  },
  {
    filename: 'before-after-gap-closure-diastema-labeled.jpg',
    path: '05_before_and_after_cases/cosmetic_and_composite_bonding/before-after-gap-closure-diastema-labeled.jpg',
    filter: 'cosmetic',
  },
  {
    filename: 'before-after-smile-makeover-dental-veneers.jpg',
    path: '05_before_and_after_cases/cosmetic_and_composite_bonding/before-after-smile-makeover-dental-veneers.jpg',
    filter: 'cosmetic',
  },
  {
    filename: 'before-after-full-mouth-complete-dentures-senior.jpg',
    path: '05_before_and_after_cases/crowns_bridges_dentures/before-after-full-mouth-complete-dentures-senior.jpg',
    filter: 'crowns-dentures',
  },
  {
    filename: 'before-after-worn-teeth-ceramic-crowns-bridge.jpg',
    path: '05_before_and_after_cases/crowns_bridges_dentures/before-after-worn-teeth-ceramic-crowns-bridge.jpg',
    filter: 'crowns-dentures',
  },
  {
    filename: 'before-during-after-anterior-crowns-bridge-rehab.jpg',
    path: '05_before_and_after_cases/crowns_bridges_dentures/before-during-after-anterior-crowns-bridge-rehab.jpg',
    filter: 'crowns-dentures',
  },
  {
    filename: 'before-during-after-teeth-scaling-calculus-removal.png',
    path: '05_before_and_after_cases/teeth_cleaning_scaling/before-during-after-teeth-scaling-calculus-removal.png',
    filter: 'cleaning',
  },
];

export const beforeAfterFilters: { id: BeforeAfterFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'braces', label: 'Braces' },
  { id: 'cosmetic', label: 'Cosmetic' },
  { id: 'crowns-dentures', label: 'Crowns & Dentures' },
  { id: 'cleaning', label: 'Cleaning' },
];
