'use client';

import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

// Icons
import { DownloadIcon } from '@/components/icons';

// Components
import { Button, ButtonVariant } from '@/components/global/button';
import { ButtonSecondary } from '../button-secondary';

// Types
interface DownloadMasterbookButtonProps {
    book: string,
    classes?: {
        wrapper?: string,
    },
    lessonDownloadLink: string,
    variant?: 'primary' | 'secondary',
}

export const DownloadMasterbookButton: FC<DownloadMasterbookButtonProps> = ({
    book,
    classes,
    lessonDownloadLink,
    variant = 'primary',
}) => {
    const handleDownload = () => {
        // TODO: Implement download action here
        const download = `${lessonDownloadLink}`;
        return download;
    };

    const sharedProps = {
        icon: DownloadIcon,
        iconHeight: '10',
        iconWidth: '10',
        onClick: handleDownload,
    };

    return (
        <div
            className={twMerge(
                'flex w-full items-center justify-center',
                classes?.wrapper,
            )}
        >
            {variant === 'primary' && (
                <Button
                    classes={{
                        wrapper: 'w-[85%]',
                    }}
                    variant={ButtonVariant.tertiary}
                    {...sharedProps}
                >
                    {`Download ${book}`}
                </Button>
            )}

            {variant === 'secondary' && (
                <ButtonSecondary
                    variant="secondary"
                    {...sharedProps}
                >
                    {`Download ${book}`}
                </ButtonSecondary>
            )}
        </div>
    );
};
