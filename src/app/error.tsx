'use client';

// Components
import { Error500Card } from '@/components/global/cards/error';
import { SectionError } from '@/components/global/sections/layouts/section-error';

export default function Error({ reset }: {
    reset: () => void,
}) {
    return (
        <SectionError>
            <Error500Card
                backgroundImageSrc="/images/storybook/error-bg.png"
                buttonCopy="Try Again"
                copy="<span>Something didn't quite click.</span> <span>Try again?</span>"
                heading="Oops!"
                onClick={reset}
            />
        </SectionError>
    );
}
