# Ellington Willoughby & the Mythical Squid

This project is the website for Portland, Oregon-based psychadelic-rock band
Ellington Willoughby & the Mythical Squid. The project was built using Next.js
14, Tailwind CSS, and ESLint, and features an audio player on the home page.
GitHub Actions was integrated as well, for continuous integration.

## Audio Player

The homepage features an audio player built using Howler.js to allow users
to play and interact with the band’s music. The audio player includes play/pause
functionality, volume control, and previous/next track navigation.

## Technologies Used

- Next.js 14: A powerful React framework for server-side rendering and static
  site generation.
- Tailwind CSS: Utility-first CSS framework for custom styling.
- Howler.js: Used for audio playback.
- ESLint: Ensures code quality and consistency.
- GitHub Actions: Automated workflow for building and testing the project
  on every push.

## Project Setup

To run the project locally:

### Clone the repository

```sh
git clone https://github.com/yourusername/band-website.git
cd band-website
```

### Install dependencies

```sh
npm install
```

### Start the development server

```sh
npm run dev
```

### Open your browser and navigate to `http://localhost:3000`

## Continuous Integration

This project uses GitHub Actions to run automated checks:

- The workflow is triggered on each push to the repository.
- ESLint is used to maintain code quality.

To view the build status or logs, visit the Actions tab in the repository.

## Responsive Design

It is recommended to work mobile first when developing projects, and tools
like TailwindCSS support this approach. The following are the breakpoints set
for this project, allowing for the content to become fluid, and as such to
provide a user experience that generates minimal friction between the User
Agent and the User Interface.

### Breakpoints for various screen sizes

Each of the following breakpoints represents a minimum-width at which the
viewport triggers a change in the layout of the content.

- 'mobile': '375px',
- 'xs': '512px',
- 'sm': '640px',
- 'md': '768px',
- 'lg': '1024px',
- 'xl': '1280px',
- '2xl': '1536px'
