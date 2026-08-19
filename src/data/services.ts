export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceDepartment {
  id: string;
  title: string;
  intro: string;
  items: ServiceItem[];
  footer?: string;
  imagePath: string;
}

export const services: ServiceDepartment[] = [
  {
    id: 'orthodontics',
    title: 'Orthodontics & Dentofacial Orthopedics',
    intro: 'Led directly by Dr. Jyothi Sajjan, MDS in Orthodontics.',
    items: [
      {
        name: 'Metal braces',
        description:
          'durable stainless-steel brackets for correcting moderate to severe misalignment.',
      },
      {
        name: 'Ceramic (clear) braces',
        description:
          'same correction, tooth-colored brackets for a less visible option.',
      },
      {
        name: 'Clear aligners',
        description:
          'removable, custom-fit trays for patients who prefer a discreet, take-out option.',
      },
      {
        name: 'Lingual braces',
        description: 'brackets fitted behind the teeth, fully hidden from the front.',
      },
      {
        name: 'Retainers',
        description:
          'custom clear or bonded wire retainers to hold your results after braces come off.',
      },
    ],
    footer: 'Most patients complete treatment in 7-11 months, depending on the case.',
    imagePath:
      '04_treatment_educational/braces-types-lingual-metal-ceramic-clear.jpg',
  },
  {
    id: 'root-canal',
    title: 'Root Canal & Endodontics',
    intro: 'Performed using rotary endodontic technology for faster, gentler treatment.',
    items: [
      {
        name: 'Single or two-sitting root canal',
        description: 'most cases completed in one or two visits.',
      },
      {
        name: 'Digital X-ray diagnostics',
        description:
          "the root's exact condition is checked chairside before treatment starts.",
      },
      {
        name: 'Re-treatment',
        description: "for a root canal done elsewhere that's still causing problems.",
      },
    ],
    imagePath:
      '02_clinic_and_facilities/interior_and_equipment/nsk-endo-mate-dt-rotary-endodontic-motor.jpg',
  },
  {
    id: 'oral-surgery',
    title: 'Oral Surgery & Extractions',
    intro: 'For wisdom teeth and extractions, handled with care.',
    items: [
      {
        name: 'Wisdom tooth removal',
        description:
          'for impacted, angled, or partially emerged third molars, removed with an approach that limits trauma to surrounding tissue.',
      },
      {
        name: 'Routine and surgical extractions',
        description: 'for teeth too decayed, broken, or loose to save.',
      },
      {
        name: 'Pre-orthodontic extractions',
        description:
          'planned removal of specific teeth to make room before braces, when a case needs it.',
      },
      {
        name: 'Post-extraction follow-up',
        description:
          'a check-in call after your procedure, not just a form to sign on the way out.',
      },
    ],
    imagePath: '03_doctor_and_team/dental-examination-instruments-procedure-closeup.jpg',
  },
  {
    id: 'prosthodontics',
    title: 'Prosthodontics & Dental Implants',
    intro: 'Replacing missing or damaged teeth, from a single crown to a full set of dentures.',
    items: [
      {
        name: 'Zirconia crowns & bridges',
        description: 'metal-free, natural-looking restorations.',
      },
      {
        name: 'Ceramic and PFM crowns',
        description: 'durable options for front and back teeth.',
      },
      {
        name: 'Dental implants',
        description: 'titanium tooth-root replacements for one missing tooth or several.',
      },
      {
        name: 'Complete dentures',
        description: 'a full custom-made set for comfort and a natural bite.',
      },
      {
        name: 'Partial dentures',
        description: 'removable or fixed options when only some teeth need replacing.',
      },
    ],
    imagePath:
      '02_clinic_and_facilities/interior_and_equipment/dental-chair-unit-side-view.jpg',
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic & Aesthetic Dentistry',
    intro: 'Fixing chips, gaps, and stains without a full smile overhaul.',
    items: [
      {
        name: 'Composite bonding',
        description: 'a same-visit fix for chipped, worn, or uneven teeth.',
      },
      {
        name: 'Gap closure',
        description: 'closing a space between the front teeth without braces.',
      },
      {
        name: 'Fractured tooth repair',
        description: 'rebuilding a broken front tooth to match the rest of your smile.',
      },
      {
        name: 'Porcelain veneers',
        description: 'thin custom shells for a full smile redesign.',
      },
      {
        name: 'Teeth whitening',
        description: 'in-clinic bleaching and polishing for a brighter smile.',
      },
    ],
    imagePath: '03_doctor_and_team/dr-jyothi-sajjan-patient-consultation-desk.jpg',
  },
  {
    id: 'periodontics',
    title: 'Periodontics & Preventive Care',
    intro: 'Keeping your gums and teeth healthy between bigger procedures.',
    items: [
      {
        name: 'Deep ultrasonic scaling',
        description: 'removes tartar buildup above and below the gumline.',
      },
      {
        name: 'Stain polishing',
        description: 'lifts tea, coffee, and tobacco stains.',
      },
      {
        name: 'Gum treatment',
        description: 'for bleeding or inflamed gums, before it becomes a bigger problem.',
      },
      {
        name: 'Hygiene consultations',
        description: 'a yearly checkup and a personalized care routine.',
      },
    ],
    imagePath:
      '02_clinic_and_facilities/interior_and_equipment/sterilization-room-autoclave-and-storage.jpg',
  },
  {
    id: 'pediatric',
    title: 'Pediatric & Family Dentistry',
    intro: 'A calm first dental experience for kids, and ongoing care as they grow.',
    items: [
      {
        name: 'Child checkups',
        description: 'a friendly, unhurried visit designed to keep kids relaxed.',
      },
      {
        name: 'Fluoride treatment & sealants',
        description: 'protects young teeth from cavities before they start.',
      },
      {
        name: 'Milk tooth fillings & space maintainers',
        description: 'treats baby teeth and holds space for adult teeth coming in.',
      },
      {
        name: 'Habit-breaking appliances',
        description: 'custom devices to help with thumb-sucking or tongue-thrusting.',
      },
    ],
    imagePath:
      '02_clinic_and_facilities/interior_and_equipment/treatment-operatory-green-chair-setup.jpg',
  },
];
