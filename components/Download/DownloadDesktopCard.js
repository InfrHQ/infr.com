import { DownloadIcon } from '@radix-ui/react-icons';

function DesktopDownloadCard() {
    return (
        <div className="relative h-96 w-96">
            {/*
      <h1 className="mt-5 mb-5 pt-5 font-semi-bold bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-4xl text-transparent md:text-xl">
        Desktop Client
      </h1>
  */}
            <div className="absolute top-0 flex w-full justify-center">
                <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
            </div>

            <div className=" h-full items-center justify-center rounded-md  dark:border dark:border-slate-800  px-3 py-2">
                <div>
                    <a
                        className="relative inline-block overflow-hidden rounded-full p-[1px] mt-3 w-full flex "
                        href="https://github.com/InfrHQ/desktop-client/releases/latest/download/infr-macos-arm64.dmg"
                        download
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:text-white">
                            <span className="text-sm text-slate-200 flex p-3 hover:text-white">
                                <DownloadIcon className="h-6 w-6 text-slate-400 transition-colors hover:text-white  mr-3" />
                                Mac ARM
                            </span>
                        </div>
                    </a>
                </div>

                <h1 className="mt-5 mb-5 pt-5 font-semi-bold bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-4xl text-transparent md:text-xl">
                    or
                </h1>

                <div>
                    <a
                        className="relative inline-block overflow-hidden rounded-full p-[1px] mt-3 w-full flex "
                        href="https://github.com/InfrHQ/desktop-client/releases/latest/download/infr-macos-x64.dmg"
                        download
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:text-white">
                            <span className="text-sm text-slate-200 flex p-3 hover:text-white">
                                <DownloadIcon className="h-6 w-6 text-slate-400 transition-colors hover:text-white  mr-3" />
                                Mac Intel
                            </span>
                        </div>
                    </a>
                </div>

                <div>
                    <a
                        className="relative inline-block overflow-hidden rounded-md p-[1px] mt-10 w-full flex disabled"
                        download
                    >
                        <span className="absolute inset-[-1000%]  bg-slate-600" />
                        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:text-white">
                            <span className="text-sm text-slate-200 flex p-3 hover:text-white">
                                Windows coming soon.
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DesktopDownloadCard;
