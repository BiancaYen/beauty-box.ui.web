import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

// Types
interface CoachCardLayoutProps {
    backgroundImage: {
        alt: string,
        src: string,
    },
    categoryColor: string,
    children: React.ReactNode,
    classes?: {
        contentHover? : string,
        wrapper?: string,
    },
    link: string,
}

export const CoachCardLayout: React.FC<CoachCardLayoutProps> = ({
    backgroundImage,
    categoryColor = '',
    children,
    classes = {
        wrapper: '',
    },
    link,
}) => {
    const {
        alt: backgroundImageAlt,
        src: backgroundImageSrc,
    } = backgroundImage;

    return (
        <Link
<<<<<<< HEAD
            className={classNames(
                'relative text-default-white flex flex-col rounded-t-2xl cursor-pointer justify-end w-[17.5rem] h-[13.75rem]',
=======
            className={twMerge(
                'relative text-default-white shadow-[-10px_10px_11px_0_rgba(130,147,182,0.2)] flex flex-col rounded-t-2xl cursor-pointer justify-end w-[17.5rem] z-10 h-[13.75rem]',
>>>>>>> master
                classes.wrapper,
            )}
            href={link}
            style={{
                backgroundColor: categoryColor,
            }}
        >
            <article className="z-[1]">
                { children }
            </article>

            <div className="absolute left-0 top-[-1.375rem] h-[calc(100%+1.375rem)] w-full">
                <div className="relative h-full w-full">
                    <Image
                        alt={backgroundImageAlt}
                        className="object-contain"
                        layout="fill"
                        src={backgroundImageSrc}
                    />
                    <span
                        className="absolute bottom-0 left-0 h-[55%] w-full"
                        style={{
                            background: `linear-gradient(to bottom, rgba(8, 75, 145, 0), ${categoryColor})`,
                        }}
                    />
                </div>
            </div>
        </Link>
    );
};

