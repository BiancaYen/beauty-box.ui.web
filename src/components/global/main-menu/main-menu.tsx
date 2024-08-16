import React from 'react';
import Image from 'next/image';

// Components
import { Accordion } from '@/components/global/accordion';
import { IconButton } from '@/components/global/icon-button';
import { MainMenuLink, MainMenuLinkProps } from '@/components/global/main-menu-link';

// Icons
import { CloseIcon } from '@/components/icons';

interface MainMenuWithSubMenuProps {
    copy: string,
    link?: never,
    subMenu: MainMenuLinkProps[],
}

interface MainMenuWithOutSubMenuProps {
    copy: string,
    link: string,
    subMenu?: never,
}

export type MainMenuLinksProps = MainMenuWithSubMenuProps | MainMenuWithOutSubMenuProps;

interface MainManuProps {
    isActive?: boolean,
    links: MainMenuLinksProps[],
    partnerLogo: {
        alt: string,
        height: number,
        src: string,
        width: number,
    },
    onClose: () => void,
}

export const MainMenu: React.FC<MainManuProps> = ({
    isActive = false,
    links,
    partnerLogo,
    onClose,
}) => {
    const {
        alt: partnerLogoAlt,
        height: partnerLogoHeight,
        src: partnerLogoSrc,
        width: partnerLogoWidth,
    } = partnerLogo;

    if (!isActive) {
        return null;
    }

    const menuHeight = links.reduce((acc, link) => {
        let subLinkCount = 0;
        if (link.subMenu && link.subMenu.length) {
            subLinkCount = link.subMenu.length;
        }
        // subLink margin = 0.5rem, Link and subLink height = 2rem
        return subLinkCount ? acc + (0.5 + (1 + subLinkCount) * 2) : acc + 2;
    }, 0);

    return (
        <div className="bg-defaultWhite fixed top-0 z-40 flex h-screen w-full flex-col items-center justify-between">
            <div className="absolute top-0 h-[4.1875rem] w-full">
                <IconButton className="absolute left-[0.9375rem] top-[0.9375rem] h-[1.875rem] w-[1.875rem]" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </div>
            <div className="flex h-full items-center overflow-y-auto py-[4.1875rem]">
                <div
                    className="flex flex-col items-center"
                    style={{ minHeight: `${menuHeight}rem` }}
                >
                    {!!links.length && links.map(({
                        link,
                        copy,
                        subMenu,
                    }) => {
                        if (subMenu && subMenu.length) {
                            return (
                                <div key={copy} className="flex items-center">
                                    <Accordion
                                        className="py-2"
                                        heading={copy}
                                        headingJustify="justify-center"
                                        headingTag="div"
                                        isActive
                                    >
                                        <div className="flex flex-col items-center">
                                            { subMenu.map(({ link: smLink, copy: smCopy }) => (
                                                <MainMenuLink
                                                    key={smLink}
                                                    link={smLink}
                                                    copy={smCopy}
                                                    isSubLink
                                                />
                                            ))}
                                        </div>
                                    </Accordion>
                                </div>
                            );
                        }
                        return (
                            <MainMenuLink
                                key={link}
                                link={link}
                                copy={copy}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="bg-defaultWhite absolute bottom-0 py-5">
                <Image
                    alt={partnerLogoAlt}
                    className="max-w-footer"
                    height={partnerLogoHeight}
                    src={partnerLogoSrc}
                    width={partnerLogoWidth}
                />
            </div>
        </div>
    );
};

