import type { Meta, StoryObj } from '@storybook/react';
import classNames from 'classnames';

// Globals
import '../../../app/globals.css';

// Components
import { SkeletonLoader } from '@/components/global/skeleton-loaders';

const meta: Meta<typeof SkeletonLoader> = {
    title: 'Components/Skeleton Loaders',
    component: SkeletonLoader,
};

export default meta;

type Story = StoryObj<typeof SkeletonLoader>;

const baseClass = 'overflow-hidden bg-gradient-to-br from-default-white to-system-default-tint-3 rounded-2xl';

const RenderSkeletonHorizontalCard = () => (
    <div className={classNames(baseClass, 'w-fit')}>
        <SkeletonLoader height="8.75rem" width="15.625rem" />
    </div>
);

const RenderSkeletonVerticalCard = () => (
    <div className={classNames(baseClass, 'w-fit')}>
        <SkeletonLoader height="15.563rem" width="11.25rem" />
    </div>
);

export const HorizontalCard: Story = {
    render: RenderSkeletonHorizontalCard,
};

export const VerticalCard: Story = {
    render: RenderSkeletonVerticalCard,
};

