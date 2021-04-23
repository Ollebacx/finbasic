import Link from "next/link";
import className from './NavBar.module.css'

const NavItem = ({ currentRoutePathName, route, text }) => {
  let activeClass = '';
  const routeWithoutSlash = route.substring(1) ? route.substring(1) : 'home';
  if (routeWithoutSlash !== currentRoutePathName) {
    activeClass = 'opacity-60'
  }

  return (
    <span className={`${className.navItem} ${activeClass}`} onClick={(e)=> scrollToItem(e)}>
      <Link href={route}>{text}</Link>
    </span>
  )
}

function scrollToItem(e) {
console.log(e)
const header = document.getElementById('header');
e.target.scrollIntoView({inline: "center", behavior: "smooth"});
console.log(header.scrollLeft)
}

export default NavItem