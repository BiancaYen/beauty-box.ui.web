import { useEffect, useState } from 'react';
import cookieCutter from 'cookie-cutter';

interface IBeforeInstallPromptEvent extends Event {
    readonly platforms: string[],
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed',
        platform: string,
    }>,
    prompt(): Promise<void>,
}

export function useAddToHomeScreenPrompt(): [
    IBeforeInstallPromptEvent | null,
    () => void,
] {
    const [promptEvent, setPromptEvent] = useState<IBeforeInstallPromptEvent | null>(null);

    const promptToInstall = () => {
        if (promptEvent) {
            cookieCutter.set('isHomeScreenVisit', true, { expires: 60 * 60 * 24 });
            return promptEvent.prompt();
        }
        return Promise.reject(
            new Error(
                'Tried installing before browser sent "beforeinstallprompt" event',
            ),
        );
    };

    useEffect(() => {
        const beforeInstallPromptHandler = (e: IBeforeInstallPromptEvent) => {
            e.preventDefault();
            setPromptEvent(e);
        };

        window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler as EventListenerOrEventListenerObject);

        return () => {
            window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler as EventListenerOrEventListenerObject);
        };
    }, []);

    return [promptEvent, promptToInstall];
}
