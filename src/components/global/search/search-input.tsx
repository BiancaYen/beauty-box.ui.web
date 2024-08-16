/* eslint-disable react/button-has-type */

'use client';

import React, {useRef, useState} from 'react';
import classNames from 'classnames';

// Icons
import { CloseIcon, SearchIcon } from '@/components/icons';
import {IoIosSearch} from 'react-icons/io';

// Types
export interface SearchInputProps {
    className?: string,
    errorMessage?: string,
    name?: string,
    placeholder?: string,
    value?: string,
    onChange?: (searchValue: string) => void,
}

export const SearchInput = ({
    className,
    errorMessage,
    name = 'search',
    placeholder = 'Search',
    value = '',
    onChange,
}: SearchInputProps) => {
    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);

    const hasValue = !!value?.length;
    const hasError = errorMessage && errorMessage.length > 0;
    const defaultBorder = hasError
        ? 'border-primary-default '
        : 'border-systemDefault-tint-2 active:border-systemDefault-tint-1 focus:border-systemDefault-tint-1 hover:border-system-default-tint-1';


    const handleButtonClick = (searchValue: string) => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        setIsFocused(true);
    };

    const handleChange = (searchValue: string) => {
        if (onChange) {
            onChange(searchValue);
        }
    };

    return (
        <div className={classNames(
            'flex-[2_0_0] flex rounded-full px-5 justify-between border transition-all',
            isFocused ? 'border-system-default-tint-1' : 'border-transparent'
        )}>
            <input
                name={name}
                type="search"
                placeholder={isFocused ? placeholder : ''}
                ref={inputRef}
                className={classNames(
                    'bg-[rgba(0,0,0,0)] max-w-0',
                    'text-xs leading-none caret-primary-default outline-none',
                    className,
                    defaultBorder,
                )}
                onFocus={(event) => setIsFocused(true)}
                onChange={(event) => handleChange(event.currentTarget.value)}
                value={value}
            />
            <button className="hover:animate-enter py-2 pl-2" onFocus={handleButtonClick}>
                <IoIosSearch size="1.5em" />
            </button>
        </div>
    );
};
