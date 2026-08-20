export interface DoctorProfile {
  name: string;
  role: string;
  specialtyTag: string;
  degrees: string;
  registration?: string;
  badge: string;
  bio: string;
  highlights: string[];
  linkedinUrl: string;
  imagePath?: string;
  imageAlt?: string;
  isAvatar?: boolean;
  avatarInitials?: string;
  accentColor: string;
  badgeBg: string;
}

export const doctorsData: DoctorProfile[] = [
  {
    name: 'Dr. Jyothi Sajjan',
    role: 'Founder & Lead Orthodontist',
    specialtyTag: 'Lead Orthodontics & Dentofacial Orthopedics',
    degrees: 'BDS, MDS Orthodontics (RGUHS)',
    registration: 'KSDC Registered Dental Practitioner',
    badge: 'Founder',
    linkedinUrl: 'https://in.linkedin.com/in/dr-jyoti-sajjan-6154602a9',
    bio: 'Dr. Jyothi Sajjan holds a BDS and an MDS in Orthodontics from Rajiv Gandhi University of Health Sciences. She personally diagnoses and conducts every orthodontic appointment at Apex Dental — ensuring precision tooth alignment and attentive one-on-one care.',
    highlights: [
      '7–11 Month average mild-to-moderate braces timeline',
      'Direct MDS-led care — no visiting associates',
      'Free in-person orthodontic & aligner consultation',
    ],
    imagePath: '03_doctor_and_team/dr-jyothi-sajjan-patient-consultation-desk.webp',
    imageAlt: 'Dr. Jyothi Sajjan in a patient consultation at Apex Dental desk',
    isAvatar: false,
    accentColor: '#38bdf8',
    badgeBg: 'bg-[#38bdf8]',
  },
  {
    name: 'Dr. Monika Mohanty',
    role: 'Specialist Endodontist',
    specialtyTag: 'Endodontics & Conservative Dentistry',
    degrees: 'BDS, Specialist in Endodontics & Conservative Dentistry',
    registration: 'KSDC Registered Dental Practitioner',
    badge: 'Specialist Endodontist',
    linkedinUrl: 'https://in.linkedin.com/in/dr-monika-mohanty-043796217',
    bio: 'Dr. Monika Mohanty specializes in gentle, comfortable root canal therapy and natural tooth preservation. She uses modern computerized rotary endodontics and digital apex locators for quick, pain-free single-visit procedures.',
    highlights: [
      'Rotary Endodontics for gentle, quick RCT',
      'Digital apex locators & precision diagnostics',
      'Comfortable single-visit root canal options',
    ],
    isAvatar: true,
    avatarInitials: 'DM',
    accentColor: '#c084fc',
    badgeBg: 'bg-[#c084fc]',
  },
];

export interface CredentialSummaryItem {
  degree: string;
  title: string;
  institution: string;
  detail: string;
}

export const credentialsSummary = {
  eyebrow: 'Verified Accreditations',
  title: 'Official Degrees & Board Registrations',
  subtitle: 'Accredited by Rajiv Gandhi University of Health Sciences & Karnataka State Dental Council',
  badge: 'State Dental Council Verified',
  imageAlt: 'Dr. Jyothi Sajjan BDS, MDS degrees and Karnataka State Dental Council registration certificates framed on clinic wall',
  items: [
    {
      degree: 'MDS',
      title: 'Master of Dental Surgery (Orthodontics & Dentofacial Orthopedics)',
      institution: 'Rajiv Gandhi University of Health Sciences (RGUHS)',
      detail: '3-Year postgraduate specialization in advanced teeth alignment mechanics, jaw growth, and clear aligners.',
    },
    {
      degree: 'BDS',
      title: 'Bachelor of Dental Surgery',
      institution: 'PMNM Dental College & Hospital / RGUHS',
      detail: '5-Year comprehensive surgical and clinical oral healthcare degree.',
    },
    {
      degree: 'KSDC',
      title: 'Karnataka State Dental Council Registration',
      institution: 'Official State Dental Regulatory Authority',
      detail: 'Officially licensed dental practitioner upholding state clinical safety and sterilization standards.',
    },
    {
      degree: '100%',
      title: 'Specialist Direct-Care Standard',
      institution: 'Apex Dental Primary Clinical Commitment',
      detail: 'All primary orthodontic and root canal appointments are conducted in-person by our specialist doctors.',
    },
  ],
};
