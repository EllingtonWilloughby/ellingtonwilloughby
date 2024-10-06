import { IAlbum, INavigationLink } from '@/types';
export const navlinks: INavigationLink[] = [
  { href: 'home', title: 'Home' },
  { href: 'about', title: 'About' },
  { href: 'music', title: 'Music' },
  { href: 'contact', title: 'Contact' },
  { href: 'shows', title: 'Shows' }
];

export const members = [
  {
    name: 'Tim Gottgetreu',
    instruments: 'vocals, piano, acoustic guitar, percussion',
    link: 'https://ellingtonwilloughby.bandcamp.com/'
  },
  {
    name: 'Jason Gottgetreu',
    instruments: 'drums, percussion, synthesizer'
  },
  {
    name: 'Joshua Cloudt',
    instruments: 'electric guitar, pedal board'
  },
  {
    name: 'Jonathan Boyette',
    instruments: 'electric guitar, organ'
  },
  {
    name: 'Dan Miller',
    instruments: 'bass'
  },
  {
    name: 'Adam Robson',
    instruments: 'drums, trumpet',
    link: 'https://spoti.fi/3QNqMuE'
  }
];

export const playlist = [
  {
    title: 'How Did Your Day Go?',
    url: '/audio/howdidyourdaygo.mp3',
    duration: '03:03'
  },
  {
    title: 'Mother Sing',
    url: '/audio/mothersing.mp3',
    duration: '04:23'
  },
  {
    title: 'Lick O Hope',
    url: '/audio/lickohope.mp3',
    duration: '04:04'
  },
  {
    title: 'One Foot',
    url: '/audio/onefoot.mp3',
    duration: '03:26'
  }
];

export const albums: IAlbum[] = [
  {
    id: 1,
    link: 'https://ellingtonwilloughby.bandcamp.com/album/safari-danger',
    src: '/images/safaridanger.png',
    alt: 'Album cover for Safari Danger',
    title: 'Safari Danger',
    released: 'October 20, 2021'
  },
  {
    id: 2,
    link: 'https://ellingtonwilloughby.bandcamp.com/album/safari-danger',
    src: '/images/dangersafari.png',
    alt: 'Album cover for Danger Safari',
    title: 'Danger Safari',
    released: 'May 27, 2020'
  },
  {
    id: 3,
    link: 'https://ellingtonwilloughby.bandcamp.com/album/safari-danger',
    src: '/images/moonflower.png',
    alt: 'Album cover for Moon Flower',
    title: 'Moon Flower',
    released: 'September 23, 2016'
  }
];
