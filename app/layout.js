import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] });
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Providers } from './providers';

export const metadata = {
    title: 'Infr | Database for your memories',
    description: 'Machine readable catalog of everything about you.',
};

const GTM_ID = process.env.GTM_ID;

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning>
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
            </Script>

            <body className={inter.className} suppressHydrationWarning={true}>
                <Providers>
                    <div className="dark:bg-gray-900">
                        <div className="mx-auto flex min-h-screen flex-col px-4">
                            <Header />
                            <main className="flex-1">{children}</main>
                        </div>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
