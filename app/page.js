import Join from '@/components/Join';
import Video from '@/components/LandingVideo';
import { LightningBoltIcon, LockClosedIcon, HeartIcon, ResumeIcon, StopwatchIcon, MagicWandIcon } from '@radix-ui/react-icons';

function App() {
  return (
    <div>
      <section>
        <div className="relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center absolute h-full w-full">
          <div className="absolute -top-4 -z-10 flex w-full justify-center">
            <div className="absolute w-screen h-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:18px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            <div className="h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#8678F9] opacity-20 blur-[100px]" />
          </div>
          <div>
            <h1 className="mb-4 font-bold bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-4xl text-black-500 md:text-5xl dark:text-transparent">
              A database for memories
            </h1>
          </div>
          <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-xl text-slate-500 dark:text-transparent">
            Remember everything you&apos;ve ever seen, heard
            or said.
          </span>
          <div>
          <span className="relative inline-block overflow-hidden rounded-full p-[1px] mt-3">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              No credit card required. Join now!
            </div>
          </span>
          </div>
        </div>

        <Join />

        <div className="relative z-0 mx-auto max-w-3xl pb-12 pt-6 text-center absolute h-full w-full">
          <p className="inline-flex  bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-xl text-slate-500 dark:text-transparent">
            Open-source. Unbreakable encryption. Infinite storage.
          </p>
        </div>

        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text  text-transparent">
                  How it works.
                </span>
              </h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                Infr is an open-source tool for storing, analysing and querying
                everything you&apos;ve ever seen, heard or said.
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex justify-center items-center mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <LightningBoltIcon className='w-10 h-10 '/>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  0 GB Storage Required
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Infr keeps your device fast, secure and light by storing
                  everything securely in your managed, encrypted cloud database.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <LockClosedIcon className='w-10 h-10'/>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Open Source and Secure
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Infr is open-source and uses the latest encryption
                  technologies to keep your data safe.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <HeartIcon className='w-10 h-10'/>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Battery Friendly
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Infr is designed to be battery friendly and only syncs when
                  you&apos;re on WiFi. A continous run for a full day only uses
                  0.3% of you batter per hour.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Video />
            </div>
            <div className="mr-auto place-self-center lg:col-span-7 text-right">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Everything about you, in one place.
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                From screen recordings to audio, files, text and more, Infr
                stores everything you&apos;ve ever seen, heard or said.
              </p>
 
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
            <div className="max-w-screen-md mb-8 lg:mb-16 ">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text  text-transparent">
                  How it helps.
                </span>
              </h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                Get analytics, replay your screen, go to a URL, relive a digital
                experience and so much more.
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <ResumeIcon className='w-10 h-10'/>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Screen Replay
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Replay your screen to see what you were doing at any point in
                  time.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <StopwatchIcon className='w-10 h-10'/>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Relive a Digital Experience
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Infr stores device, sensor and browser data at all points so
                  you can relive a digital experience.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <MagicWandIcon className='w-10 h-10'/>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  AI Analytics
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Infr uses AI to analyse your data and give you insights into
                  your digital life.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
