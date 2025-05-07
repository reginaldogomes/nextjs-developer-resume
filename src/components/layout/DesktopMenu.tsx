import MenuLinks from './MenuLinks'
import Image from 'next/image'

const DesktopMenu = () => (
  <div className="fixed top-0 left-0 w-full bg-black bg-opacity-90 flex items-center justify-between p-4 px-10">
    {/* Logo */}
    <div className="flex items-center">
      <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
    </div>

    {/* Links do Menu */}
    <MenuLinks />
  </div>
)

export default DesktopMenu
