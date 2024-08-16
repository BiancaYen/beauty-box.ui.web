import classNames from 'classnames';
import { FC, ReactNode } from 'react';

// Types
interface GridProps {
    children: ReactNode,
    className?: string,
    columnsDesktop?: 3 | 4,
    columnsDesktopXl?: 3 | 4 | 5,
    columnsMobile?: 1 | 2,
    columnsTablet?: 2 | 3,
    gapX?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
    gapY?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
    maxWidth?: string,
}

export const Grid: FC<GridProps> = ({
    children,
    className,
    columnsDesktop = 3,
    columnsDesktopXl = 3,
    columnsMobile = 1,
    columnsTablet = 2,
    gapX = 5,
    gapY = 3,
    maxWidth = 'auto',
}) => {
    const gridColumnsMobile = {
        1: 'grid-cols-x1',
        2: 'grid-cols-x2',
    };

    const gridColumnsTablet = {
        2: 'sm:grid-cols-x2',
        3: 'sm:grid-cols-x3',
    };

    const gridColumnsDesktop = {
        3: 'lg:grid-cols-x3',
        4: 'lg:grid-cols-x4',
    };

    const gridColumnsDesktopXl = {
        3: 'xl:grid-cols-x3',
        4: 'xl:grid-cols-x4',
        5: 'xl:grid-cols-x5',
    };

    const gutterX = {
        0: 'gap-x-0',
        1: 'gap-x-1',
        2: 'gap-x-2',
        3: 'gap-x-3',
        4: 'gap-x-4',
        5: 'gap-x-5',
        6: 'gap-x-6',
    };

    const gutterY = {
        0: 'gap-y-0',
        1: 'gap-y-1',
        2: 'gap-y-2',
        3: 'gap-y-3',
        4: 'gap-y-4',
        5: 'gap-y-5',
        6: 'gap-y-6',
    };

    return (
        <div
            className={classNames(
                'grid justify-center min-w-0 min-h-0',
                gutterX[gapX],
                gutterY[gapY],
                gridColumnsMobile[columnsMobile],
                gridColumnsTablet[columnsTablet],
                gridColumnsDesktop[columnsDesktop],
                gridColumnsDesktopXl[columnsDesktopXl],
                className,
            )}
        >
            {children}
        </div>
    );
};
