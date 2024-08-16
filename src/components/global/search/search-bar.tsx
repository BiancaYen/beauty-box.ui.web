'use client';

import classNames from 'classnames';
import {
    FormEvent, useCallback, useEffect,
} from 'react';

// Components
import { SearchInput, SearchInputProps } from './search-input';

// Types
export interface SearchBarProps extends Pick<SearchInputProps, 'value' | 'onChange'> {
    className?: string,
    errorMessage?: string,
    infoMessage?: string,
    placeholder?: string,
    onSubmit?: () => void,
}

export const SearchBar = ({
    className,
    errorMessage = '',
    infoMessage = '',
    placeholder = '',
    value,
    onChange,
    onSubmit,
}: SearchBarProps) => {
    const handleChange = useCallback((searchText: string) => {
        if (onChange) {
            onChange(searchText);
        }
    }, [onChange]);

    useEffect(() => {
        handleChange(value || '');
    }, [value, handleChange]);

    const hasInfoMessage = infoMessage && infoMessage.length > 0;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent form redirect behaviour
        if (onSubmit) {
            onSubmit();
        }
    };

    return (
        <form
            className={classNames('flex flex-col', className)}
            name="search-form"
            onSubmit={handleSubmit}
        >
            <SearchInput
                errorMessage={errorMessage}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
            {hasInfoMessage ? (
                <span role="alert" className="my-4 text-xs">{infoMessage}</span>
            ) : null}
        </form>
    );
};
