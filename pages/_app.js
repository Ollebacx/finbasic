import '../styles/globals.css'
import MainLayout from '../layouts/MainLayout'
import { PageTransition } from 'next-page-transitions'
function MyApp({ Component, pageProps, router }) {
  // TO DO: create a router query object instead of an array in NavItem
  // const { enter, exit } = router.query;
  const enter = router.query[0]
  const exit = router.query[1]
  return (
    <>
      <MainLayout>
        <PageTransition timeout={1200} classNames="page-transition">
          <Component {...pageProps} key={router.route}/>
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            transform: translateX(${enter});
          }
          .page-transition-enter-active {
            transition: transform 1s;
            transform: translateX(0%);
          }
          .page-transition-exit {
            transform: translateX(0%);

          }
          .page-transition-exit-active {
            transform: translate(${exit});
            transition: transform 1s;
          }
        `}</style>
      </MainLayout>
    </>
  )
}

export default MyApp
