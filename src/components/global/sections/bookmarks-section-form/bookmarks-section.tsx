'use client';

import {
    FC, useCallback, useContext, useDeferredValue, useEffect, useState,
} from 'react';

// Components
import { BookmarksGrid, BookmarksGridProps } from '@/components/global/grid/bookmarks-grid';
import { ContentCardWithProfileAvatarProps } from '@/components/global/cards/content/content-card-with-profile-avatar';
import {
    TabControl, TabControlProps, TabItem,
} from '@/components/global/tabs';
import { SearchContext } from '@/components/providers/search-provider';

// Types
interface BookmarkTabPaneProps extends Pick<TabItem, 'index' | 'tab'>, BookmarksGridProps {}

export interface BookmarksSectionProps extends Pick<TabControlProps, 'heading'> {
    tabPanes: BookmarkTabPaneProps[],
}

export const BookmarksSection: FC<BookmarksSectionProps> = ({ tabPanes, heading }) => {
    const { query } = useContext(SearchContext);
    const [items, setItems] = useState<TabItem[]>([]);

    const deferredQuery = useDeferredValue(query || '');

    const hasContent = useCallback((content: ContentCardWithProfileAvatarProps) => {
        const criteria = deferredQuery.toLowerCase();

        return content.lessonName?.toLowerCase().includes(criteria)
            || content.courseName?.toLowerCase().includes(criteria)
            || content.coach.toLowerCase().includes(criteria)
            || (content.category && content.category.toLowerCase().includes(criteria));
    }, [deferredQuery]);

    useEffect(() => {
        const results = tabPanes
            .map((tabPane: BookmarkTabPaneProps) => (
                {
                    component: BookmarksGrid({
                        cards: tabPane.cards.filter((card) => hasContent(card)),
                    }),
                    index: tabPane.index,
                    tab: tabPane.tab,
                }
            ));

        setItems(results);
    }, [deferredQuery, hasContent, tabPanes]);

    return (
        <TabControl
            heading={heading}
            items={items}
            showSearch
        />
    );
};
