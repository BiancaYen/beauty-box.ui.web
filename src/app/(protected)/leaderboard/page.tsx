import { LeaderboardSection } from '@/components/global/sections/leaderboard-section';

import { leaderboard, rank } from '../../../../public/beauty-breeze/data';

export default function CoachLessonsById() {
    return (
        <LeaderboardSection data={{ leaderboard, rank }} />
    );
}
