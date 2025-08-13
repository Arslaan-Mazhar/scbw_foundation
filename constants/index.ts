
// NAVIGATION
import { FooterIcons } from "@/public/types";
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: `/aboutUs`, key: 'About', label: 'About Us' },
  { href: '/objectives', key: 'objectives', label: 'Objectives' },
  { href: '/admissionform', key: 'admissions', label: 'Admissions' },
  { href: '/membership', key: 'membership', label: 'Membership' },
  { href: '/donation', key: 'Donation', label: 'Donation' },
  // { href: '/contactUs', key: 'contact_us', label: 'Contact Us' },
  // { href: '/files', key: 'files', label: 'Files' },
];

export const Currencies = [  "AED", "CAD", "EUR", "GBP", "PKR", "SAR", "USD"];

  export const Amounts = ["10", "50", "100", "500", "1000", "10000"];  

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    variant: 'green',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];


export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Phone', value: '+92-332-9292311' },
    { label: 'Email', value: 'scbfoundation92@gmail.com' },
  ],
};

export const SOCIALS: FooterIcons = {
  title: 'Social Media',
  links: [
    { href: 'https://wa.me/923329292311', key: 'whatsapp', label: 'Chairman-Whatsapp', icon: '/whatsapp.svg'  },
    { href: 'https://www.facebook.com/profile.php?id=100088904053983', key: 'fb', label: 'Facebook Page',icon:'/facebook.svg' },
    { href: 'https://youtube.com/@specialcampaignforblindwelfare', key: 'Youtube', label: 'Youtube Account', icon:'/youtube.svg' },
  ]
};
