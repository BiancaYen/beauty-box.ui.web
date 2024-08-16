import { LooksSection } from '@/components/global/sections/looks-section';
import {
    categories,
    looks,
    wardrobeCategories,
    wishlist,
} from '../../../../public/beauty-breeze/data';

export default function Looks() {
    return (
        <LooksSection
            data={{
                categories,
                looks,
                wardrobeCategories,
                wishlist,
            }}
        />
    );
}
