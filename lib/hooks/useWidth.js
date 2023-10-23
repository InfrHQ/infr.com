import { useState, useEffect } from 'react';

function useWidth() {
    // Initialize state with undefined width (so server and client render match)
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : undefined);

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set width state to new window width
            setWidth(window.innerWidth);
        }

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window width
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return width;
}

export default useWidth;
