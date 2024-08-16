import React, {
    MouseEvent,
    KeyboardEvent,
    TouchEvent,
    useState,
    useCallback,
} from 'react';
import classNames from 'classnames';

// Components
import { Dropdown } from '@/components/global/dropdown';
import { DropdownLink, DropdownLinkProps } from '@/components/global/dropdown-link';

// Icons
import { CaretUpIcon } from '@/components/icons';

type ToggleEventType = KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>;

export interface HeaderMenuDropdownProps {
    copy: string,
    menuItems: DropdownLinkProps[],
}

export const HeaderMenuDropdown: React.FC<HeaderMenuDropdownProps> = ({
    copy,
    menuItems,
}) => {
    const [isActive, setActive] = useState<boolean>(false);

    const handleToggle = useCallback((event: ToggleEventType) => {
        event.stopPropagation();
        setActive((value) => !value);
    }, []);

    const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            handleToggle(event);
        }
    };

    const handleClickOutside = () => {
        setActive(false);
    };

    return (
        <div className="relative">
            <div
                className="group/label ml-3 mr-0.5 flex w-max items-center text-sm font-bold"
                role="button"
                tabIndex={0}
                onClick={handleToggle}
                onKeyDown={handleKeyPress}
            >
                <div className="flex h-[1.875rem] select-none items-center group-hover/label:text-primary-default">
                    {copy}
                </div>
                <div
                    className={classNames(
                        isActive ? 'rotate-0' : 'rotate-180',
                        'px-2.5',
                    )}
                >
                    <CaretUpIcon />
                </div>
            </div>
            <Dropdown
                className="top-[3.375rem] p-0 text-sm"
                isActive={isActive}
                onClickOutside={handleClickOutside}
            >
                {!!menuItems.length && menuItems.map(({ copy: subMenuCopy, link: subMenuLink }) => (
                    <DropdownLink
                        copy={subMenuCopy}
                        key={subMenuLink}
                        link={subMenuLink}
                    />
                ))}
            </Dropdown>
        </div>
    );
};
