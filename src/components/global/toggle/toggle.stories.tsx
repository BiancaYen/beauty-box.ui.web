import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ToggleProps, Toggle } from '@/components/global/toggle';

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
    args: {
        label: 'Toggle Label',
    },
};

const InteractiveToggle = (props: ToggleProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const onChangeHandler = () => {
        setIsActive((value) => !value);
    };
    return (
        <Toggle
            {...props}
            value={isActive}
            onChange={onChangeHandler}
        />
    );
};

export const Playground: Story = {
    args: {
        label: 'Toggle Label',
    },
    render: (args) => (
        <InteractiveToggle {...args} />
    ),
};
