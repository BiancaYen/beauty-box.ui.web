import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Input, InputProps } from '@/components/global/input';

const meta: Meta<typeof Input> = {
    args: {
        labelCopy: 'Input Label',
        maxLength: 15,
        placeholder: 'Input Placeholder',
    },
    component: Input,
    title: 'Components/Input',
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {};

const InputWithResponse: React.FC<InputProps> = (props) => {
    const [value, setValue] = useState<string>('');

    const onChangeHandler = (event: React.SyntheticEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    };

    return (
        <Input
            {...props}
            value={value}
            onChange={onChangeHandler}
        />
    );
};

export const Playground: Story = {
    render: (args) => (
        <InputWithResponse {...args} />
    ),
};
