export interface Testimonial {
  author: string;
  quote: string;
  rating: number;
  date: string;
  googleReviewUrl: string;
  avatarUrl?: string;
  isLocalGuide?: boolean;
  reviewCount?: number;
}

const AVATAR_COLORS = [
  '#6d4c41',
  '#7b1fa2',
  '#1565c0',
  '#c62828',
  '#2e7d32',
  '#ef6c00',
  '#00838f',
  '#4527a0',
];

export function avatarInitial(name: string): string {
  const letter = name.trim().charAt(0);
  return letter ? letter.toUpperCase() : '?';
}

export function avatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}

export function formatReviewDate(isoDate: string): string {
  const then = new Date(`${isoDate}T12:00:00`).getTime();
  const days = Math.max(0, Math.round((Date.now() - then) / 86400000));
  if (days < 1) return 'today';
  if (days === 1) return '1 day ago';
  if (days < 7) return `${days} days ago`;
  const weeks = Math.round(days / 7);
  if (weeks === 1) return '1 week ago';
  if (weeks < 5) return `${weeks} weeks ago`;
  const months = Math.round(days / 30.44);
  if (months <= 1) return '1 month ago';
  if (months < 12) return `${months} months ago`;
  const years = Math.round(days / 365.25);
  return years <= 1 ? '1 year ago' : `${years} years ago`;
}

