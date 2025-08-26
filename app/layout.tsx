import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGroteskSans = Space_Grotesk({
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Sahigara | Portfolio",
  description:
    "Portfolio of Ahmed Sahigara — Information Technology student at MIT Manipal. Focused on system design and API development with experience in Node.js and Java (JVM).",
  keywords: [
    "Ahmed Sahigara",
    "Portfolio",
    "Information Technology",
    "MIT Manipal",
    "System Design",
    "API Development",
    "Node.js",
    "Java",
    "Software Development",
  ],
  authors: [{ name: "Ahmed Sahigara" }],
  openGraph: {
    type: "website",
    title: "Ahmed Sahigara | Portfolio",
    description:
      "Information Technology Student, MIT Manipal | Developing solutions focused on System Design and APIs development | Intermediate in Node.js and Java (JVM)",
    siteName: "Ahmed Sahigara's Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Ahmed Sahigara | Portfolio",
    description:
      "IT Student at MIT Manipal | Focused on System Design and API Development | Skilled in Node.js and Java (JVM).",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGroteskSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
