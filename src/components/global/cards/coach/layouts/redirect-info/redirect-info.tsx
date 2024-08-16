import React, { FC } from 'react';

// Components
import { CaretRightIcon } from '@/components/icons';

// Types
interface RedirectInfoProps {
    copy: string,
}

export const RedirectInfo: FC<RedirectInfoProps> = ({ copy }) => (
    <div className="flex items-center justify-center gap-2">
        <p className=" ml-1 text-base font-bold">
            {copy}
        </p>

        <CaretRightIcon
            fill="var(--color-defaultWhite)"
        />
    </div>
);

