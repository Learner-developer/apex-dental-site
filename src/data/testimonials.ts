export interface Testimonial {
  author: string;
  quote: string;
  rating: number;
  date: string;
  googleReviewUrl: string;
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
    "author": "Rajeshwari Thangam",
    "quote": "I recently had a root canal and crown treatment done by Dr. Jyoti, and I must say it was an exceptional experience. Dr. Jyoti is not only highly skilled and knowledgeable but also incredibly warm, friendly, and approachable. She made me feel completely at ease throughout the entire procedure with her interactive and caring nature. The quality of care and professionalism she provides is truly commendable. The clinic is well-maintained, and the services are efficient, thorough, and delivered with a personal touch. I also found the treatment to be very reasonably priced, which is a bonus for such high standards of dental care. What impressed me most was her dedication—she’s flexible with appointment timings, takes time to explain every step clearly, and follows up regularly to ensure smooth recovery and patient comfort. Dr. Jyoti goes above and beyond for her patients, and I wholeheartedly recommend her to anyone looking for trustworthy, compassionate, and top-notch dental treatment. I would like to express my sincere thanks to Dr. Monika for the excellent care during my root canal treatment a couple of days ago. Dr. Monika is extremely kind and patient-friendly. She speaks very calmly with her patients and clearly explains every step of the procedure, which made me feel comfortable and confident throughout the treatment. She also ensures to give short pauses during the procedure so the patient can relax. What I appreciated the most is her dedication to making sure both the doctor and the patient are completely satisfied with the treatment outcome. I have rarely seen a doctor who is so committed to patient comfort and quality of care. I would also like to appreciate Dr. Jyoti, who is equally patient-friendly and supportive. The treatment was done at Apex Dental & Orthodontic Clinic, and the cost is also very reasonable. I am truly grateful for the excellent care and highly recommend the doctors at this clinic to anyone looking for professional and compassionate dental treatment.",
    "rating": 5,
    "date": "2026-04-15",
    "googleReviewUrl": "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xaNExYbFJiWGhLY1Zwc1ZGUmtOREJzTVhWcVNHYxAB!2m1!1s0x0",
    "isLocalGuide": false,
    "reviewCount": 10
  },
  {
    "author": "Jayvardan Aananthan",
    "quote": "I recently underwent teeth alignment procedures with Dr. Jyothi Sajjan at Apex Dental & Orthodontic clinic near Sambharam college, Bangalore. From the moment I walked in, I was greeted with warmth and professionalism. Dr. Jyothi Sajjan was incredibly knowledgeable and took the time to thoroughly explain the teeth alignment process to me. She listened attentively to my concerns and preferences, and together we developed a personalized treatment plan that suited my needs. During the procedure, Dr expertise was evident. She worked meticulously to align my teeth, ensuring both aesthetic appeal and functional improvement. I appreciated her attention to detail and dedication to achieving the best possible outcome. After the procedure, Dr. Jyothi Sajjan provided clear instructions on post-treatment care and follow-up appointments. She made herself available for any questions or concerns I had, further demonstrating her commitment to patient satisfaction. Overall, my experience with Dr. Jyothi Sajjan and the Apex Dental clinic exceeded my expectations. I am thrilled with the results of my teeth alignment procedure and grateful for the outstanding service I received. If you're looking for a skilled dental professional who combines expertise with excellent patient care, I highly recommend scheduling an appointment with Dr. Jyothi Sajjan.",
    "rating": 5,
    "date": "2024-05-15",
    "googleReviewUrl": "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUNwck9fci1BRRAB!2m1!1s0x0",
    "isLocalGuide": true,
    "reviewCount": 12
  },
  {
    "author": "Raghunandana Ramachandra",
    "quote": "I wanted to take a moment to express my appreciation for the exceptional care I received during my recent visit to your clinic for my tooth issue. From the very beginning, I was impressed by the professionalism and attentiveness of your team. The clinic environment was welcoming and clean, which contributed to my comfort during my treatment. Your timely updates on the status of my treatment were greatly appreciated. It really helps to alleviate any anxiety I had regarding the procedure, knowing that I was being informed every step of the way. Most importantly, the quality of care I received was outstanding. You and your staff demonstrated a high level of expertise and concern for my well-being, which I found very reassuring. I am pleased with the results and the care I received, and I feel confident in my decision to choose your clinic for my dental needs. Thank you once again for your wonderful service. I look forward to my next visit and will not hesitate to recommend your clinic to my friends and family.",
    "rating": 5,
    "date": "2025-04-15",
    "googleReviewUrl": "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUNfdW9fZllREAE!2m1!1s0x0",
    "isLocalGuide": false,
    "reviewCount": 4
  },
  {
    "author": "Padana dhapra",
    "quote": "Dr. Jyothi madam is very professional dentist and she is a well experienced dentist who shows genuine care for her patients and provides long-term oral health advice. I took my wife for consultation & filling treatment , Firstly you feel very comfortable to talking her and Dr. Explain the procedure very well about the treatment which you undergo and treatment is done with utmost care and the cost is reasonable.. Amazingly clean environment and very hygien clinic and you feel the environment is good.. Best Dental clinic near in and around MS palya and Shambram college and Lakshmi pura surrounding areas. I strongly recommended this to anyone who seeking dental solution should visit Apex Dental clinic and opt for Dr. Jyothi sajjan service.",
    "rating": 5,
    "date": "2022-10-15",
    "googleReviewUrl": "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUNoN19uODNBRRAB!2m1!1s0x0",
    "isLocalGuide": false,
    "reviewCount": 8
  },
  {
    "author": "Elvis Jose",
    "quote": "I visited Appex Dental Clinic for a tooth filling, and I’m very happy with the overall experience. The clinic is clean, well-maintained, and has a calm environment. The doctor was gentle, patient, and explained the procedure clearly before starting, which helped ease my anxiety. The filling process was quick and almost painless. I also appreciated the hygienic precautions and the way the  doctor Jyothi handled everything professionally. After the procedure, the dentist gave clear aftercare instructions, which was very helpful. Highly recommend Appex Dental Clinic for anyone looking for quality dental care with a personal touch!",
    "rating": 5,
    "date": "2025-07-15",
    "googleReviewUrl": "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT25wbmRHdEVZa1Y2YTBkQmJVOVJYMjFWTnpWalJXYxAB!2m1!1s0x0",
    "isLocalGuide": true,
    "reviewCount": 22
  },
  {
    "author": "Pragya Bharti",
    "quote": "I had two root canal treatments done simultaneously at Apex Dental Clinic, and it was a really smooth and positive experience. The dentists are highly skilled, patient, and accommodating to both your needs and timelines. They take the time to explain everything in a simple, understandable way, which really helped ease my concerns. I did have to get one of the caps redone a couple of times due to fit issues, but the staff remained extremely helpful and supportive throughout the process. I highly recommend this clinic for anyone looking for quality dental care!",
    "rating": 5,
    "date": "2025-07-15",
    "googleReviewUrl": "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xZdGRWOHlRM05JWldaSU4zSkRVbGRxWm1sSlFYYxAB!2m1!1s0x0",
    "isLocalGuide": false,
    "reviewCount": 3
  },
  {
    "author": "Reshma G",
    "quote": "I can't say enough great things about Dr. Jyothi mam! She is extremely professional, knowledgeable, and always takes time to answer all of my questions thoroughly. Besides, every appointment is on time. My treatment has been going great, and I'm beyond happy with the results so far! If you're looking for a top-notch dentist in Bengaluru who genuinely cares about her patients, I highly recommend her! I am delighted with the result of her work and I feel totally confident now.  One of the best dental clinics I have ever been to! and I would recommend this clinic to everyone for all of their dental problems.",
    "rating": 5,
    "date": "2025-04-15",
    "googleReviewUrl": "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VMdkduSTZrOHVlek5REAE!2m1!1s0x0",
    "isLocalGuide": false,
    "reviewCount": 1
  },
  {
    "author": "Agastya P",
    "quote": "I got my braces 11 months ago and today I got my retainers with perfectly aligned teeth. I was skeptical about putting braces because I've heard that braces stay for years before the teeth align. Dr. Jyoti has done a commendable job by fixing my teeth before the 1 year mark! She explains well, reassures and treats patients in a very warm, kind and friendly manner. I'm fully satisfied with the procedure as it went without any hitch or setbacks. It is indeed the best dental clinic in the area",
    "rating": 5,
    "date": "2025-11-15",
    "googleReviewUrl": "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xFeVN6WmpWRWRpVG5GRlFuaHdRMU4zUzB4MlYyYxAB!2m1!1s0x0",
    "isLocalGuide": false,
    "reviewCount": 1
  },
  {
    "author": "Sultan Sadiq",
    "quote": "I visit to Apex dental for my teeth pain problem after Jyoti madam take my teeth x-ray  after doctor told ur teeth in side full infection after told first you have to do root canal I tell ok after I I visit three times after infection has taken outside after doctor fix the cap my problem we'll solved 😊 thank you for doctor 🙏 best service",
    "rating": 5,
    "date": "2024-09-15",
    "googleReviewUrl": "https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUNYdktXNVFREAE!2m1!1s0x0",
    "isLocalGuide": true,
    "reviewCount": 17
  }
];
