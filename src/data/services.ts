export interface ServiceItem {
  name: string;
  description: string;
}

export interface QuickServiceItem {
  id: string;
  indexNumber: string;
  categoryTag: string;
  title: string;
  description: string;
  targetAnchor: string;
  colorTheme: 'cyan' | 'rose' | 'mint' | 'purple' | 'amber' | 'teal';
  icon: 'sparkle-tooth' | 'implant' | 'aligner' | 'surgery' | 'rct' | 'cleaning';
}

export interface ServiceDepartment {
  id: string;
  title: string;
  shortTitle?: string;
  category: 'orthodontics' | 'root-canal' | 'surgery-implants' | 'cosmetics' | 'preventive-kids';
  badge: string;
  intro: string;
  items: ServiceItem[];
  footer?: string;
  imagePath: string;
  whatsappQuery: string;
}

export const quickServices: QuickServiceItem[] = [
  {
    id: 'teeth-whitening',
    indexNumber: '01',
    categoryTag: 'Cosmetic Smile',
    title: 'Teeth Whitening',
    description: 'Cosmetic treatment to enhance the whiteness & radiance of teeth',
    targetAnchor: '#dept-cosmetic',
    colorTheme: 'cyan',
    icon: 'sparkle-tooth',
  },
  {
    id: 'dental-implant',
    indexNumber: '02',
    categoryTag: 'Restorative Implants',
    title: 'Dental Implant',
    description: 'Surgical placement of artificial tooth roots & permanent crowns',
    targetAnchor: '#dept-prosthodontics',
    colorTheme: 'rose',
    icon: 'implant',
  },
  {
    id: 'teeth-alignment',
    indexNumber: '03',
    categoryTag: 'MDS Orthodontics',
    title: 'Teeth Alignment',
    description: 'Braces & clear aligners for healthy, confident smile alignment',
    targetAnchor: '#dept-orthodontics',
    colorTheme: 'mint',
    icon: 'aligner',
  },
  {
    id: 'root-canal',
    indexNumber: '04',
    categoryTag: 'Painless RCT',
    title: 'Root Canal (RCT)',
    description: 'Painless rotary endodontics to relieve acute pain and save teeth',
    targetAnchor: '#dept-root-canal',
    colorTheme: 'amber',
    icon: 'rct',
  },
  {
    id: 'teeth-cleaning',
    indexNumber: '05',
    categoryTag: 'Hygiene & Gum Care',
    title: 'Teeth Cleaning & Gum Care',
    description: 'Deep ultrasonic scaling & stain removal for healthy gums',
    targetAnchor: '#dept-periodontics',
    colorTheme: 'teal',
    icon: 'cleaning',
  },
  {
    id: 'oral-surgery',
    indexNumber: '06',
    categoryTag: 'Oral Surgery',
    title: 'Oral Surgery',
    description: 'Gentle wisdom teeth removal & restorative extractions',
    targetAnchor: '#dept-oral-surgery',
    colorTheme: 'purple',
    icon: 'surgery',
  },
];

export const serviceCategories = [
  { id: 'all', label: 'All Departments' },
  { id: 'orthodontics', label: 'Orthodontics & Braces' },
  { id: 'root-canal', label: 'Root Canal (RCT)' },
  { id: 'surgery-implants', label: 'Implants & Surgery' },
  { id: 'cosmetics', label: 'Cosmetic Dentistry' },
  { id: 'preventive-kids', label: 'Pediatric & Hygiene' },
] as const;

