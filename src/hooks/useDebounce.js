import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const timOut = setTimeout(() => setDebounce(value), delay);
        return () => {
            clearTimeout(timOut);
        };
    }, [delay, value]);
    return debounce;
}
export default useDebounce;
