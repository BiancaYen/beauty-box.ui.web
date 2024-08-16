import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ClickableTag } from '@/components/global/clickable-tag';

const meta: Meta<typeof ClickableTag> = {
    title: 'Components/Tags/Clickable Tag',
    component: ClickableTag,
};

export default meta;

type Story = StoryObj<typeof ClickableTag>;

const TagWithHooks = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <ClickableTag
            id="test-tag"
            isActive={isActive}
            onClick={() => setIsActive(!isActive)}
        >
            {isActive ? 'Active' : 'Inactive'}
        </ClickableTag>
    );
};

export const Primary: Story = {
    args: {
        children: 'Business',
        id: 'business',
        onClick: () => {},
    },
};

export const Toggle: Story = {
    render: () => <TagWithHooks />,
};

