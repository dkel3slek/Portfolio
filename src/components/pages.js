import { React, useState, useEffect} from 'react'
import NavBar from './navBar'
import Home from './home/home'
import AboutMe from './aboutMe/aboutMe'

const Pages = () => {
  const [scroll, setScroll] = useState(0)
  const [vh, setVh] = useState(document.documentElement.clientHeight*0.01)
  const [navBarHeight, setNavBarHeight] = useState(0)

  useEffect(() => {
    document.getElementById('container').addEventListener('scroll', handleScroll)
    window.addEventListener('resize', resizeEvent)
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    return () => {
      document.getElementById('container').removeEventListener('scroll', handleScroll)
      document.getElementById('container').addEventListener('resize', resizeEvent)
    }
  })
  useEffect(()=>{
    setNavBarHeight(document.getElementById('navBar').offsetHeight)
  },[navBarHeight])
  
  const resizeEvent = () => {
    setVh(document.documentElement.clientHeight * 0.01)
    setNavBarHeight(document.getElementById('navBar').offsetHeight)
  }

  const handleScroll = () => {
    var scrollTop = document.getElementById('container').scrollTop
    setScroll(scrollTop)
  }

  
  return (
    <>
      <NavBar
        vh={vh}
        scroll={scroll}
      />
      <div id='container' className={"container"}>
        <div id='home' className="page bg-home">
          <Home vh={vh}/>
        </div>
        <div id='about' className="page bg-about-me">
          <AboutMe 
            vh={vh}
            scroll={scroll}
            navBarHeight={navBarHeight}
          />
        </div>
        <div id='skill' className="page bg-pink">skill</div>
        <div id='project' className="page bg-purple">project</div>
        <div id='contact' className="page bg-contact">contact</div>
      </div>
    </>
  )
}
export default Pages