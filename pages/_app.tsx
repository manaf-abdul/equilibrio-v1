import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono, fontSerif } from "@/config/fonts";
import { usePerformanceOptimization, useResourcePreloading } from "@/components/PerformanceOptimization";
import "@/styles/globals.css";
import "@/styles/lightbox.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Performance optimizations
  usePerformanceOptimization();
  useResourcePreloading();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider defaultTheme="white">
        <div className={`${fontSans.variable} ${fontMono.variable} ${fontSerif.variable} font-sans antialiased`}>
          <Component {...pageProps} />
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  );
}


export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
  serif: fontSerif.style.fontFamily,
};
