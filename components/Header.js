import Image from 'next/image';
import Link from 'next/link';
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <div className="item-center px-10">
      <header className="flex  items-center justify-between py-8">
        <Link href="/" className='w-8 h-8 flex'>
          <Image
            src="/infr.png"
            alt="Infr Logo"
            width={100}
            height={24}
            priority
          />
        </Link>

        <nav className="flex gap-6 items-center">
          <a href="/studio" className="inline-flex dark:text-white text-slate-500 hover:text-slate-700">
            Studio
          </a>
          <a href="/blog" className="inline-flex dark:text-white text-slate-500 hover:text-slate-700">
            Blog
          </a>
          <a href="/changelog" className="inline-flex dark:text-white text-slate-500 hover:text-slate-700">
            Changelog
          </a>
          <a href="/download" className="inline-flex mr-7 dark:text-white text-slate-500 hover:text-slate-700">
            Download
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
          <ThemeToggle />
        </nav>
      </header>
    </div>
  );
};

export default Header;
