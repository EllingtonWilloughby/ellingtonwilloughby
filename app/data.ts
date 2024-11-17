import { INavigationLink } from "@/lib/types";

export const navlinks: INavigationLink[] = [
  { href: "home", title: "Home" },
  { href: "about", title: "About" },
  { href: "music", title: "Music" },
  { href: "contact", title: "Contact" },
  { href: "shows", title: "Shows" },
];

export const members = [
  {
    name: "Tim Gottgetreu",
    instruments: "vocals, piano, acoustic guitar, percussion",
    link: "https://ellingtonwilloughby.bandcamp.com/",
  },
  {
    name: "Jason Gottgetreu",
    instruments: "drums, percussion, synthesizer",
  },
  {
    name: "Joshua Cloudt",
    instruments: "electric guitar, pedal board",
  },
  {
    name: "Jonathan Boyette",
    instruments: "electric guitar, organ",
  },
  {
    name: "Dan Miller",
    instruments: "bass",
  },
  {
    name: "Adam Robson",
    instruments: "drums, trumpet",
    link: "https://spoti.fi/3QNqMuE",
  },
];

export const playlist = [
  {
    id: 1,
    title: "How Did Your Day Go?",
    album: "Safari Danger",
    artist: "Ellington Willoughby",
    url: "/audio/howdidyourdaygo.mp3",
    duration: "03:03",
  },
  {
    id: 2,
    title: "Mother Sing",
    album: "Safari Danger",
    artist: "Ellington Willoughby",
    url: "/audio/mothersing.mp3",
    duration: "04:23",
  },
  {
    id: 3,
    title: "Lick O Hope",
    album: "Safari Danger",
    artist: "Ellington Willoughby",
    url: "/audio/lickohope.mp3",
    duration: "04:04",
  },
  {
    id: 4,
    title: "One Foot",
    album: "Safari Danger",
    artist: "Ellington Willoughby",
    url: "/audio/onefoot.mp3",
    duration: "03:26",
  },
];
