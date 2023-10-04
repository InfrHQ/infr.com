'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DiscordLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import ThemeToggle from './ThemeToggle';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { CookieIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ' +
                        (className || '')
                    }
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});

ListItem.displayName = 'ListItem';

function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-black dark:text-white')}
                    >
                        Learn
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <CookieIcon className="h-6 w-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">infrDB</div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            The open-source platform to remember everything.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/blog" title="Blog" className="hover:bg-slate-50 dark:hover:bg-slate-800">
                                The latest news, articles, and resources.
                            </ListItem>
                            <ListItem
                                href="/changelog"
                                title="Changelog"
                                className="hover:bg-slate-50 dark:hover:bg-slate-800"
                            >
                                Stay informed updates and changes to Infr.
                            </ListItem>
                            <ListItem
                                href="/guide"
                                title="Guides"
                                className="hover:bg-slate-50 dark:hover:bg-slate-800"
                            >
                                Learn how to use Infr with our step-by-step guides.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/download" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-black dark:text-white')}
                        >
                            Download
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const Header = () => {
    return (
        <div className="item-center px-10">
            <header className="flex  items-center justify-between py-8">
                <Link href="/" className="w-8 h-8 flex">
                    <Image src="/infr.png" alt="Infr Logo" width={100} height={24} priority />
                </Link>

                <nav className="flex gap-6 items-center">
                    <NavigationMenuDemo />
                    <a
                        href="https://twitter.com/infrhq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                    >
                        <TwitterLogoIcon className="h-6 w-6 text-slate-400 transition-colors hover:text-black dark:hover:text-white" />
                    </a>
                    <a
                        href="https://github.com/InfrHQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                    >
                        <GitHubLogoIcon className="h-6 w-6 text-slate-400 transition-colors hover:text-black dark:hover:text-white" />
                    </a>
                    <a
                        href="https://discord.gg/ZAejZCzaPe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                    >
                        <DiscordLogoIcon className="h-6 w-6 text-slate-400 transition-colors hover:text-black dark:hover:text-white" />
                    </a>
                    <ThemeToggle />
                </nav>
            </header>
        </div>
    );
};

export default Header;
