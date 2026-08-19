export interface Testimonial {
  author: string;
  quote: string;
  rating: number;
  avatarUrl: string;
  googleReviewUrl: string;
  isLocalGuide?: boolean;
  reviewCount?: number;
}

export const testimonials: Testimonial[] = [
  {
    author: 'Jayvardan Aananthan',
    quote: 'Thrilled with the results of my teeth alignment procedure',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Jayvardan+Aananthan&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUNwck9fci1BRRAB!2m1!1s0x0',
    isLocalGuide: true,
    reviewCount: 12,
  },
  {
    author: 'Agastya P',
    quote: 'Teeth aligned in just 11 months before the 1-year mark!',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Agastya+P&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xFeVN6WmpWRWRpVG5GRlFuaHdRMU4zUzB4MlYyYxAB!2m1!1s0x0',
  },
  {
    author: 'digital sachi',
    quote: 'Teeth alignment completed within just 7 months',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=digital+sachi&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xWdk5FbDBhRlpTZW5VNVgwdENkMFZRY0RCSU5GRRAB!2m1!1s0x0',
  },
  {
    author: 'Sunitha P',
    quote: 'Teeth look nice and well aligned',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Sunitha+P&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT21Ga1gyTk5YME5vU205cVZrdEtVRVJWVlVKeFFVRRAB!2m1!1s0x0',
  },
  {
    author: 'Rajeshwari Thangam',
    quote: 'Exceptional, gentle root canal & crown care',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Rajeshwari+Thangam&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xaNExYbFJiWGhLY1Zwc1ZGUmtOREJzTVhWcVNHYxAB!2m1!1s0x0',
    reviewCount: 10,
  },
  {
    author: 'Pragya Bharti',
    quote: 'Two root canals done simultaneously with zero hassle',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Pragya+Bharti&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xZdGRWOHlRM05JWldaSU4zSkRVbGRxWm1sSlFYYxAB!2m1!1s0x0',
  },
  {
    author: 'INDUMATHI R',
    quote: 'Totally painless root canal for someone scared of dental pain',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=INDUMATHI+R&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT25OVlFuaG1TMjVJZEhVMWExOXhVV1Z4WDB0Mk5GRRAB!2m1!1s0x0',
    reviewCount: 10,
  },
  {
    author: 'manjunatha GN',
    quote: 'Wisdom tooth removed wonderfully without complications',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=manjunatha+GN&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2pOVWJqbFZaMmgyVGs5SmQxVnFXV3B0UVhSRU1rRRAB!2m1!1s0x0',
  },
  {
    author: 'Bhagyashree Kolakur',
    quote: 'Painless wisdom tooth removal and proactive follow-up',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Bhagyashree+Kolakur&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2t0TU1UWXdYemxwUm1vNFZsUlpTRmxhTFU1Q2JIYxAB!2m1!1s0x0',
  },
  {
    author: 'Prity Choudhary',
    quote: 'Perfect artificial teeth & cap for my father — highly comfortable',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Prity+Choudhary&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2s0MUxUVXRjMm93ZWxKNldYcEdkazF2WjFGMVdFRRAB!2m1!1s0x0',
  },
  {
    author: 'Gopal Ks',
    quote: 'Best dental clinic with advanced treatment procedures',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Gopal+Ks&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2paTFJsbzJOVE40T1RkYVV6bEVPRTkwVDFGMmRVRRAB!2m1!1s0x0',
  },
  {
    author: 'Anil Chwan',
    quote: 'High quality care at much lesser cost than area competitors',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Anil+Chwan&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2t0UmVGOU9OMFJNTVdsMGJVaE9Xa3hEU1VobFZrRRAB!2m1!1s0x0',
  },
  {
    author: 'Chandra Shekar',
    quote: 'Doctor was very patient, explained procedure & followed up',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Chandra+Shekar&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2preVNETmxhbTl4YVhSV1lVMDJhMnAxY1dkdVltYxAB!2m1!1s0x0',
  },
  {
    author: 'Meenakshi s',
    quote: 'From consultation to treatment, everything handled perfectly',
    rating: 5,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Meenakshi+s&background=0D9488&color=ffffff&size=128&bold=true',
    googleReviewUrl:
      'https://www.google.com/maps/reviews/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2pJM1pVaFJhV1p0VUdGT2NXRkplVWcwT1dsTldsRRAB!2m1!1s0x0',
  },
];
