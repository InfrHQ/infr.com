'use client';

import React, { useState, useEffect } from 'react';
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
import useWidth from '@/lib/hooks/useWidth';
import useIsMac from '@/lib/hooks/useIsMac';

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
async function checkOS(n) {
    if (n.userAgentData) {
        const hints = ['architecture', 'model', 'platform', 'platformVersion', 'uaFullVersion'];
        return n.userAgentData.getHighEntropyValues(hints);
    } else {
        console.log(n.userAgent);
        return 'navigator.userAgentData is not supported!';
    }
}

function NavigationMenuDemo() {
    const pageWidth = useWidth();
    const isMac = useIsMac();
    const [macArch, setMacArch] = useState(false);

    async function getMacArch() {
        const arch = await checkOS(navigator);
        setMacArch(arch);
    }

    useEffect(() => {
        getMacArch();
    }, []);

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

                {pageWidth > 768 && isMac && (
                    <NavigationMenuItem>
                        <a
                            href={
                                macArch?.architecture === 'arm'
                                    ? 'https://i.getinfr.com/desktop-app/latest/Infr_aarch64.dmg'
                                    : 'https://i.getinfr.com/desktop-app/latest/Infr_x64.dmg'
                            }
                            download="Infr.dmg"
                            className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-black dark:text-white')}
                        >
                            Download
                        </a>
                    </NavigationMenuItem>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const SocialIcons = () => {
    return (
        <div className="flex items-center justify-center gap-4 text-center">
            {' '}
            <a
                href="https://twitter.com/infrhq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex md:mb-0"
            >
                <TwitterLogoIcon className="h-6 w-6 text-slate-400 transition-colors hover:text-black dark:hover:text-white" />
            </a>
            <a
                href="https://github.com/InfrHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex  md:mb-0"
            >
                <GitHubLogoIcon className="h-6 w-6 text-slate-400 transition-colors hover:text-black dark:hover:text-white" />
            </a>
            <a
                href="https://discord.gg/ZAejZCzaPe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex md:mb-0"
            >
                <DiscordLogoIcon className="h-6 w-6 text-slate-400 transition-colors hover:text-black dark:hover:text-white" />
            </a>
        </div>
    );
};

const Header = () => {
    return (
        <div className="item-center px-4 md:px-10">
            <header className="flex flex-wrap items-center justify-between py-4 md:py-8">
                <Link href="/" className="w-8 h-8 flex mb-4 md:mb-0">
                    <Image src="/infr.png" alt="Infr Logo" width={100} height={24} priority />
                </Link>
                <nav className="flex flex-wrap gap-2 md:gap-6 items-center">
                    <NavigationMenuDemo />
                    <ThemeToggle />
                    <SocialIcons />
                </nav>
            </header>
        </div>
    );
};

export default Header;
