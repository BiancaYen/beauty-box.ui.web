'use client';

import type { Meta, StoryObj } from '@storybook/react';

// Components
import { SearchInputProps, SearchInput } from '@/components/global/search/search-input';

const meta: Meta<typeof SearchInput> = {
    title: 'Components/Search/Search Input',
    component: SearchInput,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

const RenderSearchInput = ({ errorMessage }: SearchInputProps) => (
    <div className="flex max-w-md flex-col" style={{ margin: '8px' }}>
        <SearchInput
            errorMessage={errorMessage}
        />
    </div>
);

export const Primary: Story = {
    render: RenderSearchInput,
    args: {
        value: '',
        errorMessage: '',
    },
};

export const Error: Story = {
    render: RenderSearchInput,
    args: {
        value: 'Cooking',
        errorMessage: 'A network error occurred...',
    },
};
