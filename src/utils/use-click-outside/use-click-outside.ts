import { RefObject, useEffect } from 'react';

type Callback = (event: MouseEvent | TouchEvent) => void;

export function useClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    callback: Callback,
): void {
    const handleClick = (event: MouseEvent | TouchEvent) => {
        if (ref.current && !ref.current.contains(event.target as T)) {
            callback(event);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        document.addEventListener('touchend', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
            document.addEventListener('touchend', handleClick);
        };
    });
}
