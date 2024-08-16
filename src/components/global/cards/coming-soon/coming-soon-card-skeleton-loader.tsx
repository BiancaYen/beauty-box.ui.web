import { FC } from 'react';

// Components
import { SkeletonLoader } from '@/components/global/skeleton-loaders';

export const ComingSoonCardSkeletonLoader: FC = () => (
    <div className="relative flex h-[15.563rem] w-[9.875rem] flex-col items-center gap-2 overflow-hidden rounded-2xl bg-default-white p-1 pb-3">
        <div className="mb-2 h-[11.875rem] w-[9.375rem] overflow-hidden rounded-2xl bg-gradient-to-br from-default-white to-system-default-tint-3">
            <SkeletonLoader width="inherit" height="inherit" />
        </div>
    </div>
);
