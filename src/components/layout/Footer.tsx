import SocialLinks from '@/components/SocialLinks'

const footerData = {
  year: new Date().getFullYear(),
  owner: 'Reginaldo Gomes',
  message: 'Todos os direitos reservados',
}

export const Footer = () => (
  <footer className="flex flex-col justify-center items-center bg-accent p-8">
    <div className="flex flex-col items-center w-full max-w-screen-lg gap-6">
      <SocialLinks />
      <p className="text-center text-black">
        © {footerData.year} {footerData.owner}. {footerData.message}
      </p>
    </div>
  </footer>
)

export default Footer
