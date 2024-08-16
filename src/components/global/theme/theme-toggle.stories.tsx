import React, { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';

// Components
import { Button } from '@/components/global/button';

export default {
    title: 'Theme Toggle',
};

const ThemeToggleStory = () => {
    const [theme, setTheme] = useState('base');

    useEffect(() => {
        const initialTheme = localStorage.getItem('storybookTheme') || 'base';
        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'base' ? 'white-label' : 'base';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('storybookTheme', newTheme);
        action('Theme Toggled')(newTheme);
    };

    return (
        <div>
            <Button
                variant="tertiary"
                onClick={toggleTheme}
            >
                Active Theme:
                {' '}
                {theme}
            </Button>
        </div>
    );
};

export const ThemeToggle = () => <ThemeToggleStory />;
