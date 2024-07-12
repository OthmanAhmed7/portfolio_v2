import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Othman Ahmed",
  description:
    "Aspiring front-end developer with a solid foundation in HTML, CSS, JavaScript, React, Next.js, Tailwind, and TypeScript. Proven ability to manage projects, solve complex problems, and deliver high-quality results. Achieving an average score of 91% in performance, 91% in accessibility, 98% in best practices, and 94% in SEO in my latest projects.  Passionate about creating intuitive and dynamic user experiences that meet client's needs and industry standards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
