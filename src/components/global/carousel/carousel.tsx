'use client';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import React, {
    FC,
    ReactNode,
} from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import { useMediaQuery } from 'usehooks-ts';
import {
    Autoplay,
    FreeMode,
    Navigation,
    Pagination,
} from 'swiper/modules';

// Icons
import { CaretLeftTallIcon, CaretRightTallIcon } from '@/components/icons';

// Styles
import 'swiper/css';
import 'swiper/css/bundle';
import './styles.css';

// Types
interface CarouselProps extends SwiperProps {
    children: ReactNode,
    classes?: {
        wrapper?: string,
    },
    hasFreeScroll?: boolean,
    hasNavigationArrows?: boolean,
    hasPaginationMobile?: boolean,
    isCenteredSlides?: boolean,
    slidesGap?: string | number,
    slidesPerView?: number | 'auto',
}

export const Carousel: FC<CarouselProps> = ({
    children,
    classes = {
        wrapper: '',
    },
    hasFreeScroll = false,
    hasNavigationArrows = true,
    hasPaginationMobile = false,
    initialSlide,
    isCenteredSlides = false,
    slidesGap = 0,
    slidesPerView = 'auto',
}) => {
    const sharedCaretStyles = 'z-10 hover:opacity-80 cursor-pointer absolute top-1/2 h-auto w-auto flex justify-center items-center';
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <Swiper
            {...!hasFreeScroll && {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
            }}
            className={twMerge(classNames(
                // This is important to cover the space of the absolutely positioned bullets
                isMobile && hasPaginationMobile && 'mb-6',
                classes.wrapper,
            ))}
            centeredSlides={isCenteredSlides}
            freeMode={hasFreeScroll}
            initialSlide={initialSlide}
            loop={!hasFreeScroll}
            navigation={{
                prevEl: '.swiper-prev-slide-button',
                nextEl: '.swiper-next-slide-button',
            }}
            keyboard={{
                enabled: true,
            }}
            modules={[Autoplay, FreeMode, Pagination, Navigation]}
            pagination={{
                enabled: !isMobile ? false : hasPaginationMobile,
                clickable: true,
            }}
            slidesPerView={slidesPerView}
            spaceBetween={slidesGap}
            speed={600}
        >
            {
                hasNavigationArrows && (
                    <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center lg:flex">
                        <div
                            className={classNames(
                                'swiper-prev-slide-button left-5',
                                sharedCaretStyles,
                            )}
                        >
                            <CaretLeftTallIcon />
                        </div>
                        <div
                            className={classNames(
                                'swiper-next-slide-button right-5',
                                sharedCaretStyles,
                            )}
                        >
                            <CaretRightTallIcon />
                        </div>
                    </div>
                )
            }
            {children}
            {isMobile && hasPaginationMobile && <span className="relative block h-6" />}
        </Swiper>
    );
};

