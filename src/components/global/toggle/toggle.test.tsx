import React from 'react';
import { render, screen } from '@testing-library/react';
import { Toggle } from '@/components/global/toggle';

describe('Toggle component', () => {
    it('renders correctly', () => {
        render(
            <Toggle
                label="Toggle Label"
                value
                onChange={() => {}}
            />,
        );
        const labelElement = screen.getByText('Toggle Label');
        expect(labelElement).toBeInTheDocument();
    });
});
