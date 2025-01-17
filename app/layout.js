import { Fugaz_One, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const fugaz = Fugaz_One({
  variable: "--font-fugaz-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "MoodlyApp",
  description: "tracks your mood everyday!!!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex justify-between items-center gap-4">
      <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}>
        Moodly
      </h1>
    </header>
  );
  const footer = (
    <footer className="p-4 sm:p-8 flex justify-center items-center">
      <p className={"textGradient " + fugaz.className}>Created with </p>
      <p>❤</p>
    </footer>
  );
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
