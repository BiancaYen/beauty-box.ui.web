import { MouseEvent, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Components
import { Dropdown } from '@/components/global/dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
    args: {
        children: 'Content',
        isActive: true,
    },
};

const DropdownWithParentElement = () => {
    const [isActive, setActive] = useState<boolean>(false);

    const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setActive(!isActive);
    };

    const handleClickOutside = () => {
        if (isActive) {
            setActive(false);
        }
    };

    return (
        <div className="relative">
            <button
                type="button"
                tabIndex={0}
                onClick={handleToggle}
            >
                Dropdown
            </button>
            <Dropdown
                isActive={isActive}
                onClickOutside={handleClickOutside}
            >
                Content
            </Dropdown>
        </div>
    );
};

export const WithParentElement: Story = {
    render: () => <DropdownWithParentElement />,
};
