import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { FeaturedSiteDescriptionSection } from '@/components/global/sections/featured-site-description-section';

describe('Featured About Platform Section component [Appearance]', () => {
    it('[Initial Load] Renders correctly for mobile', () => {
        // Change the viewport to mobile
        global.innerWidth = 500;

        // Trigger the window resize event.
        global.dispatchEvent(new Event('resize'));

        const props = {
            backgroundImage: {
                alt: 'Backdrop',
                src: '/images/storybook/about-platform-bg-mobile.png',
            },
            backgroundImageDesktop: {
                alt: 'Backdrop with the faces of popular coaches',
                src: '/images/storybook/about-platform-bg-desktop.jpg',
            },
            description: 'Paragraph Copy',
            foregroundImage: {
                alt: 'Faces of popular coaches',
                src: '/images/storybook/about-platform-foreground-mobile.png',
            },
            heading: 'Heading Copy',
            headingTag: 'h2',
            link: '/courses',
            linkCopy: 'Link Copy',
            note: 'Side Note Copy',
        };

        render(
            <FeaturedSiteDescriptionSection
                backgroundImage={props.backgroundImage}
                backgroundImageDesktop={props.backgroundImageDesktop}
                description={props.description}
                foregroundImage={props.foregroundImage}
                heading={props.heading}
                link={props.link}
                linkCopy={props.linkCopy}
                note={props.note}
            />,
        );

        const heading = screen.getByText(props.heading);
        expect(heading).toBeInTheDocument();

        const description = screen.getByText(props.description);
        expect(description).toBeInTheDocument();

        const note = screen.getByText(props.note);
        expect(note).toBeInTheDocument();

        const image = screen.getByAltText(props.backgroundImage.alt);

        expect(image.outerHTML).toContain('about-platform-bg-mobile.png');
    });

    it('[Initial Load] Renders correctly for desktop', () => {
        // Change the viewport to mobile
        global.innerWidth = 1024;

        // Trigger the window resize event.
        global.dispatchEvent(new Event('resize'));

        const props = {
            backgroundImage: {
                alt: 'Backdrop',
                src: '/images/storybook/about-platform-bg-mobile.png',
            },
            backgroundImageDesktop: {
                alt: 'Backdrop with the faces of popular coaches',
                src: '/images/storybook/about-platform-bg-desktop.jpg',
            },
            description: 'Paragraph Copy',
            foregroundImage: {
                alt: 'Faces of popular coaches',
                src: '/images/storybook/about-platform-foreground-mobile.png',
            },
            heading: 'Heading Copy',
            headingTag: 'h2',
            link: '/courses',
            linkCopy: 'Link Copy',
            note: 'Side Note Copy',
        };

        render(
            <FeaturedSiteDescriptionSection
                backgroundImage={props.backgroundImage}
                backgroundImageDesktop={props.backgroundImageDesktop}
                description={props.description}
                foregroundImage={props.foregroundImage}
                heading={props.heading}
                link={props.link}
                linkCopy={props.linkCopy}
                note={props.note}
            />,
        );

        const heading = screen.getByText(props.heading);
        expect(heading).toBeInTheDocument();

        const description = screen.getByText(props.description);
        expect(description).toBeInTheDocument();

        const note = screen.getByText(props.note);
        expect(note).toBeInTheDocument();

        const image = screen.getByAltText(props.backgroundImageDesktop.alt);

        expect(image.outerHTML).toContain('about-platform-bg-desktop.jpg');
    });
});
