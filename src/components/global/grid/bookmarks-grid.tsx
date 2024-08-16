import { FC } from 'react';

// Components
import {
    ContentCardWithProfileAvatar,
    ContentCardWithProfileAvatarProps,
} from '@/components/global/cards/content/content-card-with-profile-avatar';
import { Grid } from '@/components/global/grid';

export interface BookmarksGridProps {
    cards: ContentCardWithProfileAvatarProps[],
}

export const BookmarksGrid: FC<BookmarksGridProps> = ({ cards }) => (
    <Grid className="w-full">
        {cards
            .map((card) => (
                <ContentCardWithProfileAvatar
                    classes={{ wrapper: 'w-full', contentCard: 'w-full' }}
                    key={card.id}
                    {...card}
                />
            ))}
    </Grid>
);
