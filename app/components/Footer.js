import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Container from './Container'

export default async function Footer() {

    const client = createClient()

    const settings = await client.getSingle("settings")

    return (
        <footer className='footer'>
            <Container classes='flex-space-between pb-0'>
                Footer
            </Container>

        </footer>
    )
}