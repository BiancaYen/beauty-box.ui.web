import type { Meta, StoryObj } from '@storybook/react';

// Components
import { OptInWidget } from '@/components/global/opt-in-widget';

// Images
import { MasterStreamLogo } from '../../../../public/images/logo';

const meta: Meta<typeof OptInWidget> = {
    title: 'Components/Opt In Widget',
    component: OptInWidget,
    decorators: [
        (Story) => (
            <div>
                <p>Only visible on bottom of mobile view</p>
                <Story />
            </div>
        ),
    ],
};

type Story = StoryObj<typeof OptInWidget>;

export const JoinNow: Story = {
    args: {
        actionCopy: 'Join Master Stream',
        actionLink: '/',
        copy: 'Exclusive classes taught by real-world experts & coaches. <em>Learn. Grow. Achieve.</em> ',
        heading: 'Master Stream',
        imageAlt: 'Master Stream Logo',
        imageSrc: MasterStreamLogo,
    },
};

export default meta;
