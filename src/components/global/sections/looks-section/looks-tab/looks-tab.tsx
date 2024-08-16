'use client';

import React from 'react';
import Link from 'next/link';

// Component
import { Grid } from '@/components/global/grid';
import { LooksCard } from '@/components/global/cards/looks-card';

// Types
import { SubmissionCard, SubmissionItem } from '@/components/global/cards/submission-card';

interface LooksSectionProps {
    data: SubmissionItem[],
}

export const LooksTab = ({ data }: LooksSectionProps) => (
    <Grid className="w-full px-5 py-2" columnsMobile={2} gapY={6}>
        {data.map((item) => (
            <LooksCard
                key={item.id}
                {...item}
            />
        ))}
    </Grid>
);
