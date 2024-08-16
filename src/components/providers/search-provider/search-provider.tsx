/* eslint-disable react/no-unused-prop-types */

'use client';

import React, {
    FC,
    ReactNode,
    useMemo,
    useState,
} from 'react';

// Types
export interface SearchContextProps {
    query?: string,
    setQuery: (query: string) => void,
}

export const SearchContext = React.createContext<SearchContextProps>({ query: undefined, setQuery: () => { } });

interface SearchContextProviderProps {
    children: ReactNode,
}

export const SearchContextProvider: FC<SearchContextProviderProps> = ({ children }) => {
    const [query, setQuery] = useState<string>();

    const value = useMemo(() => ({ query, setQuery }), [query, setQuery]);

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

