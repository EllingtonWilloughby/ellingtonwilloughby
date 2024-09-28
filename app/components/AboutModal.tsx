import React from 'react';
import Modal from 'react-modal';
import { PiXCircleBold } from 'react-icons/pi';
import { IAboutModal } from '@/types';

export default function AboutModal({ isOpen, onClose }: IAboutModal) {
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      contentLabel="Origin"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 100
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          padding: 0,
          border: 'none',
          borderRadius: '0.5rem',
          boxShadow:
            '0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 11px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'var(--background)',
          color: 'var(--text)',
          zIndex: 100
        }
      }}
    >
      <PiXCircleBold size={24} onClick={onClose} />
      <div className="grid grid-flow-row grid-cols-1 grid-rows-8 gap-6">
        <h3 className="font-semibold w-full underline text-xl sm:text-2xl md:text-3xl lg:text-4xl subpixel-antialiased p-2">
          Origin Story
        </h3>
        <div className="row-start-2 row-span-8">
          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            The origin story of the mythical squid begins in a Pennsylvania
            basement in the late 1980&apos;s, pre-dating the home studio
            revolution. The basement was filled with full stack P.A. speakers,
            authentic vintage fender blackface amplifiers, a drum set and a hot
            wood burning stove. Monthly jam sessions among working professionals
            would take place in the quiet woods outside of Malvern,
            Pennsylvania.
          </p>
          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            The blue blood of old moneyed horse stables would sway gently to the
            dissipated thump of covers of songs by Santana. There were good
            players and bad, and some who just showed up to party. In the middle
            of all of it, was my brother & I. At bedtime, like clockwork, the
            session would play &quot;I aint your stepping stone&quot; by the
            Monkeys to put us kids to sleep. It was loud...and it always worked.
          </p>

          <h4 className="text-center w-full text-lg sm:text-xl md:text-2xl lg:text-3xl subpixel-antialiased p-2">
            The First Go
          </h4>
          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            Growing up surrounded by music and musical gear, it was impossible
            to not want to be a part of it. My father taught my brother and I
            how to play the guitar, drawing chord diagrams and tabs for the
            licks of classic songs by the Who, Santa and the Beatles. The drum
            set was also there to smash on for a few minutes after school before
            everyone else got home. Around this same time, I began to write
            original songs, and by the time we were juniors in High School our
            own first band had formed.
          </p>

          <h4 className="text-center w-full text-lg sm:text-xl md:text-2xl lg:text-3xl subpixel-antialiased p-2">
            XKJ
          </h4>

          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            The band was called the Xylophone Killed Jazz, a name that came from
            a wacky little book written by a wacky little man that we all read
            in school. It was in science class, and our lead singer at the time,
            who looked and sounded like Janis Joplin, offered it up as a good
            band name, and we all agreed.
          </p>
          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            Later in life, as I dove head-first and heavily into collecting old
            jazz records, something about the sentiment stuck with me, and to
            this day, I do not own any records with a xylophone on it.
            Eventually, the drummer and guitarist (being older than the rest of
            us), left to college. Soon we all would do the same.
          </p>

          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            I would follow in the drummer&apos;s footsteps, going to college in
            Virginia. On my college application I wrote that I &quot;liked
            music&quot;. This one little seemingly innocuous comment would have
            a major impact in my life. To the credit of the college staff, they
            assigned me to a roommate who also &quot;liked music&quot;. Thus, on
            the first day of school entered Nordhaus WarriorHead. In his wake
            came a bass guitar, a stereo and 20+ years of continual musical
            collaboration.
          </p>

          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            We soon resurrected XKJ with the original drummer, and a wonderful
            new lead guitarist. I played the acoustic guitar and sang lead, with
            Nordhaus on bass. This time, we had two recording sessions! The
            first was self-recorded in a house with an old Tascam Porta studio.
            The second we saved up enough cash from playing around town to book
            some time in a real studio outside of Washington DC!
          </p>

          <h4 className="text-center w-full text-lg sm:text-xl md:text-2xl lg:text-3xl subpixel-antialiased p-2">
            Noiseland
          </h4>

          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            Eventually, the drummer and the lead guitarist both graduated.
            During our senior year, Nordhaus and I started a new experimental
            project called Noiseland. Nordhaus started producing electronic
            music in a program called Fruity Loops, while I had set up a little
            studio space in my room to record with ProTools. We were both
            exploring what music could be and pushed ourselves in new and
            exciting directions. There were some good musical ideas scattered
            among the noise and we ended up releasing two albums as Noiseland.
          </p>

          <h4 className="text-center w-full text-lg sm:text-xl md:text-2xl lg:text-3xl subpixel-antialiased p-2">
            The Alphabetically
          </h4>

          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            After college, people moved on, moved out and moved up. A few years
            later, and by some cosmic orchestration, my brother Jason, Nordhaus
            and myself ended up in SE Portland, Oregon. We formed a band called
            &quot;The Alphabetically&quot; and practiced every Thursday night. A
            tradition continued to this day! So wherever you are in the world,
            if its Thursday night, know we are practicing! We soon self-recorded
            an album, with Josh handling production, mixing and bass, Jason on
            electric lead guitar and myself on acoustic and lead vocals.
          </p>

          <h4 className="text-center w-full text-lg sm:text-xl md:text-2xl lg:text-3xl subpixel-antialiased p-2">
            Ellington Willoughby and the Andrew Jacksons
          </h4>

          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            Nordhaus soon switched to electric guitar, I switched to piano and
            production and Jason jumped on the synthesizers. I had been working
            at my day job with a killer musician and after a few practices Jon
            joined the band. The drums and bass were all programmed in Ableton
            Live and we had a programmed light show synchronized to the full
            record. We did full light/laser shows in our basement studio pumped
            with fog and bliss. Our first album &quot;Moonflower&quot; was
            recorded at the Hallowed Halls in FoPo and we kept playing around
            town, everywhere from the Star Theatre to the Bunk Bar.
          </p>

          <h4 className="text-center w-full text-lg sm:text-xl md:text-2xl lg:text-3xl subpixel-antialiased p-2">
            Ellington Willoughby and the Mythical Squid
          </h4>

          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            Eventually, Jon asked if he could invite a friend to practice, and
            that friend was Adam. By chance, Adam happened to be my neighbor and
            a damn fine musician to boot. So after a few practices Adam joined
            the band. First on bass then moving on to Drums. We ditched the
            computer and went all live. Jason picked up the congas. Rounding it
            all out we brought Jesse in on Bass (best Craigslist score), who
            played with a number of groups around town and led his own group:
            Neptune Groove Orchestra. Soon Jesse moved to Seattle and we brought
            in the amazing bassist, and all around great guy, Dan.
          </p>
          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            20 years of music brings us to the present. Still lots to learn and
            still fun as hell. We&apos;re continuously recording in our home
            studios and play out every three months or so. Our shows are getting
            bigger and our sound is getting tighter. It&apos;s been a journey
            and we&apos;re nowhere near destination.
          </p>
        </div>
      </div>
    </Modal>
  );
}
