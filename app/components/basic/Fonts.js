import { Inter, Noto_Sans_Tamil} from "next/font/google";

export const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
  });
  
export const tamil = Noto_Sans_Tamil({
    weight: '400',
    subsets: ['tamil'],
    variable: '--font-tamil'
  });