import type { Meta, StoryObj } from '@storybook/react';
import { SwiperSlide } from 'swiper/react';

// Components
import { Carousel } from '@/components/global/carousel';

const meta: Meta<typeof Carousel> = {
    title: 'Components/Carousel',
    component: Carousel,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
    args: {
        hasPaginationMobile: false,
        children: (
            <div>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
            </div>
        ),
    },
};

export const Slider: Story = {
    render: () => (
        <Carousel hasFreeScroll>
            <SwiperSlide className="!w-64">Slide 1</SwiperSlide>
            <SwiperSlide className="!w-64">Slide 2</SwiperSlide>
            <SwiperSlide className="!w-64">Slide 3</SwiperSlide>
            <SwiperSlide className="!w-64">Slide 4</SwiperSlide>
            <SwiperSlide className="!w-64">Slide 5</SwiperSlide>
            <SwiperSlide className="!w-64">Slide 6</SwiperSlide>
        </Carousel>
    ),
};

export const Pagination: Story = {
    render: () => (
        <div>
            <p>Devs: important to set height on (classes:wrapper) and not in wrapper div - for absolutely positioned bullets</p>
            <Carousel
                classes={{
                    wrapper: '!h-80 bg-primary-tint-1',
                }}
                hasPaginationMobile

            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Carousel>
            <p>You can toggle screen width to see navigation arrows on desktop vs mobile</p>
        </div>
    ),
};
