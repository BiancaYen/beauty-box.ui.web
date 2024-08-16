'use client';

import React, {
    FC,
    ReactNode,
} from 'react';
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';

interface SessionProviderProps {
    children: ReactNode,
}

export const SessionProvider: FC<SessionProviderProps> = ({ children }) => (
    <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
);
