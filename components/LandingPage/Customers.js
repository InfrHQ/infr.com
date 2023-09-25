import { Google, Spotify, Microsoft, Airbnb } from "./SVG/General";
import  NTU from "./SVG/NTU";
import MIT from "./SVG/MIT";

function Customers() {
  return (
    <section className="dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <div className="text-center items-center">
        <h2 className="mb-4 lg:mb-6 text-3xl font-bold tracking-tight leading-tight text-center text-slate-500 dark:text-white md:text-4xl">
          You&apos;re in good company
        </h2>
        <span className="mb-8 lg:mb-12 tracking-tight leading-tight text-center inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-xl text-slate-500 dark:text-transparent">
          Infr supports builders & dreamers around the world, from students to professionals
        </span>
        </div>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" className="flex justify-center items-center">
            <Google/>
          </a>
          <a href="#" className="flex justify-center items-center">
            <Microsoft/>
          </a>
          <a href="#" className="flex justify-center items-center">
            <Spotify/>
          </a>

          <a href="#" className="flex justify-center items-center">
            <Airbnb/>
          </a>
          <a href="#" className="flex justify-center items-center">
            <NTU/>
          </a>
          <a href="#" className="flex justify-center items-center">
            <MIT/>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Customers;
