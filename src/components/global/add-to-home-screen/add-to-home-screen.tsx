import React, {
    useCallback,
    useEffect,
    useState,
} from 'react';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { useMediaQuery } from 'usehooks-ts';
import cookieCutter from 'cookie-cutter';

// Components
import { DetailedToast } from '@/components/global/toasts/detailed-toast';
import { Modal } from '@/components/global/modal';

// Config
import { isHomeScreenVisitCookie } from '@/config/cookies-config';

// Icons
import { InstallIcon, UploadIcon } from '@/components/icons';

// Utils
import { useAddToHomeScreenPrompt } from '@/utils/use-add-to-home-screen-promt';

// Images
import { MasterStreamLogo } from '../../../../public/images/logo';

// Types
interface AddToHomeScreenProps {
    heading?: string,
    modalButtonCopy?: {
        copyBeforeIcon?: string,
        copyAfterIcon?: string,
    },
    modalDescription?: string,
    toastDescription?: string,
    toastDelayMs?: number,
}

const defaultModalCopy = 'Install this application on your home screen for quick and easy access when you’re on the go!';
const defaultToastCopy = 'Install this program on to your computer for shorter load times and added convenience!';

export const AddToHomeScreen: React.FC<AddToHomeScreenProps> = ({
    heading = 'Install Master Stream 🥇',
    modalButtonCopy = {
        copyBeforeIcon: 'Just tap',
        copyAfterIcon: 'then ‘Add to Home Screen’',
    },
    modalDescription = defaultModalCopy,
    toastDescription = defaultToastCopy,
    toastDelayMs = 10000,
}) => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [prompt, promptToInstall] = useAddToHomeScreenPrompt();

    const setHomeScreenCookie = useCallback(() => {
        cookieCutter.set(isHomeScreenVisitCookie.name, true, isHomeScreenVisitCookie.expires);
    }, []);

    const onModalCloseHandler = useCallback(() => {
        setHomeScreenCookie();
        setIsModalVisible(false);
    }, [setHomeScreenCookie]);

    const onToastShowHandler = useCallback(() => {
        toast(() => {
            setHomeScreenCookie();

            return (
                <DetailedToast
                    actionCopy="Install"
                    actionIcon={InstallIcon}
                    copy={toastDescription}
                    hasRating={false}
                    heading={heading}
                    onActionClick={promptToInstall}
                />
            );
        }, { duration: toastDelayMs });
    }, [heading, promptToInstall, toastDescription, toastDelayMs, setHomeScreenCookie]);

    // Effects
    useEffect(() => {
        if (prompt && isMobile) {
            setIsModalVisible(true);
        }
        if (prompt && !isMobile) {
            onToastShowHandler();
        }
    }, [isMobile, prompt, onToastShowHandler]);

    return (
        <Modal
            className="h-full w-full text-xs"
            isActive={isModalVisible}
            onClose={onModalCloseHandler}
        >
            <div className="flex h-[calc(100%-3.875rem)] flex-col items-center px-5 py-7">
                <div className="mb-5 flex h-[6.875rem] w-[6.875rem] items-center justify-center rounded-2xl shadow-modal">
                    <Image
                        src={MasterStreamLogo}
                        alt="Logo"
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-2.5 text-center text-base font-bold">{heading}</div>
                    <div className="text-center text-xs italic">{modalDescription}</div>
                </div>
            </div>
            <button
                className="flex h-[3.875rem] w-full items-center justify-center bg-system-default-tint-3"
                type="button"
                onClick={promptToInstall}
            >
                <span>{modalButtonCopy.copyBeforeIcon}</span>
                <UploadIcon className="mx-2.5" />
                <span>{modalButtonCopy.copyAfterIcon}</span>
            </button>
        </Modal>
    );
};
