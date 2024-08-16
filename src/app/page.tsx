import { BookmarkSection } from '@/components/global/sections/bookmarks-section';
import { ExploreSection } from '@/components/global/sections/explore-section';
import { WishListSection } from '@/components/global/sections/wish-list-section';
import { SubmissionsSection } from '@/components/global/sections/submissions-section';

import {
    explore,
    feed,
    submissions,
    wishlist,
} from '../../public/beauty-breeze/data';

export default function Index() {
    return (
        <div>
            <SubmissionsSection data={submissions} />
            <WishListSection data={wishlist} />
            <BookmarkSection data={feed} />
            <ExploreSection data={explore} />
        </div>
    );
}
