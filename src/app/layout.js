import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Headless CMS Blog",
  description: "Created by Julian Majdani",
}

const Rootlayout = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
)

export default Rootlayout
