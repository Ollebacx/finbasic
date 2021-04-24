import { useRouter } from 'next/router'
import className from './NavBar.module.css'
import { NavItem } from '../index'

const Routing = {
  home: '/',
  budget: '/budget',
  monthly: '/monthly',
  analysis: '/analysis',
  categories: '/categories',
}

const NavBar = (params) => {
  const router = useRouter();
  const currentRoutePathName = router.asPath.substring(1) ? router.asPath.substring(1) : 'home'

  return (
    <header id='header' className={className.header}>
      <nav id='nav' className={className.nav}>
        <NavItem hrefRoute={Routing.home} text='Cuentas' currentRoutePathName={currentRoutePathName} />
        <NavItem hrefRoute={Routing.budget} text='Presupuesto' currentRoutePathName={currentRoutePathName} />
        <NavItem hrefRoute={Routing.monthly} text='Mensual' currentRoutePathName={currentRoutePathName} />
        <NavItem hrefRoute={Routing.analysis} text='Análisis' currentRoutePathName={currentRoutePathName} />
        <NavItem hrefRoute={Routing.categories} text='Categorías' currentRoutePathName={currentRoutePathName} />
        <div id='activeModule' className={`${className.animation} ${className[`start-${currentRoutePathName}`]}`}></div>
      </nav>
    </header>
  )
}

export default NavBar;