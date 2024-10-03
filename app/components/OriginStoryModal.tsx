import React from 'react';
import { PiXBold } from 'react-icons/pi';
import Modal from 'react-modal';
import { type IOriginStoryModal } from '../lib/types';

export default function OriginStoryModal({
  isOpen,
  closeModal
}: IOriginStoryModal) {
  return (
    <div className="origin-modal">
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Origin Story"
        >
          <span onClick={closeModal}>
            <PiXBold size={24} color="black" />
          </span>

          <div className="origin-modal-content">
            <div className="max-w-screen-md mx-auto">
              <h2 className="text-center w-full underline text-2xl font-light subpixel-antialiased">
                Origin Story
              </h2>
              <div className="px-6 my-4">
                <p className="text-sm/4 md:text-lg/6 subpixel-antialiased mt-3 mb-2">
                  The origin story of the mythical squid begins in a
                  Pennsylvania basement in the late 1980&apos;s, pre-dating the
                  home studio revolution. The basement was filled with full
                  stack P.A. speakers, authentic vintage fender blackface
                  amplifiers, a drum set and a hot wood burning stove. Monthly
                  jam sessions among working professionals would take place in
                  the quiet woods outside of Malvern, Pennsylvania.
                </p>
                <p className="text-sm/4 md:text-lg/6 subpixel-antialiased mt-2 mb-3">
                  The blue blood of old moneyed horse stables would sway gently
                  to the dissipated thump of covers of songs by Santana. There
                  were good players and bad, and some who just showed up to
                  party. In the middle of all of it, was my brother & I. At
                  bedtime, like clockwork, the session would play &quot;I aint
                  your stepping stone&quot; by the Monkeys to put us kids to
                  sleep. It was loud...and it always worked.
                </p>

                <h3 className="text-center w-full text-xl subpixel-antialiased">
                  The First Go
                </h3>
                <p className="text-sm/4 md:text-lg/6 subpixel-antialiased mt-3 mb-2">
                  Growing up surrounded by music and musical gear, it was
                  impossible to not want to be a part of it. My father taught my
                  brother and I how to play the guitar, drawing chord diagrams
                  and tabs for the licks of classic songs by the Who, Santa and
                  the Beatles. The drum set was also there to smash on for a few
                  minutes after school before everyone else got home. Around
                  this same time, I began to write original songs, and by the
                  time we were juniors in High School our own first band had
                  formed.
                </p>

                <h3 className="text-center w-full text-xl subpixel-antialiased">
                  XKJ
                </h3>

                <p className="text-sm/4 md:text-lg/6 subpixel-antialiased mt-3 mb-2">
                  The band was called the Xylophone Killed Jazz, a name that
                  came from a wacky little book written by a wacky little man
                  that we all read in school. It was in science class, and our
                  lead singer at the time, who looked and sounded like Janis
                  Joplin, offered it up as a good band name, and we all agreed.
                </p>
                <p className="text-sm/4 md:text-lg/6 subpixel-antialiased my-2">
                  Later in life, as I dove head-first and heavily into
                  collecting old jazz records, something about the sentiment
                  stuck with me, and to this day, I do not own any records with
                  a xylophone on it. Eventually, the drummer and guitarist
                  (being older than the rest of us), left to college. Soon we
                  all would do the same.
                </p>

                <p className="text-sm/4 md:text-lg/6 subpixel-antialiased my-2">
                  I would follow in the drummer&apos;s footsteps, going to
                  college in Virginia. On my college application I wrote that I
                  &quot;liked music&quot;. This one little seemingly innocuous
                  comment would have a major impact in my life. To the credit of
                  the college staff, they assigned me to a roommate who also
                  &quot;liked music&quot;. Thus, on the first day of school
                  entered Nordhaus WarriorHead. In his wake came a bass guitar,
                  a stereo and 20+ years of continual musical collaboration.
                </p>

                <p className="text-sm/4 md:text-lg/6 subpixel-antialiased my-2">
                  We soon resurrected XKJ with the original drummer, and a
                  wonderful new lead guitarist. I played the acoustic guitar and
                  sang lead, with Nordhaus on bass. This time, we had two
                  recording sessions! The first was self-recorded in a house
                  with an old Tascam Porta studio. The second we saved up enough
                  cash from playing around town to book some time in a real
                  studio outside of Washington DC!
                </p>

                <h3 className="text-center w-full text-xl subpixel-antialiased">
                  Noiseland
                </h3>

                <p className="text-sm/4 md:text-lg/6 subpixel-antialiased mt-3 mb-2">
                  Eventually, the drummer and the lead guitarist both graduated.
                  During our senior year, Nordhaus and I started a new
                  experimental project called Noiseland. Nordhaus started
                  producing electronic music in a program called Fruity Loops,
                  while I had set up a little studio space in my room to record
                  with ProTools. We were both exploring what music could be and
                  pushed ourselves in new and exciting directions. There were
                  some good musical ideas scattered among the noise and we ended
                  up releasing two albums as Noiseland.
                </p>

                <h3 className="text-center w-full text-xl subpixel-antialiased">
                  The Alphabetically
                </h3>

                <p className="text-sm/4 md:text-lg/6 subpixel-antialiased mt-3 mb-2">
                  After college, people moved on, moved out and moved up. A few
                  years later, and by some cosmic orchestration, my brother
                  Jason, Nordhaus and myself ended up in SE Portland, Oregon. We
                  formed a band called &quot;The Alphabetically&quot; and
                  practiced every Thursday night. A tradition continued to this
                  day! So wherever you are in the world, if its Thursday night,
                  know we are practicing! We soon self-recorded an album, with
                  Josh handling production, mixing and bass, Jason on electric
                  lead guitar and myself on acoustic and lead vocals.
                </p>

                <h3 className="text-center w-full text-xl subpixel-antialiased">
                  Ellington Willoughby and the Andrew Jacksons
                </h3>

                <p className="text-sm/4 md:text-lg/6 subpixel-antialiased mt-3 mb-2">
                  Nordhaus soon switched to electric guitar, I switched to piano
                  and production and Jason jumped on the synthesizers. I had
                  been working at my day job with a killer musician and after a
                  few practices Jon joined the band. The drums and bass were all
                  programmed in Ableton Live and we had a programmed light show
                  synchronized to the full record. We did full light/laser shows
                  in our basement studio pumped with fog and bliss. Our first
                  album &quot;Moonflower&quot; was recorded at the Hallowed
                  Halls in FoPo and we kept playing around town, everywhere from
                  the Star Theatre to the Bunk Bar.
                </p>

                <h3 className="text-center w-full text-xl subpixel-antialiased">
                  Ellington Willoughby and the Mythical Squid
                </h3>

                <p className="text-sm/4 md:text-lg/6 subpixel-antialiased mt-3 mb-2">
                  Eventually, Jon asked if he could invite a friend to practice,
                  and that friend was Adam. By chance, Adam happened to be my
                  neighbor and a damn fine musician to boot. So after a few
                  practices Adam joined the band. First on bass then moving on
                  to Drums. We ditched the computer and went all live. Jason
                  picked up the congas. Rounding it all out we brought Jesse in
                  on Bass (best Craigslist score), who played with a number of
                  groups around town and led his own group: Neptune Groove
                  Orchestra. Soon Jesse moved to Seattle and we brought in the
                  amazing bassist, and all around great guy, Dan.
                </p>
                <p className="text-sm/4 md:text-lg/6 subpixel-antialiased my-2">
                  20 years of music brings us to the present. Still lots to
                  learn and still fun as hell. We&apos;re continuously recording
                  in our home studios and play out every three months or so. Our
                  shows are getting bigger and our sound is getting tighter.
                  It&apos;s been a journey and we&apos;re nowhere near
                  destination.
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
