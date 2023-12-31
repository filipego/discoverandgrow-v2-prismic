import { createClient } from '@/prismicio'

import Link from 'next/link'
import Container from './Container'
import Nav from './Nav'

export default async function Header() {

    const client = createClient()

    const settings = await client.getSingle("settings")

    return (
        <header className='header'>
            <Container classes='flex-space-between p-tb-2'>
                <Link className="logo" href="/">{settings.data.site_title}</Link>
                <Nav settings={settings} />
            </Container>
        </header>
    )
}








