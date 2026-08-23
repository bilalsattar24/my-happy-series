export const books = [
  {
    slug: "self",
    title: "My Happy Self",
    subtitle: "A positive self-talk and emotional wellness book for young children",
    theme: "A positive self-talk and emotional wellness book for young children",
    age: "Ages 2-6 · Preschool, T-K & Kindergarten",
    price: "$12.99",
    color: "from-violet-300 via-fuchsia-200 to-yellow-200",
    coverImage: "/books/my-happy-self-front-cover.png",
    listingImage: "/books/my-happy-self-listing-image.png",
    slideImages: [
      {
        src: "/books/my-happy-self-listing-image.png",
        alt: "My Happy Self listing image",
      },
      {
        src: "/books/my-happy-self-page-3.jpg",
        alt: "A page from My Happy Self that reads I am loved just the way I am",
      },
    ],
    accent: "#6f49a8",
    purchaseUrl:
      "https://www.amazon.com/My-Happy-Self-ourselves-affirmations/dp/B0H8TJV6VR/ref=sr_1_1?crid=2Z79OIHI217KA&dib=eyJ2IjoiMSJ9.phUMRTmgEoQVO588rDc7U580_3aJQUnlDnEuxgNPyqy89ZKV2Hv3f_DWYDmrKqWgMXb74X8nmUxdDevKy-QPAkm97C9RJB8LI8sx3b9IFTF2ljXbVJgldMCxcQ1U2gFsJ1qErLxwWkEFMt3DGIgrrSOIqXMgUJIaUbanUjHLJYRQvw0jdhOT0WCS3cohNsXnBDXellapPL4hgYTmQVCZcXhADmillh5gCiicJoR-U9c.-NdJi912FvrI2L-Ehir9lUK3LY0yCpaFa9cbA39Gz0M&dib_tag=se&keywords=my+happy+self+umaymah+muhammad&qid=1786771299&sprefix=my+happy+self+%2Caps%2C196&sr=8-1",
    description:
      "A book that nurtures self-confidence, positive self-talk, emotional resilience, kindness, self-worth, trying again, recognizing their voice, and feeling capable, with inclusive illustrations children can see themselves in.",
    detailedDescription:
      "A book that nurtures self-confidence, positive self-talk, emotional resilience, kindness, self-worth, trying again, recognizing their voice, and feeling capable, with inclusive illustrations children can see themselves in.",
    highlights: [
      "Self-confidence",
      "Positive self-talk",
      "Emotional resilience",
      "Kindness",
      "Self-worth",
      "Trying again",
      "Recognizing their voice",
      "Feeling capable",
    ],
  },
  {
    slug: "aisha",
    title: "My Happy Salah Time",
    subtitle: "Aisha",
    theme: "Introduction to prayer and feeling close to Allah",
    age: "Ages 2-6 years old",
    price: "$12.99",
    color: "from-rose-300 via-pink-200 to-amber-200",
    coverImage: "/books/my-happy-salah-time-aisha-front.png",
    listingImage: "/books/aisha-listing-image.jpeg",
    slideImages: [
      {
        src: "/books/aisha-listing-image.jpeg",
        alt: "My Happy Salah Time: Aisha listing image",
      },
      {
        src: "/books/my-happy-salah-time-aisha-page-6.jpg",
        alt: "A page from My Happy Salah Time: Aisha where Aisha asks Mama what a prayer is",
      },
    ],
    accent: "#ec6f98",
    purchaseUrl:
      "https://www.amazon.com/My-Happy-Salah-Time-learns/dp/B0H4G2DJ4T/",
    description:
      "Aisha learns to pray and feel close to Allah through warm, age-friendly moments and bright, engaging illustrations little readers can recognize.",
    detailedDescription:
      "Join 5-year-old Aisha on a joyful journey as she discovers the beauty, peace, and excitement of daily Salah. Written in a delightful, comforting rhyme that is perfect for bedtime reading or classroom storytime, My Happy Salah Time transforms a child's daily prayer routine into a beautiful moment of connection with Allah. Through bright, engaging illustrations, young readers will watch Aisha prepare with enthusiasm, follow the steps of prayer with love, and feel the warm comfort of making a heartfelt dua.",
    highlights: [
      "Introduction to prayer",
      "Build connection with Allah",
      "Find joy in prayer",
    ],
  },
  {
    slug: "ahmad",
    title: "My Happy Salah Time",
    subtitle: "Ahmad",
    theme: "Introduction to prayer and feeling close to Allah",
    age: "Ages 2-6 years old",
    price: "$12.99",
    color: "from-sky-300 via-teal-200 to-lime-200",
    coverImage: "/books/my-happy-salah-time-ahmad-front.png",
    listingImage: "/books/ahmad-listing-image.png",
    slideImages: [
      {
        src: "/books/ahmad-listing-image.png",
        alt: "My Happy Salah Time: Ahmad listing image",
      },
      {
        src: "/books/my-happy-salah-time-ahmad-page-2.jpg",
        alt: "A page from My Happy Salah Time: Ahmad that reads May your heart always find peace in prayer",
      },
    ],
    accent: "#0f75bc",
    purchaseUrl:
      "https://www.amazon.com/My-Happy-Salah-Time-learns/dp/B0H6JQ7DR4/",
    description:
      "Ahmad discovers the comfort and joy of salah with a story that makes prayer feel inviting, familiar, and loved.",
    detailedDescription:
      "Help your little boy build a beautiful, lifelong bond with his daily prayers with this uplifting Islamic children's book! Follow along with 5-year-old Ahmad on an exciting journey as he discovers the peace, joy, and wonder of daily Salah. Written in a gentle, comforting rhyme that is ideal for bedtime reading or classroom storytime, Ahmad's Happy Salah Time turns the daily prayer routine into a special moment of connection with Allah. Through animated-style illustrations, young boys will see Ahmad jump into action with enthusiasm, follow the steps of prayer with love, and feel the cozy comfort of making his own heartfelt dua.",
    highlights: [
      "Introduction to prayer",
      "Build connection with Allah",
      "Find joy in prayer",
    ],
  },
];

export const wholesaleBook = books.find((book) => book.slug === "self")!;

export const wholesaleSlides = [
  ...(wholesaleBook.slideImages ?? [
    {
      src: wholesaleBook.listingImage,
      alt: `${wholesaleBook.title}: ${wholesaleBook.subtitle} listing image`,
    },
  ]),
  {
    src: "/books/my-happy-self-cover-spread.jpg",
    alt: "My Happy Self front and back cover spread",
  },
];

const homeCoverSlugs = ["aisha", "self", "ahmad"] as const;

export const homeCoverBooks = homeCoverSlugs.map(
  (slug) => books.find((book) => book.slug === slug)!,
);

export const benefits = [
  "Simple language supports bedtime reading, classroom circles, and family discussion.",
  "Playful illustrations help children see themselves in the pages.",
  "Faith-centered stories make salah feel comfortable and approachable.",
  "A growing collection gives families more meaningful books to look forward to.",
];
