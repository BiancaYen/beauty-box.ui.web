import { FeedSection } from '../../../components/global/sections/feed-grid';

import { explore } from '../../../../public/beauty-breeze/data';

const getData = () => ({
    explore,
});

export default function CoachLessonsById() {
    const { explore } = getData();

    return (
        <div>
            test
        </div>
    );
}
