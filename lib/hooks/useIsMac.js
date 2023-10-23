import { useState, useEffect } from 'react';

function useIsMac() {
    const [isMac, setIsMac] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMac(/Mac/i.test(navigator.platform));
        }
    }, []);

    return isMac;
}

export default useIsMac;