export const services: ServiceDepartment[] = [
  {
    id: 'orthodontics',
    title: 'Orthodontics & Dentofacial Orthopedics',
    shortTitle: 'Orthodontics & Braces',
    category: 'orthodontics',
    badge: 'MDS Specialist Led',
    intro: 'Led directly by Dr. Jyothi Sajjan, MDS in Orthodontics. Most cases completed in 7-11 months.',
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
    footer: 'Free initial consultation · Average 7-11 month treatment completion',
    imagePath:
      '04_treatment_educational/braces-types-lingual-metal-ceramic-clear.webp',
    whatsappQuery: "Hi Dr. Jyothi, I'd like to book a free braces/aligners consultation at Apex Dental.",
  },
  {
    id: 'root-canal',
    title: 'Root Canal & Endodontics',
    shortTitle: 'Root Canal (RCT)',
    category: 'root-canal',
    badge: 'Painless Rotary Tech',
    intro: 'Performed using NSK Endo-Mate DT rotary endodontic micro-motors for gentle, fast relief.',
    items: [
      {
        name: 'Single or two-sitting root canal',
        description: 'most acute pain cases relieved and completed in just 1-2 visits.',
      },
      {
        name: 'Digital X-ray diagnostics',
        description:
          "the root's exact anatomy and condition is checked chairside before treatment starts.",
      },
      {
        name: 'Re-treatment (Re-RCT)',
        description: "corrective care for a root canal done elsewhere that is still causing issues.",
      },
    ],
    footer: 'Chairside digital radiography · NSK micro-motor gentle canal shaping',
    imagePath:
      '02_clinic_and_facilities/interior_and_equipment/nsk-endo-mate-dt-rotary-endodontic-motor.jpg',
    whatsappQuery: "Hi Apex Dental, I'd like to consult for a Root Canal Treatment (RCT).",
  },
  {
    id: 'prosthodontics',
    title: 'Prosthodontics & Dental Implants',
    shortTitle: 'Implants & Crowns',
    category: 'surgery-implants',
    badge: 'Metal-Free Restorations',
    intro: 'Replacing missing or damaged teeth, from single zirconia crowns to complete implant rehabilitations.',
    items: [
      {
        name: 'Zirconia crowns & bridges',
        description: 'metal-free, translucent, natural-looking high-strength restorations.',
      },
      {
        name: 'Ceramic & PFM crowns',
        description: 'time-tested, durable options for front and posterior teeth.',
      },
      {
        name: 'Dental implants',
        description: 'permanent titanium tooth-root replacements for single or multiple missing teeth.',
      },
      {
        name: 'Complete dentures',
        description: 'a full custom-made set for senior comfort and natural chewing function.',
      },
      {
        name: 'Partial dentures',
        description: 'removable or flexible options when only select teeth need replacement.',
      },
    ],
    footer: 'Hospital-grade titanium implants · Premium CAD/CAM zirconia materials',
    imagePath:
      '02_clinic_and_facilities/interior_and_equipment/dental-chair-unit-side-view.webp',
    whatsappQuery: "Hi Apex Dental, I'd like to book an appointment for Dental Implants / Crowns.",
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic & Aesthetic Dentistry',
    shortTitle: 'Cosmetic & Smile Care',
    category: 'cosmetics',
    badge: 'Single-Visit Smile Fix',
    intro: 'Fixing chips, gaps, and stains to restore natural brilliance without invasive surgery.',
    items: [
      {
        name: 'Composite bonding',
        description: 'a same-visit fix for chipped, worn, or uneven anterior teeth.',
      },
      {
        name: 'Gap closure (Diastema)',
        description: 'closing spaces between front teeth seamlessly in a single appointment.',
      },
      {
        name: 'Fractured tooth repair',
        description: 'multi-layered cosmetic reconstruction to blend perfectly with natural enamel.',
      },
      {
        name: 'Porcelain veneers',
        description: 'ultra-thin custom shells for durable, long-term smile transformation.',
      },
      {
        name: 'In-clinic teeth whitening',
        description: 'advanced bleaching and polishing for instant brightness.',
      },
    ],
    footer: 'Conservative tooth preservation · High-polish aesthetic composite resins',
    imagePath: '03_doctor_and_team/dr-jyothi-sajjan-patient-consultation-desk.webp',
    whatsappQuery: "Hi Apex Dental, I'd like to book a consultation for Teeth Whitening / Cosmetic Bonding.",
  },
  {
    id: 'oral-surgery',
    title: 'Oral Surgery & Extractions',
    shortTitle: 'Oral Surgery & Wisdom Teeth',
    category: 'surgery-implants',
    badge: 'Gentle Atraumatic Care',
    intro: 'Expert handling for wisdom teeth and complex extractions with minimal tissue trauma.',
    items: [
      {
        name: 'Wisdom tooth removal',
        description:
          'specialized atraumatic approach for impacted, angled, or partially emerged third molars.',
      },
      {
        name: 'Routine & surgical extractions',
        description: 'gentle removal for teeth too decayed, fractured, or loose to preserve.',
      },
      {
        name: 'Pre-orthodontic extractions',
        description:
          'carefully planned extractions to create necessary arch space for braces alignment.',
      },
      {
        name: 'Post-extraction recovery check',
        description:
          'proactive follow-up call from our clinical team to monitor your healing.',
      },
    ],
    footer: 'Local anesthesia protocols · Proactive post-op care calls',
    imagePath: '03_doctor_and_team/dental-examination-instruments-procedure-closeup.webp',
    whatsappQuery: "Hi Apex Dental, I'd like to consult for Wisdom Tooth Removal / Extraction.",
  },
  {
    id: 'periodontics',
    title: 'Periodontics & Preventive Care',
    shortTitle: 'Gum Care & Scaling',
    category: 'preventive-kids',
    badge: 'Ultrasonic Hygiene',
    intro: 'Keeping your gums healthy, halting tartar buildup, and preventing deep periodontal disease.',
    items: [
      {
        name: 'Deep ultrasonic scaling',
        description: 'removes hardened calculus and tartar buildup above and below the gumline.',
      },
      {
        name: 'Dental stain polishing',
        description: 'lifts stubborn coffee, tea, and tobacco stains safely.',
      },
      {
        name: 'Gingivitis & gum treatment',
        description: 'targeted deep therapy for bleeding, swollen, or tender gums.',
      },
      {
        name: 'Hygiene & oral maintenance',
        description: 'personalized routine advice and preventive dental health checkups.',
      },
    ],
    footer: 'Dedicated autoclave sterilization · Annual preventive maintenance',
    imagePath:
      '02_clinic_and_facilities/interior_and_equipment/clinic-interior-operatory-and-sterilization-room.webp',
    whatsappQuery: "Hi Apex Dental, I'd like to book an appointment for Teeth Cleaning / Scaling.",
  },
  {
    id: 'pediatric',
    title: 'Pediatric & Family Dentistry',
    shortTitle: 'Pediatric & Family Care',
    category: 'preventive-kids',
    badge: 'Child Friendly Clinic',
    intro: 'A calm, welcoming dental experience for children and comprehensive family care as they grow.',
    items: [
      {
        name: 'Child dental checkups',
        description: 'a friendly, unhurried examination designed to build comfort and trust.',
      },
      {
        name: 'Fluoride treatment & sealants',
        description: 'protects developing enamel from cavities before decay starts.',
      },
      {
        name: 'Milk tooth restorations & space maintainers',
        description: 'treats baby teeth and preserves arch spacing for permanent adult teeth.',
      },
      {
        name: 'Habit-breaking appliances',
        description: 'custom preventive appliances for thumb-sucking and tongue-thrusting.',
      },
    ],
    footer: 'Gentle pedodontic techniques · Long-term pediatric arch tracking',
    imagePath:
      '02_clinic_and_facilities/interior_and_equipment/treatment-operatory-green-chair-setup.webp',
    whatsappQuery: "Hi Apex Dental, I'd like to book a pediatric/family dental checkup.",
  },
];
