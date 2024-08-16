import type { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';

// Components
import { Footer } from '@/components/global/footer/footer';
import { Header } from '@/components/global/header';
import { SessionProvider } from '@/components/providers/session-provider';

// Fonts
import { lobster, poppins } from '@/components/font';

// Styles
import './globals.css';

// Env
const googleAnalyticsMeasurementId = process.env.GA_MEASUREMENT_ID;

// Meta Data
export const metadata: Metadata = {
    title: 'Product',
    description: 'Product Description',
};

// TODO: Add theme switch logic ["white-label"]
const theme = 'base';

export default function RootLayout({ children }: {
    children: React.ReactNode,
}) {
    return (
        <html
            className={`${poppins.variable} font-primary ${lobster.variable}`}
            data-theme={theme}
            lang="en"
        >
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsMeasurementId}`}
            />
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', '${googleAnalyticsMeasurementId}');
                `}
            </Script>
            <body className="h-full min-h-screen w-full overflow-x-hidden overflow-y-visible">
                <SessionProvider>
                    <div className="flex w-full flex-col justify-between overflow-x-hidden bg-[#fcfcfc] pt-12">
                        <Header
                            // TODO: Update below
                            isAuthenticated={false}
                        />
                        <div className="mt-7 justify-start pb-[10rem]">
                            {children}
                        </div>
                        <Footer />
                    </div>
                </SessionProvider>
            </body>
        </html>
    );
}
