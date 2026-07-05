import { Vazirmatn, Unbounded, DM_Sans } from "next/font/google";

// ✅ Primary Farsi Font (Google Fonts)
export const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

// ✅ Display/Heading Font
export const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-unbounded",
  display: "swap",
  preload: false, // Lazy load for performance
});

// ✅ English Body Font
export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: false,
});

// ✅ Font Utility Functions
export const getFontClass = (
  type: "farsi" | "english" | "display" = "farsi",
) => {
  const fontMap = {
    farsi: "font-farsi",
    english: "font-english",
    display: "font-display",
  };
  return fontMap[type];
};

// ✅ Font Configuration for SEO
export const fontConfig = {
  primary: {
    name: "Vazirmatn",
    family: "Vazirmatn",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    fallback: ["IRANSans", "Tahoma", "Arial", "sans-serif"],
  },
  display: {
    name: "Unbounded",
    family: "Unbounded",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    fallback: ["Vazirmatn", "sans-serif"],
  },
  english: {
    name: "DM Sans",
    family: "DM Sans",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    fallback: ["Inter", "Segoe UI", "sans-serif"],
  },
};
