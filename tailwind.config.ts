import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './stories/**/*.{js,ts,jsx,tsx}',
        './stories/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            animation: {
                enter: 'fadeInRight 300ms ease-out',
                'bounce-once': 'bounceOnce 750ms ease-out',
                'fade-in': 'fadeIn 1000ms ease-in',
                'fade-out': 'fadeOut 500ms ease-in forwards',
                leave: 'fadeOutLeft 300ms ease-in forwards',
                shimmer: 'shimmer 1.5s linear infinite',
            },
            aspectRatio: {
                /* golden ratio */
                portrait: '1/1.618',
            },
            backgroundColor: {
                'primary-default-opacity-50': 'rgba(var(--color-primary-default-rgb), 0.5)',
                'primary-default-opacity-80': 'rgba(var(--color-primary-default-rgb), 0.8)',
                'primary-tint-1-opacity-80': 'rgba(var(--color-primary-tint-1-rgb), 0.8)',
                'secondary-default-opacity-80': 'rgba(var(--color-secondary-default-rgb), 0.8)',
            },
            backgroundImage: {
                'header-navigation': 'url("/public/images/icons/nav-background.svg")',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'lg-neutral-dark-to-top': 'var(--gradient-lg-neutral-dark-to-top)',
                'lg-neutral-light-114deg': 'var(--gradient-lg-neutral-light-114deg)',
                'lg-neutral-light-134deg': 'var(--gradient-lg-neutral-light-134deg)',
                'lg-primary-dark-135deg': 'var(--gradient-lg-primary-dark-135deg)',
                'lg-primary-light-135deg': 'var(--gradient-lg-primary-light-135deg)',
                'linear-primary-primary-tint': 'linear-gradient(to right, var(--color-primary-shade-1) 0%, var(--color-primary-default) 100%)',
                'vibrant-prompt': 'linear-gradient(var(--color-primary-default), var(--color-primary-shade-1))',
                'vibrant-prompt-reversed': 'linear-gradient(to right, var(--color-primary-shade-1) 0%, var(--color-primary-default) 100%)',
                rank: 'linear-gradient(to right, var(--color-secondary-default), var(--color-secondary-default))',
            },
            boxShadow: {
                button: '0 5px 10px 0 rgba(0, 0, 0, 0.1)',
                'filter-desktop': '-6px 6px 12px 0 rgba(29, 32, 130, 0.1)',
                'filter-mobile': '-5px 5px 10px 0 rgba(29, 32, 130, 0.1)',
                dropdown: '0 10px 15px 0 rgba(0, 0, 0, 0.05)',
                modal: '-10px 10px 12px 0 rgba(130, 147, 182, 0.5)',
                'nav-link': '0 10px 10px 0 rgba(0, 0, 0, 0.15)',
                'nav-header': '10px 0 15px 0 rgba(0, 0, 0, 0.1)',
                toast: '-10px 10px 12px 0 rgba(0, 0, 0, 0.1)',
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                'footer-popup': '-3px -5px 5px rgb(0 0 0 / 0.25)',
                'card-1x': '0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%)',
                'card-2x': '0 3px 3px -2px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%)',
                'card-3x': '0 4px 4px -3px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%)',
                'card-4x': '0 5px 5px -4px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%)',
                'card-5x': '0 6px 6px -5px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%)',
            },
            fontFamily: {
                primary: ['var(--font-poppins)'],
                secondary: ['var(--font-lobster)'],
            },
            fontSize: {
                min: '0.5rem', // *8px
                xxs: '0.625rem', // *10px
            },
            gridTemplateColumns: {
                x1: 'repeat(1, minmax(0, 1fr))',
                x2: 'repeat(2, minmax(0, 1fr))',
                x3: 'repeat(3, minmax(0, 1fr))',
                x4: 'repeat(4, minmax(0, 1fr))',
                x5: 'repeat(5, minmax(0, 1fr))',
            },
            keyframes: {
                bounceOnce: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(0.5rem)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                fadeInRight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                fadeIn: {
                    '0%': {
                        background: 'var(--color-primaryDefault-tint-2)',
                    },
                    '50%': {
                        background: 'transparent',
                    },
                    '100%': {
                        background: 'var(--color-primaryDefault-tint-2)',
                    },
                },
                fadeOut: {
                    '0%': {
                        opacity: '1',
                    },
                    '100%': {
                        opacity: '0',
                    },
                },
                fadeOutLeft: {
                    '0%': {
                        opacity: '1',
                    },
                    '100%': {
                        opacity: '0',
                    },
                },
                shimmer: {
                    from: {
                        left: '-300%',
                    },
                    to: {
                        left: '300%',
                    },
                },
            },
            maxWidth: {
                footer: '11.75rem',
                'content-container': '1100px',
            },
            screens: {
                xs: '330px',
                tabsFit: '410px',
            },
            skew: {
                neg45: '-45deg',
            },
        },
        colors: {
            current: 'currentColor',
            'default-black': 'var(--color-default-black)',
            'default-white': 'rgb(var(--color-default-whiteRGB) / <alpha-value>)',
            exceptions: {
                cardTag: 'var(--color-exception-cardTag)',
            },
            primary: {
                default: 'var(--color-primary-default)',
                tint: {
                    1: 'var(--color-primary-tint-1)',
                    2: 'var(--color-primary-tint-2)',
                },
                shade: {
                    1: 'var(--color-primary-shade-1)',
                },
            },
            secondary: {
                default: 'var(--color-secondary-default)',
            },
            'system-default': {
                default: 'var(--color-system-default)',
                tint: {
                    1: 'var(--color-system-default-tint-1)',
                    2: 'var(--color-system-default-tint-2)',
                    3: 'var(--color-system-default-tint-3)',
                },
            },
            tertiary: {
                default: 'var(--color-tertiary-default)',
            },
            transparent: 'transparent',
        },
    },
};

export default config;
