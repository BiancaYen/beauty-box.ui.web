import React from 'react';
import {
    fireEvent, render, screen,
} from '@testing-library/react';

// Components
import { SearchInput } from '@/components/global/search/search-input';

describe('Search Input component', () => {
    it('Given when input value is changed, state is updated in parent component', () => {
        const searchText = 'Search';

        let inputValue: string = '';

        const onChange = jest
            .fn()
            .mockImplementation((value: string) => { (inputValue = value); });

        render(
            <SearchInput onChange={onChange} value={inputValue} />,
        );

        const input = screen.getByRole('searchbox');

        fireEvent.change(input, { target: { value: searchText } });

        expect(onChange).toBeCalledTimes(1);
        expect(inputValue).toEqual(searchText);
    });
});
