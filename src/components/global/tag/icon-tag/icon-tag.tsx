import React, {
    FC,
    ReactNode,
} from 'react';
import classNames from 'classnames';
import { TagLayout, TagVariants } from '../layout/layout';

// Types
interface IconTagProps {
    classes?: {
        wrapper?: string,
        icon?: string,
    },
    copy: string | number,
    iconLeft?: ReactNode,
    iconRight?: ReactNode,
    isActive?: boolean,
    variant?: TagVariants,
}

export const IconTag: FC<IconTagProps> = ({
    classes = {
        wrapper: '',
        icon: '',
    },
    copy,
    iconLeft,
    iconRight,
    isActive,
    variant = TagVariants.primary,
}) => (
    <TagLayout
        className={classes.wrapper}
        variant={variant}
        isActive={isActive}
    >
        <div
            className="flex w-full items-center justify-center gap-1"
        >
            {iconLeft && (
                <div
                    className={classNames(
                        'flex justify-center items-center h-[0.5rem] w-[0.5rem]',
                        classes.icon,
                    )}
                >
                    { iconLeft }
                </div>
            )}

            <p>
                {copy}
            </p>

            {iconRight && (
                <div
                    className={classNames(
                        'flex justify-center items-center',
                        classes.icon,
                    )}
                >
                    { iconRight }
                </div>
            )}
        </div>
    </TagLayout>
);
