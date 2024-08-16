import React, { FC } from 'react';

// Components
import { FeaturedHeroCarousel } from '@/components/global/carousels/featured-hero-carousel';

// Types
import { FeaturedHeroCardProps } from '@/components/global/cards/featured/featured-hero-card';

interface FeaturedHeroSectionProps {
    data: Omit<FeaturedHeroCardProps, 'onClick'>[],
}

export const FeaturedHeroSection: FC<FeaturedHeroSectionProps> = ({ data }) => (
    <section>
        <FeaturedHeroCarousel
            data={data}
        />
    </section>
);

