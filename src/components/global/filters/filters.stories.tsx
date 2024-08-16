import { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Components
import {
    Filters,
    FilterOptionsProps,
    FiltersProps,
} from '@/components/global/filters';
import { SectionHeading2 } from '@/components/global/section-heading-2';

const mockedCoachData = [
    { id: 1, name: 'Jodi Bieber', tags: ['creativity', 'humanity', 'media'], topic: 'Photography' },
    { id: 2, name: 'Tshepo "The Jean Master Maker"', tags: ['creativity', 'design'], topic: 'Fashion Design' },
    { id: 3, name: 'Santie Botha', tags: ['business', 'entrepreneurship'], topic: 'Business' },
    { id: 4, name: 'Yvonne Chaka Chaka', tags: ['creativity', 'media', 'performance', 'humanity'], topic: 'Music & TV' },
    { id: 5, name: 'Joey Rasdien', tags: ['creativity', 'media', 'performance', 'humanity'], topic: 'Comedy' },
    { id: 6, name: 'Maps Maponyane', tags: ['creativity', 'entrepreneurship', 'performance', 'media'], topic: 'Public Speaking' },
    { id: 7, name: 'The Lazy Makoti', tags: ['creativity', 'marketing'], topic: 'Food' },
    { id: 8, name: 'Lucas Radebe', tags: ['fitness', 'media', 'sports'], topic: 'Sportsmanship' },
    { id: 9, name: 'Ryan Sandes', tags: ['fitness', 'media', 'sports'], topic: 'Sports' },
    { id: 6, name: 'Albie & Lwando', tags: ['humanity'], topic: 'No Topic' },
];

const options: FilterOptionsProps[] = [
    { id: 'business', copy: 'Business' },
    { id: 'communication', copy: 'Communication' },
    { id: 'creativity', copy: 'Creativity' },
    { id: 'entrepreneurship', copy: 'Entrepreneurship' },
    { id: 'fitness', copy: 'Fitness' },
    { id: 'humanity', copy: 'Humanity' },
    { id: 'lifestyle', copy: 'Lifestyle' },
    { id: 'marketing', copy: 'Marketing' },
    { id: 'media', copy: 'Media' },
    { id: 'music', copy: 'Music' },
    { id: 'performance', copy: 'Performance' },
    { id: 'sports', copy: 'Sports' },
];

const meta: Meta<typeof Filters> = {
    title: 'Components/Filters',
    component: Filters,
    parameters: {
        backgrounds: {
            default: 'grey',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Filters>;

export const Primary: Story = {
    args: {
        options,
        onSubmit: (activeIdList) => {
            // eslint-disable-next-line no-console
            console.log('Submitted IDs:', activeIdList);
        },
    },
};

const FiltersWithData = (props: FiltersProps) => {
    const [data, setData] = useState(mockedCoachData);
    const [isLoading, setIsLoading] = useState(true);
    const [isFetching, setIsFetching] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (activeTags: string[]) => {
        setIsFetching(true);
        const filteredData = data.filter(({ tags }) => activeTags.some((value) => tags.includes(value)));
        setTimeout(() => {
            setIsFetching(false);
            setData(filteredData);
            setIsSubmitted(true);
        }, 1500);
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setData(mockedCoachData);
    };

    useEffect(() => {
        setTimeout(() => { setIsLoading(false); }, 1000);
    }, []);

    return (
        <div
            className="mx-auto"
            style={{ maxWidth: '440px' }}
        >
            <SectionHeading2 className="mb-7" heading={!isSubmitted ? 'What interests you?' : 'Found your coaches!'} />
            {isSubmitted && (
                <div className="flex flex-col items-center">
                    {data.length
                        ? (
                            <div>
                                {data.map(({
                                    id,
                                    name,
                                    tags,
                                    topic,
                                }) => (
                                    <div className="text-xs" key={id}>{`Name: ${name}, Topic: ${topic}, tags: ${tags.join(', ')}`}</div>
                                ))}
                            </div>
                        )
                        : (
                            <div>
                                No Coaches found for the selected categories
                            </div>
                        )}
                </div>
            )}
            <Filters
                {...props}
                isFetching={isFetching}
                isLoading={isLoading}
                isSubmitted={isSubmitted}
                onReset={handleReset}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export const Integration: Story = {
    args: {
        options,
    },
    render: (args) => (
        <FiltersWithData {...args} />
    ),
};
