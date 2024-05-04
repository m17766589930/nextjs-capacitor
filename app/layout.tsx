import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

import 'tailwindcss/tailwind.css';

import './globals.css';
import '../styles/global.css';
import '../styles/variables.css';

import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

/**
 * initialScale: 1：指定了视口的初始缩放比例为 1。这表示页面在加载时将以原始比例显示，不进行任何缩放。
 * width: 'device-width'：指定了视口的宽度为设备的宽度。这意味着页面的宽度将根据设备的屏幕宽度进行自适应，以确保页面内容在不同设备上显示的一致性。
 * viewportFit: 'cover'：指定了视口的适应模式为覆盖（cover）。这意味着页面的内容将根据视口的宽高比例进行缩放，以确保整个视口被填满，且不会发生变形。这通常用于确保移动设备上的网页内容在屏幕上完整显示，且保持良好的视觉效果。
 */
export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>

    </html>
  );
}
