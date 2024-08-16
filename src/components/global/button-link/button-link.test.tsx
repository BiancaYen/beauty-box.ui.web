import React from 'react';
import {
    fireEvent,
    render,
    screen,
} from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

// Components
import { ButtonLink } from '@/components/global/button-link';

it('should handle click events and navigate to the specified href', () => {
    const href = '/example';
    const buttonText = 'Click me';

    render(
        <MemoryRouterProvider>
            <ButtonLink href={href}>{buttonText}</ButtonLink>
        </MemoryRouterProvider>,
    );

    fireEvent.click(screen.getByText(buttonText));

    expect(mockRouter.asPath).toEqual(href);
});
