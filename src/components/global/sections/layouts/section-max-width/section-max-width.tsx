import React, { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

// Types
interface SectionMaxWidthProps {
    children?: ReactNode,
    classes?: string,
}

export const SectionMaxWidth: FC<SectionMaxWidthProps> = ({ children, classes }) => (
    <section className={twMerge('mx-auto max-w-content-container', classes)}>
        {children}
    </section>
);
