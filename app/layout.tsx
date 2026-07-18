import { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import { Outfit, Space_Grotesk } from 'next/font/google';
import 'styles/main.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700']
});

const body = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800']
});

const title = 'L-O-OL | Focused AI products';
const description =
  'L-O-OL brings focused AI products together in one place, with each product built for a specific customer workflow.';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description
  }
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-[#f7f9fb]">
        <Navbar />
        <main
          id="skip"
          className="min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]"
        >
          {children}
        </main>
        <Footer />
        <Suspense>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
