'use client';

import { useRouter } from 'next/navigation';

// Components
import { Error404Card } from '@/components/global/cards/error';
import { SectionError } from '@/components/global/sections/layouts/section-error';

export default function NotFound() {
    const router = useRouter();

    return (
        <SectionError>
            <Error404Card
                backgroundImageSrc="/images/storybook/error-bg.png"
                buttonCopy="Go Home"
                copy="<span>Something didn't quite click.</span> <span>Please tap ‘Go Home’.</span>"
                heading="Oops!"
                onClick={() => router.push('/')}
            />
        </SectionError>
    );
}
