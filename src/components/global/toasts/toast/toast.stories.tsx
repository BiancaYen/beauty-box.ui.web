import { Meta, StoryObj } from '@storybook/react';

// Components
import { Toast } from '@/components/global/toasts/toast';

const meta: Meta<typeof Toast> = {
    title: 'Components/Toasts/Toast',
    component: Toast,
    parameters: {
        backgrounds: {
            default: 'grey',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const BookmarkError: Story = {
    args: {
        children: (
            <span>
                Oops! That bookmark didn&apos;t save.
                <br />
                Try again!
            </span>
        ),
        type: 'bookmark',
        onClose: () => {
            // eslint-disable-next-line no-console
            console.log('Close');
        },
    },
};

export const Error: Story = {
    args: {
        children: 'Oops! This is a general error message notification!',
        type: 'error',
        onClose: () => {
            // eslint-disable-next-line no-console
            console.log('Close');
        },
    },
};

export const Success: Story = {
    args: {
        children: 'Yay! This is general success message notification!',
        onClose: () => {
            // eslint-disable-next-line no-console
            console.log('Close');
        },
    },
};
