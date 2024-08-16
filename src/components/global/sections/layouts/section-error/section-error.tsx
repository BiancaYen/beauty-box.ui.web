import React, { FC, ReactNode } from 'react';

// Types
interface SectionErrorProps {
    children?: ReactNode,
}

export const SectionError: FC<SectionErrorProps> = ({ children }) => (
    <section className="flex flex-[2] items-start justify-center p-5 md:items-center md:p-7">
        {children}
    </section>
);
