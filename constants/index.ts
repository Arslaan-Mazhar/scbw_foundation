
// NAVIGATION
import { FooterIcons } from "@/public/types";
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: `/about`, key: 'About', label: 'About' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/donation', key: 'Donation', label: 'Donation' },
  { href: '/contactUs', key: 'contact_us', label: 'Contact Us' },
];

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

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'Home',
      'About',
      'Donation',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Pakistani', 'Overseas'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer:', value: '+92-332-9292311' },
    { label: 'Email Address:', value: 'scbfoundation92@gmail.com' },
  ],
};

export const SOCIALS: FooterIcons = {
  title: 'Social Media',
  links: [
    { href: 'https://wa.me/923329292311', key: 'whatsapp', label: 'Chairman-Whatsapp', icon: '/whatsapp.svg'  },
    { href: 'https://chat.whatsapp.com/EX1mpt7NsUz4DMEgaSY7Mt', key: 'whatsapp-group', label: 'Pak Whatsapp Group', icon: '/whatsapp.svg' },
    { href: 'https://chat.whatsapp.com/F5Yobdz3xN9CD5fIz2sNbf', key: 'overseas-group', label: 'Overseas Whatsapp Group', icon: '/whatsapp.svg' },
    { href: 'https://www.facebook.com/profile.php?id=100088904053983', key: 'fb', label: 'Facebook Page',icon:'/facebook.svg' },
    { href: 'https://youtube.com/@specialcampaignforblindwelfare', key: 'Youtube', label: 'Youtube Account', icon:'/youtube.svg' },
  ]
};
