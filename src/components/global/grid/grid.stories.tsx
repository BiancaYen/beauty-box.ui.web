import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Grid } from '@/components/global/grid';
import {
    CoachIntroductionCard,
    CoachIntroductionCardProps,
} from '@/components/global/cards/coach/coach-introduction-card';

const meta: Meta<typeof Grid> = {
    title: 'Components/Grid',
    component: Grid,
    parameters: {
        controls: {
            exclude: /children|className*/g,
        },
    },
};

export default meta;

type Story = StoryObj<typeof Grid>;

const GridItem = () => (
    <div className="flex items-center justify-center rounded-2xl bg-system-default-tint-3 p-5 align-middle">Grid Item</div>
);

const CoachIntroductionCardItem = () => {
    const data: CoachIntroductionCardProps = {
        backgroundImage: {
            alt: 'Ryan Sandes',
            src: './images/storybook/test-coach.png',
        },
        backgroundImageHover: {
            alt: 'Ryan Sandes',
            src: './images/storybook/test-coach-hover.png',
        },
        book: 'Masterbook',
        categoryColor: '#006987',
        categoryId: 1,
        coach: 'Ryan Sandes',
        courseTotalTime: 160,
        description: `Discover how to design your trail of life;
                      how to run for purpose and pleasure; how to back
                      yourself, push yourself and ultimately steer your
                      sights towards the one and only summit that’ll set
                      your soul on fire.`,
        id: 'ryan-sandes',
        lessonCount: 12,
        link: '/coaches',
        redirectCopy: 'View Coach',
        subheading: 'Mastering your own Trail',
        subcategory: 'Sports',
    };

    return (
        <CoachIntroductionCard
            backgroundImage={data.backgroundImage}
            backgroundImageHover={data.backgroundImageHover}
            book={data.book}
            coach={data.coach}
            categoryColor={data.categoryColor}
            categoryId={data.categoryId}
            courseTotalTime={160}
            description={data.description}
            id={data.id}
            lessonCount={data.lessonCount}
            link={data.link}
            redirectCopy={data.redirectCopy}
            subheading={data.subheading}
            subcategory={data.subcategory}
        />
    );
};

const RenderGridWithItems = () => {
    const gridItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            {gridItems.map((item) => <CoachIntroductionCardItem key={item} />)}
        </>
    );
};

const RenderGridWithGridItems = () => {
    const gridItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            {gridItems.map((item) => <GridItem key={item} />)}
        </>
    );
};

export const Primary: Story = {
    args: {
        children: <RenderGridWithGridItems />,
        columnsDesktop: 3,
        columnsMobile: 1,
        columnsTablet: 2,
        columnsDesktopXl: 4,
        maxWidth: '1280px',
    },
};

export const WithCoachIntroductionCards: Story = {
    args: {
        children: <RenderGridWithItems />,
        columnsDesktop: 3,
        columnsMobile: 1,
        columnsTablet: 2,
        columnsDesktopXl: 3,
    },
};
