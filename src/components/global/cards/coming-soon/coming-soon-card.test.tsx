import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import { ComingSoonCard } from '@/components/global/cards/coming-soon';

describe('RadioToggle component', () => {
    it('renders correctly', () => {
        const props = {
            backgroundImage: {
                alt: 'Photo of Albie & Lwando',
                src: '/images/storybook/test-coach-coming-soon.jpg',
            },
            category: 'Lifestyle',
            categoryColor: '#ed5b39',
            coach: 'Albie & Lwando',
            fallbackImageSrc: '/images/placeholders/coming-soon-placeholder.jpg',
            isLoading: false,
        };

        render(<ComingSoonCard {...props} />);

        const cardElement = screen.getByRole('article');
        const imgElement = screen.getByRole('img') as HTMLImageElement;
        const categoryElement = screen.getByText(props.category);
        const coachElement = screen.getByText(props.coach);

        expect(imgElement.src).toContain('http');
        expect(categoryElement).toBeInTheDocument();
        expect(coachElement).toBeInTheDocument();
        expect(JSON.stringify(cardElement?.style)).toContain(
            props.categoryColor,
        );
    });
});
