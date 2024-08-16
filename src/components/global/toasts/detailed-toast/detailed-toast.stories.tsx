import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { toast } from 'react-hot-toast';

// Components
import { Button } from '@/components/global/button';
import { DetailedToast } from '@/components/global/toasts/detailed-toast';
import { Toast } from '@/components/global/toasts/toast';
import { ToastProvider } from '@/components/providers/toast-provider';

// Icons
import { InstallIcon } from '@/components/icons';

const meta: Meta<typeof DetailedToast> = {
    argTypes: { onActionClick: { action: 'clicked' } },
    title: 'Components/Toasts/Detailed Toast',
    component: DetailedToast,
    parameters: {
        backgrounds: {
            default: 'grey',
        },
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof DetailedToast>;

export const JoinNowToast: Story = {
    args: {
        actionCopy: 'Join',
        heading: 'Master Stream',
        hasRating: true,
    },
    parameters: {
        controls: {
            exclude: /onActionClick|actionIcon/g,
        },
    },
};

export const InstallToast: Story = {
    args: {
        actionCopy: 'Install',
        actionIcon: InstallIcon,
        copy: 'Install this program on to your computer for shorter load times and added convenience!',
        heading: 'Install Master Stream 🥇',
        hasRating: false,
    },
    parameters: {
        controls: {
            exclude: /onActionClick|actionIcon/g,
        },
    },
};

export const Playground: Story = {
    render: () => {
        const onCustomToastClickHandler = () => {
            toast(() => (
                <DetailedToast
                    actionCopy="Action"
                    actionIcon={InstallIcon}
                    copy="Copy Text"
                    hasRating
                    heading="DetailedToast Heading"
                    onActionClick={() => { }}
                />
            ));
        };

        const errorToastHandler = () => {
            toast((t) => (
                <Toast
                    type="error"
                    onClose={() => {
                        toast.dismiss(t.id);
                    }}
                >
                    Oops! This is a general error message notification!
                </Toast>
            ));
        };

        const successToastHandler = () => {
            toast((t) => (
                <Toast
                    onClose={() => {
                        toast.dismiss(t.id);
                    }}
                >
                    Yay! This is general success message notification!
                </Toast>
            ));
        };

        const bookmarkErrorToastHandler = () => {
            toast((t) => (
                <Toast
                    type="bookmark"
                    onClose={() => {
                        toast.dismiss(t.id);
                    }}
                >
                    <span>
                        Oops! That bookmark didn&apos;t save.
                        <br />
                        Try again!
                    </span>
                </Toast>
            ));
        };

        return (
            <div>
                <Button
                    classes={{ wrapper: 'mb-2' }}
                    variant="secondary"
                    onClick={successToastHandler}
                >
                    Success Toast
                </Button>
                <Button
                    classes={{ wrapper: 'mb-2' }}
                    variant="secondary"
                    onClick={bookmarkErrorToastHandler}
                >
                    BookmarkError Toast
                </Button>
                <Button
                    classes={{ wrapper: 'mb-2' }}
                    variant="secondary"
                    onClick={errorToastHandler}
                >
                    Error Toast
                </Button>
                <Button variant="secondary" onClick={onCustomToastClickHandler}>Custom DetailedToast</Button>
                <ToastProvider />
            </div>
        );
    },
};
