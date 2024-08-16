'use client';

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Components
import {
    SearchBar,
    SearchBarProps,
} from '@/components/global/search/search-bar';

const meta: Meta<typeof SearchBar> = {
    title: 'Components/Search/Search Bar',
    component: SearchBar,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

const DEFAULT_ERROR_MESSAGE = 'Please enter a valid search phrase and press enter.';
const DEFAULT_INFO_MESSAGE = '0 Classes found for ‘##SEARCH##’';

const RenderSearchBar = ({
    value, errorMessage, infoMessage,
}: SearchBarProps) => {
    const [error, setError] = useState<string>('');
    const [response, setResponse] = useState<string>('');
    const [query, setQuery] = useState<string>(value || '');

    const handleSubmit = () => {
        if (query.length === 0) {
            setResponse('');
            setError(
                errorMessage
                    ?? 'Please enter a valid search phrase and press enter',
            );
        } else {
            setError('');
            setQuery(query);
            const infoMessageWithSearchValue = (
                infoMessage ?? DEFAULT_INFO_MESSAGE
            ).replace('##SEARCH##', query);
            setResponse(infoMessageWithSearchValue);
        }
    };

    return (
        <div
            className="max-w-md"
            style={{
                padding: '12px' /* Tailwind padding not working in canvas */,
            }}
        >
            <SearchBar
                errorMessage={error}
                infoMessage={response}
                value={query}
                onChange={setQuery}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export const Playground: Story = {
    render: RenderSearchBar,
    args: {
        errorMessage: DEFAULT_ERROR_MESSAGE,
        infoMessage: DEFAULT_INFO_MESSAGE,
    },
};
