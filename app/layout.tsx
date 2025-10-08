import Providers from '@/providers';
import {Public_Sans} from "next/font/google";
import './globals.css';

const publicSans = Public_Sans({
    variable: "--font-public-sans",
    subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={` ${publicSans} antialiased`}>
            <Providers>{children}</Providers>
      </body>
    </html>
  );
}
