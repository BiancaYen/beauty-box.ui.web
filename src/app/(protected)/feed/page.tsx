import { FeedSection } from '../../../components/global/sections/feed-grid';

import { feed } from '../../../../public/beauty-breeze/data';

export default function CoachLessonsById() {
    return (
        <FeedSection data={feed} />
    );
}
