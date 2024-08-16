import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

// Icons
import { StarIcon } from '@/components/icons';

// Types
interface RatingProps {
    classes?: { wrapper: string },
    copy: string,
    stars: 0 | 1 | 2 | 3 | 4 | 5,
}

export const Rating: FC<RatingProps> = ({
    classes, copy, stars,
}) => (
    <div className={twMerge('flex flex-col-reverse gap-[0.313rem] md:flex-row md:gap-1', classes?.wrapper || '')}>
        <span className="flex gap-0.5">
            {Array.from(Array(5).keys()).map((starKey) => (
                <StarIcon key={starKey} fill={stars > starKey ? 'var(--color-ratingPrimary)' : 'var(--color-ratingSecondary)'} />
            ))}
        </span>
        <span className="text-systemDefault-default text-min leading-3 md:font-bold">
            {copy}
        </span>
    </div>
);
