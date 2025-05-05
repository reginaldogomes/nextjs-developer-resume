import SocialLinks from '@/components/SocialLinks'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="flex flex-col justify-center items-center bg-primary-foreground p-16">
      <div className="flex flex-col justify-center w-full items-center lg:w-[1024px] gap-8">
        <SocialLinks />
        <p className="text-center text-black">
          © {currentYear} Reginaldo Gomes. Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
