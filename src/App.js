import React,{Suspense, lazy} from 'react'
// import RouteComp from './Project_6/Component/RouteComp'
// import PageFooter from './Project_6/Component/PageFooter'
// import HeadNavbar from './Project_6/Component/HeadNavbar'

const LazyRoute = lazy(()=>import('./Project_6/Component/RouteComp'))

const App = () => {
  return (
    <>
    {/* <HeadNavbar/> */}
    <Suspense fallback={<div><h1>Loading ...</h1></div>}>
      <LazyRoute/>
    </Suspense>
    {/* <PageFooter/> */}
    </>
  )
}

export default App