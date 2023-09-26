import { MagicWandIcon, ResumeIcon, StopwatchIcon } from '@radix-ui/react-icons';

function LandingHowItHelps() {
    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
                <div className="max-w-screen-md mb-8 lg:mb-16 ">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text  text-transparent">
                            How it helps.
                        </span>
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Get analytics, replay your screen, go to a URL, relive a digital experience and so much more.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <ResumeIcon className="w-10 h-10 dark:text-white" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Screen Replay</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Replay your screen to see what you were doing at any point in time.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <StopwatchIcon className="w-10 h-10 dark:text-white" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Relive a Digital Experience</h3>
                        <p className="text-gray-500 dark:text-gray-400 ">
                            Infr stores device, sensor and browser data at all points so you can relive a digital
                            experience.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <MagicWandIcon className="w-10 h-10 dark:text-white" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">AI Analytics</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Infr uses AI to analyse your data and give you insights into your digital life.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingHowItHelps;
