// For next.js font optimization

// ** Font Imports
import { Open_Sans, Passion_One } from "next/font/google";

// General font
export const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

// Logo font
export const passionOne = Passion_One({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});