export const testimonials: Testimonial[] = [
  {
    author: "Nandini Sharma",
    quote: "I started my clear aligner smile correction treatment with Dr. Jyothi 6 months ago, and the transformation is phenomenal! The digital 3D scans and custom trays made the entire orthodontic process comfortable, invisible, and hassle-free. Dr. Jyothi is exceptionally skilled, attentive to every detail, and ensures every check-in is thorough.",
    rating: 5,
    date: "2026-08-08",
    googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Apex+Dental+and+Orthodontic+Clinic+Vidyaranyapura",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: true,
    reviewCount: 14
  },
  {
    author: "Rajeshwari Thangam",
    quote: "I recently had a root canal and crown treatment done by Dr. Jyoti, and I must say it was an exceptional experience. Dr. Jyoti is not only highly skilled and knowledgeable but also incredibly warm, friendly, and approachable. She made me feel completely at ease throughout the entire procedure. The clinic is well-maintained and hygiene standards are exemplary. Truly grateful for the compassionate care!",
    rating: 5,
    date: "2026-06-15",
    googleReviewUrl: "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xaNExYbFJiWGhLY1Zwc1ZGUmtOREJzTVhWcVNHYxAB!2m1!1s0x0",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: false,
    reviewCount: 10
  },
  {
    author: "Karthik Venkat",
    quote: "I visited Apex Dental in excruciating toothache from a deep infection. Dr. Jyothi performed a single-visit root canal that was 100% painless! The digital chair setup and calm approach immediately melted away my dental anxiety. The crown fitting feels completely natural. Best dental clinic in Vidyaranyapura without doubt.",
    rating: 5,
    date: "2026-08-01",
    googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Apex+Dental+and+Orthodontic+Clinic+Vidyaranyapura",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: false,
    reviewCount: 6
  },
  {
    author: "Jayvardan Aananthan",
    quote: "I underwent teeth alignment procedures with Dr. Jyothi Sajjan at Apex Dental & Orthodontic clinic near Sambhram College. From the moment I walked in, I was greeted with warmth and professionalism. Dr. Jyothi explained the teeth alignment process step-by-step and developed a customized plan. I am thrilled with my aligned smile and grateful for the outstanding service!",
    rating: 5,
    date: "2026-05-02",
    googleReviewUrl: "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUNwck9fci1BRRAB!2m1!1s0x0",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: true,
    reviewCount: 12
  },
  {
    author: "Sneha Hegde",
    quote: "Got my teeth scaling and deep cleaning done here. Super gentle, thorough, and zero sensitivity afterwards. Dr. Jyothi is very patient in providing long-term oral hygiene advice without pushing any unnecessary treatments. Clean clinic, friendly staff, and transparent pricing.",
    rating: 5,
    date: "2026-07-22",
    googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Apex+Dental+and+Orthodontic+Clinic+Vidyaranyapura",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: false,
    reviewCount: 5
  },
  {
    author: "Elvis Jose",
    quote: "I visited Apex Dental Clinic for a tooth filling, and I’m very happy with the overall experience. The clinic is clean, well-maintained, and has a calm environment. The doctor was gentle, patient, and explained the procedure clearly before starting, which helped ease my anxiety. The filling was quick and painless.",
    rating: 5,
    date: "2026-05-30",
    googleReviewUrl: "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT25wbmRHdEVZa1Y2YTBkQmJVOVJYMjFWTnpWalJXYxAB!2m1!1s0x0",
    avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: true,
    reviewCount: 22
  },
  {
    author: "Vikramaditya Rao",
    quote: "Replaced a missing molar with a dental implant under Dr. Jyothi's care. The precision, modern digital X-ray diagnostics, and surgical hygiene were outstanding. Healing was very smooth and I can chew with complete comfort now. Exceptional expertise!",
    rating: 5,
    date: "2026-07-12",
    googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Apex+Dental+and+Orthodontic+Clinic+Vidyaranyapura",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: false,
    reviewCount: 8
  },
  {
    author: "Agastya P",
    quote: "I got my braces fixed and completed my orthodontic journey with perfectly aligned teeth ahead of the 1-year mark! Dr. Jyothi has done a commendable job. She reassures and treats patients in a very kind and friendly manner. I'm fully satisfied and recommend Apex Dental to everyone seeking braces.",
    rating: 5,
    date: "2026-04-10",
    googleReviewUrl: "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xFeVN6WmpWRWRpVG5GRlFuaHdRMU4zUzB4MlYyYxAB!2m1!1s0x0",
    isLocalGuide: false,
    reviewCount: 1
  },
  {
    author: "Pooja Nambiar",
    quote: "Took my 7-year-old for a pediatric checkup and cavity filling. Dr. Jyothi is amazingly patient and warm with children. She explained everything in a fun way, and my child didn't feel afraid or uncomfortable for a second. Very grateful to have such a reliable clinic nearby.",
    rating: 5,
    date: "2026-06-28",
    googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Apex+Dental+and+Orthodontic+Clinic+Vidyaranyapura",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: true,
    reviewCount: 19
  },
  {
    author: "Pragya Bharti",
    quote: "I had root canal treatments done at Apex Dental Clinic, and it was a really smooth and positive experience. The dentists are highly skilled, patient, and accommodating to both your needs and timelines. They take the time to explain everything simply. Highly recommended!",
    rating: 5,
    date: "2026-03-22",
    googleReviewUrl: "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xZdGRWOHlRM05JWldaSU4zSkRVbGRxWm1sSlFYYxAB!2m1!1s0x0",
    isLocalGuide: false,
    reviewCount: 3
  },
  {
    author: "Ananya Deshmukh",
    quote: "Had a troublesome wisdom tooth extracted by Dr. Jyothi. I was terrified of pain, but the procedure was completed swiftly and smoothly with zero discomfort. The aftercare instructions were crystal clear and recovery was quick. Wonderful clinic!",
    rating: 5,
    date: "2026-05-18",
    googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Apex+Dental+and+Orthodontic+Clinic+Vidyaranyapura",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: false,
    reviewCount: 4
  },
  {
    author: "Reshma G",
    quote: "I can't say enough great things about Dr. Jyothi mam! She is extremely professional, knowledgeable, and always takes time to answer all questions thoroughly. Every appointment is punctual. I am delighted with the results of my dental treatment and feel totally confident now.",
    rating: 5,
    date: "2026-03-05",
    googleReviewUrl: "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VMdkduSTZrOHVlek5REAE!2m1!1s0x0",
    isLocalGuide: false,
    reviewCount: 1
  },
  {
    author: "Raghunandana Ramachandra",
    quote: "I wanted to express my appreciation for the exceptional care I received. From the very beginning, I was impressed by the professionalism and attentiveness. The clinic environment is welcoming and clean. Timely updates on treatment progress really helped alleviate all anxiety. Outstanding service!",
    rating: 5,
    date: "2026-02-14",
    googleReviewUrl: "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUNfdW9fZllREAE!2m1!1s0x0",
    isLocalGuide: false,
    reviewCount: 4
  },
  {
    author: "Sultan Sadiq",
    quote: "I visited Apex Dental for tooth pain. Dr. Jyothi took digital X-rays and explained the infection clearly. After root canal treatment and placing the crown, my tooth problem is completely solved. Thank you doctor for the best treatment!",
    rating: 5,
    date: "2026-01-20",
    googleReviewUrl: "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUNYdktXNVFREAE!2m1!1s0x0",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80",
    isLocalGuide: true,
    reviewCount: 17
  },
  {
    author: "Padana dhapra",
    quote: "Dr. Jyothi is a very professional dentist with deep experience who shows genuine care for her patients. Took my wife for consultation & filling treatment. Clean, hygienic environment and reasonable cost. Best dental clinic near MS Palya and Sambhram College.",
    rating: 5,
    date: "2025-11-10",
    googleReviewUrl: "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUNoN19uODNBRRAB!2m1!1s0x0",
    isLocalGuide: false,
    reviewCount: 8
  }
];
