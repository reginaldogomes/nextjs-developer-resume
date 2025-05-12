import Breadcrumb from './Breadcrumb'
import { Metadata } from 'next'

interface PageHeadProps {
  title: string
  description?: string
}

export const generateMetadata = ({
  title,
  description,
}: PageHeadProps): Metadata => ({
  title,
  description,
})

const PageHead: React.FC<PageHeadProps> = ({ title, description }) => (
  <header className="w-full p-8 text-center shadow-md bg-accent/5 text-white">
    <Breadcrumb />
    <h1 className="text-3xl font-bold">{title}</h1>
    {description && <p className="mt-2 text-lg">{description}</p>}
  </header>
)

export default PageHead
