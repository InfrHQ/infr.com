import Video from './Video';

function LandingCTAOne() {
    return (
        <section className="">
            <div className="grid max-w-screen-xl pr-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Video />
                </div>
                <div className="mr-auto place-self-center lg:col-span-7 text-right">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Everything about you, in one place.
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        From screen recordings to audio, files, text and more, Infr stores everything you&apos;ve ever
                        seen, heard or said.
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
    );
}

export default LandingCTAOne;
