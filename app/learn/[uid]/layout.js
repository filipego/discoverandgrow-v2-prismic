import { createClient, repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'





export default function LearnLayout({ children }) {
    return (

        <body className='learn'>
            {children}
            <PrismicPreview repositoryName={repositoryName} />
        </body>

    )
}
