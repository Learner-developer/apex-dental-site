export type ClinicTourCategory =
  | 'operatory'
  | 'technology'
  | 'sterilization'
  | 'entrance'
  | 'facility';

export interface ClinicTourItem {
  filename: string;
  path: string;
  caption: string;
  category: ClinicTourCategory;
}

export const clinicTourItems: ClinicTourItem[] = [
  {
    filename: 'treatment-operatory-green-chair-setup.jpg',
    path: '02_clinic_and_facilities/interior_and_equipment/treatment-operatory-green-chair-setup.jpg',
    caption: 'Two fully-equipped treatment rooms, each set up for a calm, unhurried visit.',
    category: 'operatory',
  },
  {
    filename: 'treatment-operatory-blue-chair-side.jpg',
    path: '02_clinic_and_facilities/interior_and_equipment/treatment-operatory-blue-chair-side.jpg',
    caption: 'A second operatory with modern dental chair and equipment.',
    category: 'operatory',
  },
  {
    filename: 'operatory-chair-with-digital-opg-xray-display.jpg',
    path: '02_clinic_and_facilities/interior_and_equipment/operatory-chair-with-digital-opg-xray-display.jpg',
    caption: 'Full digital imaging on-site — no waiting on outside lab results.',
    category: 'technology',
  },
  {
    filename: 'digital-panoramic-opg-xray-monitor.jpg',
    path: '02_clinic_and_facilities/interior_and_equipment/digital-panoramic-opg-xray-monitor.jpg',
    caption: 'Digital panoramic X-ray diagnostics available chairside.',
    category: 'technology',
  },
  {
    filename: 'nsk-endo-mate-dt-rotary-endodontic-motor.jpg',
    path: '02_clinic_and_facilities/interior_and_equipment/nsk-endo-mate-dt-rotary-endodontic-motor.jpg',
    caption: 'The rotary technology behind our faster, gentler root canal treatments.',
    category: 'technology',
  },
  {
    filename: 'sterilization-room-autoclave-and-storage.jpg',
    path: '02_clinic_and_facilities/interior_and_equipment/sterilization-room-autoclave-and-storage.jpg',
    caption:
      'A dedicated autoclave room — every instrument sterilized between patients, not just wiped down.',
    category: 'sterilization',
  },
  {
    filename: 'clinic-entrance-reception-glass-door.jpg',
    path: '02_clinic_and_facilities/exterior/clinic-entrance-reception-glass-door.jpg',
    caption: 'Find us on Amba Bhavani Temple Road, near Sambhram Institute of Technology.',
    category: 'entrance',
  },
  {
    filename: 'clinic-outdoor-hanging-signboard.jpg',
    path: '02_clinic_and_facilities/exterior/clinic-outdoor-hanging-signboard.jpg',
    caption: 'Easy to spot from the street in Vidyaranyapura.',
    category: 'entrance',
  },
  {
    filename: 'clinic-interior-operatory-and-sterilization-room.jpg',
    path: '02_clinic_and_facilities/interior_and_equipment/clinic-interior-operatory-and-sterilization-room.jpg',
    caption: 'Wide view of the clinic treatment and sterilization bay.',
    category: 'facility',
  },
  {
    filename: 'operatory-and-doctor-consultation-desk.jpg',
    path: '02_clinic_and_facilities/interior_and_equipment/operatory-and-doctor-consultation-desk.jpg',
    caption: 'Consultation desk beside the treatment area for clear, unhurried visits.',
    category: 'facility',
  },
  {
    filename: 'dental-chair-unit-side-view.jpg',
    path: '02_clinic_and_facilities/interior_and_equipment/dental-chair-unit-side-view.jpg',
    caption: 'Ergonomic dental unit for comfortable treatment.',
    category: 'facility',
  },
  {
    filename: 'dental-chair-led-examination-light-detail.jpg',
    path: '02_clinic_and_facilities/interior_and_equipment/dental-chair-led-examination-light-detail.jpg',
    caption: 'LED surgical lighting for precise clinical care.',
    category: 'facility',
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
