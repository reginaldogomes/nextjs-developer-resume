const logoData = {
  name: 'Reginaldo Gomes',
  description: 'Desenvolvedor Front-end',
}

const Logo: React.FC = () => (
  <div className="text-center sm:text-left">
    <h1 className="text-2xl sm:text-4xl font-extrabold text-accent leading-tight">
      {logoData.name}
    </h1>
    <p className="text-sm sm:text-base text-gray-600 tracking-wide">
      {logoData.description}
    </p>
  </div>
)

export default Logo
