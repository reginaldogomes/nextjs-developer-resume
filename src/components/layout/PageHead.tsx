import Breadcrumb from './Breadcrumb'

interface PageHeadProps {
  title: string
  description?: string
}

const PageHead: React.FC<PageHeadProps> = ({ title, description }) => (
  <div className="w-full p-8 text-center shadow-md bg-accent/5 text-white">
    {/* Título */}
    <h1 className="text-3xl font-bold">{title}</h1>

    {/* Descrição */}
    {description && <p className="mt-2 text-lg">{description}</p>}
  </div>
)

export default PageHead
