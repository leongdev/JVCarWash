const BANNER_DATA = [
  {
    id: '1',
    image:
      'https://cdn.discordapp.com/attachments/311307688254636033/743242585866502264/Artboard10.png',
    title: 'JV Value Wash',
    items: [
      {
        item: 'Pre-wash.',
      },
      {
        item: 'Rims & Wheels Deep Clean.',
      },
      {
        item: 'Bugs Removal.',
      },
    ],
  },
  {
    id: '2',
    image:
      'https://cdn.discordapp.com/attachments/311307688254636033/743242587607007303/Artboard11.png',
    title: 'JV Full Wash',
    items: [
      {
        item: 'Pre-wash.',
      },
    ],
  },
  {
    id: '3',
    image:
      'https://cdn.discordapp.com/attachments/456493454114160651/743293159076790452/unknown.png',
    title: 'Full Wash',
    items: [
      {
        item: 'Pre-wash.',
      },
      {
        item: 'Rims & Wheels Deep Clean.',
      },
    ],
  },
  {
    id: '4',
    image:
      'https://cdn.discordapp.com/attachments/456493454114160651/743293212352970782/unknown.png',
    title: 'Extra Services',
    items: [
      {
        item: 'Pre-wash.',
      },
      {
        item: 'Rims & Wheels Deep Clean.',
      },
      {
        item: 'Bugs Removal.',
      },
      {
        item: 'Hand Wash w/ 2-Bucked Method.',
      },
      {
        item: 'Vehicle Dry w/ Premium Drying Towels.',
      },
    ],
  },
  {
    id: '5',
    image:
      'https://cdn.discordapp.com/attachments/456493454114160651/743293273585745930/unknown.png',
    title: 'JV Full Detail',
    items: [
      {
        item: 'Pre-wash.',
      },
      {
        item: 'Rims & Wheels Deep Clean.',
      },
      {
        item: 'Bugs Removal.',
      },
      {
        item: 'Hand Wash w/ 2-Bucked Method.',
      },
      {
        item: 'Vehicle Dry w/ Premium Drying Towels.',
      },
    ],
  },
];
const STORIES_DATA = [
  {
    id: '1',
    title: 'Extra Services',
    image:
      'https://cdn.discordapp.com/attachments/311307688254636033/743242585866502264/Artboard10.png',
    video:
      'https://cdn.discordapp.com/attachments/456493454114160651/743255450966949929/video0.mov',
  },
  {
    id: '2',
    title: 'Value Wash',
    image:
      'https://cdn.discordapp.com/attachments/311307688254636033/743242587607007303/Artboard11.png',
    video:
      'https://cdn.discordapp.com/attachments/456493454114160651/743255553790443621/video0.mov',
  },
  {
    id: '3',
    title: 'Full Wash',
    image:
      'https://cdn.discordapp.com/attachments/456493454114160651/743293159076790452/unknown.png',
    video:
      'https://cdn.discordapp.com/attachments/456493454114160651/743255689719316531/video0.mov',
  },
  {
    id: '4',
    title: 'Full Detail',
    image:
      'https://cdn.discordapp.com/attachments/456493454114160651/743293212352970782/unknown.png',
    video:
      'https://cdn.discordapp.com/attachments/456493454114160651/743255778567389214/video0.mov',
  },
  {
    id: '5',
    title: 'Wash General',
    image:
      'https://cdn.discordapp.com/attachments/456493454114160651/743293273585745930/unknown.png',
    video:
      'https://cdn.discordapp.com/attachments/456493454114160651/743256013859323965/video0.mov',
  },
];
const FEEDBACK_DATA = [
  {
    id: '0',
    name: 'Mike',
    date: 'Wed Jun 01 2020 08:00:00 GMT-0300 (-03)',
    image:
      'https://cdn.discordapp.com/attachments/456493454114160651/743247487728484393/unknown.png',
    stats: 5,
    comment: 'Lorem ipsum dolor sit amet, consect adipisc elit.',
  },
  {
    id: '2',
    name: 'Mike',
    date: 'Wed Jun 02 2020 08:00:00 GMT-0300 (-03)',
    image:
      'https://cdn.discordapp.com/attachments/456493454114160651/743247487728484393/unknown.png',
    stats: 3,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna risus, elementum sed erat vitae, eleifend imperdiet lectus. Sed efficitur eget turpis nec varius. Sed laoreet vel arcu sit amet cursus.',
  },
  {
    id: '3',
    name: 'Mike',
    date: 'Wed Jun 03 2020 08:00:00 GMT-0300 (-03)',
    image:
      'https://cdn.discordapp.com/attachments/456493454114160651/743247487728484393/unknown.png',
    stats: 4,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna risus, elementum sed erat vitae, eleifend imperdiet lectus. Sed efficitur eget turpis nec varius. Sed laoreet vel arcu sit amet cursus.',
  },
];
const SERVICE_DATA = [
  {
    id: '0',
    title: 'Cars',
    services: [
      {
        id: '0',
        title: 'Full Wash',
        subtitle: 'Exterior Bath + Clean Interior',
        description:
          'Lorem dolor sit amet, consectetur adipiscing elit. Sed convallis lectus et diam volutpat, eu dapibus neque blandit. Fusce luctus dolor.',
        price: '45$',
      },
      {
        id: '1',
        title: 'Exterior Bath',
        subtitle: 'Exterior Bath ',
        description:
          'Lorem dolor sit amet, consectetur adipiscing elit. Sed convallis lectus et diam volutpat, eu dapibus neque blandit. Fusce luctus dolor.',
        price: '40$',
      },
      {
        id: '2',
        title: 'Clean Interior',
        subtitle: 'Clean Interior',
        description:
          'Lorem dolor sit amet, consectetur adipiscing elit. Sed convallis lectus et diam volutpat, eu dapibus neque blandit. Fusce luctus dolor.',
        price: '30$',
      },
    ],
  },
  {
    id: '1',
    title: 'SUV/Trucks',
    services: [
      {
        id: '0',
        title: 'Full Wash',
        subtitle: 'Exterior Bath + Clean Interior',
        description:
          'Lorem dolor sit amet, consectetur adipiscing elit. Sed convallis lectus et diam volutpat, eu dapibus neque blandit. Fusce luctus dolor.',
        price: '45$',
      },
      {
        id: '1',
        title: 'Exterior Bath',
        subtitle: 'Exterior Bath ',
        description:
          'Lorem dolor sit amet, consectetur adipiscing elit. Sed convallis lectus et diam volutpat, eu dapibus neque blandit. Fusce luctus dolor.',
        price: '40$',
      },
    ],
  },
  {
    id: '2',
    title: 'Other Services',
    services: [
      {
        id: '0',
        title: 'Full Wash',
        subtitle: 'Exterior Bath + Clean Interior',
        description:
          'Lorem dolor sit amet, consectetur adipiscing elit. Sed convallis lectus et diam volutpat, eu dapibus neque blandit. Fusce luctus dolor.',
        price: '45$',
      },
      {
        id: '1',
        title: 'Exterior Bath',
        subtitle: 'Exterior Bath ',
        description:
          'Lorem dolor sit amet, consectetur adipiscing elit. Sed convallis lectus et diam volutpat, eu dapibus neque blandit. Fusce luctus dolor.',
        price: '40$',
      },
      {
        id: '2',
        title: 'Clean Interior',
        subtitle: 'Clean Interior',
        description:
          'Lorem dolor sit amet, consectetur adipiscing elit. Sed convallis lectus et diam volutpat, eu dapibus neque blandit. Fusce luctus dolor.',
        price: '30$',
      },
    ],
  },
];
const FREE_TIME = [
  {
    id: '0',
    time: '08:00 AM',
  },
  {
    id: '1',
    time: '10:30 AM',
  },
  {
    id: '2',
    time: '01:00 PM',
  },
  {
    id: '3',
    time: '02:40 PM',
  },
  {
    id: '4',
    time: '04:40 PM',
  },
];
const SCHEDULED_EVENTS = [
  {
    id: '0',
    dayTime: 'Wed Jun 01 2020 08:00:00 GMT-0300 (-03)',
    services: [
      {
        id: '0',
        title: 'Full Wash',
        price: 45,
      },
      {
        id: '1',
        title: 'Clean Interior',
        price: 30,
      },
      {
        id: '2',
        title: 'Exterior Bath',
        price: 40,
      },
    ],
  },
  {
    id: '1',
    dayTime: 'Wed Jun 18 2020 09:00:00 GMT-0300 (-03)',
    services: [
      {
        id: '0',
        title: 'Full Wash',
        price: 45,
      },
      {
        id: '1',
        title: 'Clean Interior',
        price: 30,
      },
    ],
  },
  {
    id: '2',
    dayTime: 'Tue Sep 15 2020 15:45:00 GMT-0300 (-03)',
    services: [
      {
        id: '0',
        title: 'Full Wash',
        price: 45,
      },
    ],
  },
];

const USER_PLACES = [
  {
    id: '0',
    title: 'Home',
    street_adress: 'Rua Seridó, 754',
    suite_apt: 'apto 1101',
    city: 'Natal',
    state: 'Florida',
    zip_code: '59020010',
  },
  {
    id: '1',
    title: 'Work',
    street_adress: 'Rua Seridó, 754',
    suite_apt: 'apto 1101',
    city: 'Natal',
    state: 'Florida',
    zip_code: '59020010',
  },
  {
    id: '2',
    title: 'Other Place...',
    street_adress: 'Rua Seridó, 754',
    suite_apt: 'apto 1101',
    city: 'Natal',
    state: 'Florida',
    zip_code: '59020010',
  },
];

export {
  BANNER_DATA,
  STORIES_DATA,
  FEEDBACK_DATA,
  SERVICE_DATA,
  FREE_TIME,
  SCHEDULED_EVENTS,
  USER_PLACES,
};
