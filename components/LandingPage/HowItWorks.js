import { LightningBoltIcon, LockClosedIcon, HeartIcon } from '@radix-ui/react-icons';

function LandingHowItWorks() {
    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text  text-transparent">
                            How it works.
                        </span>
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Infr is an open-source tool for storing, analysing and querying everything you&apos;ve ever
                        seen, heard or said.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div className="flex justify-center items-center mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <LightningBoltIcon className="w-10 h-10 dark:text-white" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">0 GB Storage Required</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Infr keeps your device fast, secure and light by storing everything securely in your
                            managed, encrypted cloud database.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <LockClosedIcon className="w-10 h-10 dark:text-white" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Open Source and Secure</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Infr is open-source and uses the latest encryption technologies to keep your data safe.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <HeartIcon className="w-10 h-10 dark:text-white" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Battery Friendly</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Infr is designed to be battery friendly and only syncs when you&apos;re on WiFi. A continous
                            run for a full day only uses 0.3% of you battery per hour.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingHowItWorks;
