import Image from 'next/image';
import Link from 'next/link';
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
  DownloadIcon,
  RocketIcon,
} from '@radix-ui/react-icons';

const Header = () => {
  return (
    <div className="item-center px-10">
      <header className="flex  items-center justify-between py-8">
        <Link href="https://getinfr.com">
          <Image
            src="/infr-logo.svg"
            alt="Infr Logo"
            width={100}
            height={24}
            priority
          />
        </Link>

        <nav className="flex gap-6 items-center">
          <a
            href="https://server.getinfr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex "
          >
            <RocketIcon className="h-6 w-6 text-slate-400 transition-colors hover:text-white"  />
          </a>
          <a href="/download" className="inline-flex mr-7">
            <DownloadIcon className="h-6 w-6 text-slate-400 transition-colors hover:text-white" />
          </a>
          <a
            href="https://twitter.com/infrhq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <TwitterLogoIcon className="h-6 w-6 text-slate-400 transition-colors hover:text-white" />
          </a>
          <a
            href="https://github.com/InfrHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <GitHubLogoIcon className="h-6 w-6 text-slate-400 transition-colors hover:text-white" />
          </a>
          <a
            href="https://discord.gg/ZAejZCzaPe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <DiscordLogoIcon className="h-6 w-6 text-slate-400 transition-colors hover:text-white" />
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
