import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

function Header() {
  return (
    <>
    <div className="lg:hidden">
      <MobileHeader/>
    </div>

    <div className="hidden lg:block">
      <DesktopHeader/>
    </div>
    </>
  )
}

export default Header