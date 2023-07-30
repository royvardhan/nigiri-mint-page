import "./globals.css";
import { Open_Sans } from "next/font/google";
import Providers from "./providors";
const openSans = Open_Sans({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          overflow: "hidden",
        }}
        className={openSans.className}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
