function ChangelogHero() {
    return (
      <div className="relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center absolute h-full w-full">
        <div className="absolute -top-4 -z-10 flex w-full justify-center">
          <div className="absolute w-screen h-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:18px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#8678F9] opacity-20 blur-[100px]" />
        </div>
        <div >
          <h1 className="mb-4 font-bold bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-4xl text-slate-800 md:text-5xl dark:text-transparent" style={{'lineHeight':1.5}}>
            Changelog
          </h1>
        </div>
      </div>
    );
  }
  
  export default ChangelogHero;