'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <button
            type="button"
            className="text-black dark:text-white font-medium rounded-full text-sm px-5  text-center mr-2"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}

export default ThemeToggle;
