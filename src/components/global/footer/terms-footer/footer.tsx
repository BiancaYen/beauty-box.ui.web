import React, { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

// Components
import { FooterLink } from '../../footer-link';

interface FooterLinksProps {
    copy: string,
    link: string,
}

interface FooterProps {
    copy: string,
    links: FooterLinksProps[],
    partnerLogo: {
        alt: string,
        height: number,
        src: string,
        width: number,
    },
    withPartnerLogo?: boolean,
}

const styles = {
    copyright: 'text-xxs leading-relaxed select-none',
    dividerStyle: 'text-xxs text-system-default-tint-2 select-none',
    flexCenter: 'flex justify-center',
};

export const Footer: FC<FooterProps> = ({
    copy,
    links,
    partnerLogo,
    withPartnerLogo = true,
}) => {
    const {
        alt: partnerLogoAlt,
        height: partnerLogoHeight,
        src: partnerLogoSrc,
        width: partnerLogoWidth,
    } = partnerLogo;

    return (
        <footer className="flex h-24 w-full flex-col items-center justify-center lg:h-20">
            { withPartnerLogo && (
                <Image
                    alt={partnerLogoAlt}
                    className="mb-1 md:mb-1.5"
                    height={partnerLogoHeight}
                    src={partnerLogoSrc}
                    width={partnerLogoWidth}
                />
            )}
            <nav className={classNames('flex flex-wrap gap-x-2.5 text-xxs mx-auto leading-4 md:max-w-full', styles.flexCenter)}>
                <span className={classNames('flex-[100%] text-center md:inline md:flex-1', styles.copyright)}>{copy}</span>
                <span className={classNames('hidden md:inline', styles.dividerStyle)}>|</span>
                {
                    links.map(({ copy: linkCopy, link }, index) => (
                        <React.Fragment key={link}>
                            <FooterLink
                                copy={linkCopy}
                                href={link}
                            />
                            {index !== links.length - 1 && (
                                <span className={styles.dividerStyle}>|</span>
                            )}
                        </React.Fragment>
                    ))
                }
            </nav>
        </footer>
    );
};
