import './styles/globals.scss'
import { createClient, repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'

import Header from './components/Header'
import Footer from './components/Footer'


export async function generateMetadata() {
  const client = createClient()

  const settings = await client.getSingle("settings")

  return {
    title: settings.data.site_title || "Discover and Grow",
    description: settings.data.meta_description || "Discover and Grow",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
