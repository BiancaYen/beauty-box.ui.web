import type { Meta, StoryObj } from '@storybook/react';

// Components
import { AddToHomeScreen } from '@/components/global/add-to-home-screen';
import { ToastProvider } from '@/components/providers/toast-provider';

const meta: Meta<typeof AddToHomeScreen> = {
    title: 'Components/Add to Home Screen',
    component: AddToHomeScreen,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof AddToHomeScreen>;

export const Primary: Story = {};

export const HomeScreenWithToast: Story = {
    render: () => (
        <div>
            <AddToHomeScreen />
            <ToastProvider />
        </div>
    ),
};
