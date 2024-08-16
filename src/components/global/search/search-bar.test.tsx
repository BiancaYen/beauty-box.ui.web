import React from 'react';
import {
    fireEvent, render, screen,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

// Components
import { SearchBar } from '@/components/global/search/search-bar';
import { SearchContextProvider } from '@/components/providers/search-provider';

describe('Search Bar [Appearance]', () => {
    it('[Initial Load] Rendered correctly', () => {
        render(
            <SearchBar placeholder="Search" />,
        );
        expect(screen.getAllByRole('button').length).toEqual(1);
        expect(screen.getAllByRole('graphics-symbol').length).toEqual(2);
        expect(screen.getAllByRole('searchbox').length).toEqual(1);
        const searchPlaceholder = screen.getByPlaceholderText('Search');
        expect(searchPlaceholder).toBeInTheDocument();
    });
    it('[Error] Displays error message', () => {
        const error = 'Invalid input provided';

        render(
            <SearchBar errorMessage={error} />,
        );

        expect(screen.getByText(error)).toBeInTheDocument();
    });
    it('[Success] Displays info message', () => {
        const result = '0 Classes found for ‘search phrase’';

        render(
            <SearchBar infoMessage={result} />,
        );

        expect(screen.getByText(result)).toBeInTheDocument();
        expect(screen.getAllByRole('alert').length).toEqual(1);
    });
    // TODO: Refactor to work with external state management
    it.skip("[Reset] Change 'reset' icon color when input supplied", async () => {
        const ACTIVE_FILL = '--color-primaryDefault';
        const INACTIVE_FILL = '--color-primaryTint1';

        render(
            <SearchBar />,
        );

        const input = screen.getByRole('searchbox');
        const resetButton = screen.getByRole('button');
        const svg = screen.getAllByRole('graphics-symbol')[1];

        expect(svg).toContainHTML(INACTIVE_FILL);

        await userEvent.type(input, 'test');

        expect(svg).toContainHTML(ACTIVE_FILL);

        await userEvent.click(resetButton);

        expect(svg).toContainHTML(INACTIVE_FILL);
    });
});

// TODO: Refactor to work with external state management
describe.skip('Search Bar [Interaction]', () => {
    it("[Enter] Update search value when 'Enter' key is pressed", async () => {
        const searchText = 'Search';

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onSearch = jest.fn().mockImplementation((value: string) => { });

        render(<SearchContextProvider><SearchBar /></SearchContextProvider>);

        const input = screen.getByRole('searchbox');

        await userEvent.type(input, `${searchText}{enter}`);

        expect(input).toHaveValue(searchText);
        expect(onSearch).toBeCalledTimes(1);
    });
    it("[Reset] Clear input value when 'reset' button is pressed", () => {
        render(<SearchContextProvider><SearchBar /></SearchContextProvider>);

        const input = screen.getByRole('searchbox');

        const searchText = 'Search';

        fireEvent.change(input, { target: { value: searchText } });
        expect(input).toHaveValue();

        const resetButton = screen.getByRole('button');

        fireEvent.click(resetButton);
        expect(input).not.toHaveValue();
    });
});
