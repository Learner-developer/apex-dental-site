export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'How long does teeth alignment take with braces?',
    answer:
      'Traditional orthodontic treatment often takes 18-24 months. At Apex Dental, most mild-to-moderate cases are completed in 7-11 months, depending on the individual case.',
  },
  {
    question: 'Is root canal treatment painful?',
    answer:
      'Most patients describe it as painless or close to it. Local anesthesia plus rotary endodontic equipment keep the procedure quick and gentle.',
  },
  {
    question: 'Do you offer a free consultation?',
    answer:
      'Yes — braces and clear aligner consultations are free. Dr. Jyothi Sajjan examines your case, takes any needed diagnostics, and gives you a personalized treatment plan before you commit to anything.',
  },
  {
    question: 'How does pricing compare to other clinics?',
    answer:
      "Patients regularly mention that treatment here costs less than at other clinics they'd considered, while still using materials like zirconia crowns and rotary endodontics. Ask for a quote at your consultation — it's free either way.",
  },
  {
    question: 'How do you handle hygiene and sterilization?',
    answer:
      'Every instrument is sterilized in a dedicated autoclave bay between patients, and single-use disposable barriers are used throughout.',
  },
];

export const whyChooseItems = [
  {
    title: 'Led directly by an MDS Orthodontist.',
    description:
      'Dr. Jyothi Sajjan treats every orthodontic case herself — not handed off to a visiting associate.',
  },
  {
    title: 'Braces done faster than the average.',
    description:
      'Most patients finish alignment in 7-11 months, well under the typical 18-24 month timeline.',
  },
  {
    title: 'Root canals without the dread.',
    description:
      'Rotary endodontic equipment and digital imaging mean most root canal patients describe the procedure as painless.',
  },
  {
    title: 'Priced to be seen regularly, not avoided.',
    description:
      'Patients consistently mention treatment costs less here than at comparable clinics nearby.',
  },
  {
    title: 'A dedicated sterilization room.',
    description:
      'Every instrument is autoclaved between patients, in a bay built for that purpose.',
  },
  {
    title: 'Follow-up that actually happens.',
    description:
      'Multiple patients mention the doctor checking in after treatment, not just at the appointment.',
  },
];

export const trustStats = [
  { value: '4.97★', label: 'Google Rating (482 reviews)' },
  { value: '7-11 months', label: 'Average braces alignment time' },
  { value: '2 doctors', label: 'MDS Orthodontist + Endodontist on staff' },
  { value: '100%', label: 'Instruments sterilized between every patient' },
];
