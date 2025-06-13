const logoData = {
  name: 'Reginaldo Gomes',
  description: 'Desenvolvedor Front-end',
}

const Logo: React.FC = () => (
  <div className="text-left">
    <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-accent leading-snug">
      {logoData.name}
    </h1>
    <p className="text-sm sm:text-base text-muted tracking-wide">
      {logoData.description}
    </p>
  </div>
)

export default Logo
