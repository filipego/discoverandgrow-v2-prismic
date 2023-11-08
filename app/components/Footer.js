import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Container from './Container'
import { PrismicRichText } from '@prismicio/react'
import Badge from './Badge'
import NewsletterForm from './Forms/NewsletterForm'

export default async function Footer() {

    const client = createClient()

    const settings = await client.getSingle("settings")

    return (
        <footer className='footer'>
            <Container classes='flex-space-between pb-0 footer__bio__social'>
                <div className="footer__bio">
                    <Link href="/">{settings.data.site_title}</Link>
                    <PrismicRichText field={settings.data.footer_text} />
                </div>
                <div className='newsletter'>
                    <h2>Subscribe to our newsletter and keep up with our latest news</h2>
                    <NewsletterForm FORMSPARK_FORM_ID="nB9uoqJ5" />
                </div>
                <ul className='footer__social'>
                    {settings.data.social && settings.data.social.map(({ label, link }) => (
                        <li key={label}>
                            <PrismicNextLink field={link}>{label}</PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </Container>

            <Container classes='flex-space-between pb-0 footer__copyright'>
                <p>© DISCOVER AND GROW, INC.</p>
                <Badge />
                <p>ALL RIGHT RESERVED</p>
            </Container>

        </footer>
    )
}