import { Poppins } from 'next/font/google';

// Fonts
export const poppins = Poppins({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['400', '600', '700', '900'],
});
