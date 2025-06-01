import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: '--font-roboto',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: "Sematic Web | Suluk Sujinah",
  description: "Web semantic dengan data manuscript jawa suluk sujinah dalam bentuk rdf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${roboto.variable} ${inter.variable}`}>
      <body
        className={`antialiased`}
      >
        <ThemeProvider>
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
