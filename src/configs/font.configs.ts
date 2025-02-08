// For next.js font optimization

// ** Font Imports
import { Open_Sans } from "next/font/google";

// General font
export const openSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});
