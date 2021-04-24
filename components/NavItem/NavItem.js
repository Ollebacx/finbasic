import React, { useState } from 'react'

import Link from "next/link";
import className from './NavItem.module.css'

const NavItem = ({ currentRoutePathName, hrefRoute, text }) => {
  const [pageTransitionSide, setPageTransitionSide] = useState([])

  let activeClass = '';
  const routeWithoutSlash = hrefRoute.substring(1) ? hrefRoute.substring(1) : 'home';
  if (routeWithoutSlash !== currentRoutePathName) {
    activeClass = 'opacity-60'
  }
  return (
    <span className={`${className.navItem} ${activeClass}`} onClick={(e) => getTransitionPageSide(e, setPageTransitionSide)}>
      <Link href={{ pathname: hrefRoute, query: pageTransitionSide, }} as={hrefRoute} passHref>
        <a style={{ padding: 10 }} onClick={(e) => scrollToItem(e)}>{text}</a>
      </Link>
    </span >
  )
}

async function getTransitionPageSide(e, setPageTransitionSide) {
  const currentNavItem = document.getElementById('activeModule');
  const currentNavItemLeftPosition = currentNavItem.getBoundingClientRect().x
  const newNavItemLeftPosition = e.target.offsetParent.getBoundingClientRect().x
  console.log({ newNavItemLeftPosition }, { currentNavItemLeftPosition })
  if (newNavItemLeftPosition > currentNavItemLeftPosition) {
    await setPageTransitionSide(['110%', '-110%']) // goes from right to left
  }
  if (newNavItemLeftPosition < currentNavItemLeftPosition) {
    await setPageTransitionSide(['-110%', '110%']) // goes from left to right
  }

}

function scrollToItem(e) {
  const navItemLeftPosition = e.target.offsetParent.getBoundingClientRect().x
  const navItemWidth = e.target.offsetParent.offsetWidth

  const windowLeftPosition = window.pageXOffset;
  const windowWidth = window.innerWidth;

  const navBar = document.getElementById('nav')
  const navBarLeftPosition = navBar.getBoundingClientRect().x
  const header = document.getElementById('header')

  if (navItemLeftPosition + navItemWidth >= windowLeftPosition + windowWidth) {
    // its overflowing right
    header.scroll({ top: 0, left: navBar.offsetWidth, behavior: 'smooth' })
  }

  if (navBarLeftPosition < 0 && navItemLeftPosition < 0) {
    // its overflowing left
    header.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

}

export default NavItem