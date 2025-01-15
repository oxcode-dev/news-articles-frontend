import { useEffect, useState } from "react";

function useDebounce<T extends Function>(func: T, delay: number): T {
    const [debouncedFunc, setDebouncedFunc] = useState<T>(func);
  
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedFunc(func);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [func, delay]);
  
    return debouncedFunc;
}

export default useDebounce
