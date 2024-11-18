import { Rubik } from "next/font/google";
import "./globals.css";

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"],
})

export const metadata = {
  title: "Exchangle. | Simple Free Currency Convertor App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      </head>
      <body
        className={`${rubik.className} antialiased flex items-center justify-center min-h-screen bg-[#18191a]`}
      >
        {children}
      </body>
    </html>
  );
}
