import React, {
    FC,
    ReactNode,
} from 'react';

// Types
interface CenteredContentWithIconProps {
    children: ReactNode,
    classes?: {
        icon?: string,
    },
    icon?: React.ElementType,
    iconHeight?: string,
    iconWidth?: string,
    fill?: string,
}

export const CenteredContentWithIcon: FC<CenteredContentWithIconProps> = ({
    children,
    classes,
    fill,
    icon: Icon,
    iconHeight,
    iconWidth,
}) => (
    <div className="flex items-center justify-center gap-1.5">
        <span>{children}</span>
        {Icon && (
            <Icon
                className={classes?.icon}
                fill={fill}
                height={iconHeight}
                width={iconWidth}
            />
        )}
    </div>
);
