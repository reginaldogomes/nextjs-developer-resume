import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

const Navbar = () => (
  <>
    <div className="block md:hidden">
      <MobileMenu />
    </div>
    <div className="hidden md:block">
      <DesktopMenu />
    </div>
  </>
)

export default Navbar
