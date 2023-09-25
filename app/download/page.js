import DownloadHero from "@/components/Download/Hero";
import DesktopDownloadCard from "@/components/Download/DownloadDesktopCard";

function App() {
  return (
    <div>
      <section>
        <DownloadHero />

        <div className="relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center absolute h-full w-full mt-10">
          <div className="absolute -top-4 -z-10 flex w-full justify-center">
            <DesktopDownloadCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
