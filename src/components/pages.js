import { React, useState, useEffect} from 'react'
import NavBar from './navBar'

const Pages = () => {
  const [scroll, setScroll] = useState(0)
  const [vh, setVh] = useState(document.documentElement.clientHeight*0.01)

  useEffect(() => {
    document.getElementById('container').addEventListener('scroll', handleScroll)
    window.addEventListener('resize', resizeEvent)
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    consoleTest()
    return () => {
      document.getElementById('container').removeEventListener('scroll', handleScroll)
      document.getElementById('container').addEventListener('resize', resizeEvent)
    }
  })
  
  const resizeEvent = () => {
    setVh(document.documentElement.clientHeight * 0.01)
  }

  const handleScroll = () => {
    var scrollTop = document.getElementById('container').scrollTop
    setScroll(scrollTop)
  }

  const consoleTest = () => {
    var height = vh*100
    if (scroll===0){
      console.log('home')
    }else if(scroll === height){
      console.log('about')
    }else if(scroll === height*2){
      console.log('skill')
    }else if(scroll === height*3){
      console.log('project')
    }else {
      console.log('scroll~~')
    }
  }
  
  return (
    <>
      <NavBar
        moveToHome={0}
        moveToAbout={vh*100}
        moveToSkill={vh*100*2}
        moveToProject={vh*100*3}
      />
      <div id='container' className="container">
        <div id='home' className="page bg-yellow" data-anchor="home">home</div>
        <div id='about' className="page bg-blue" data-anchor="about">about</div>
        <div id='skill' className="page bg-pink" data-anchor="skill">skill</div>
        <div id='project' className="page bg-green" data-anchor="project">project</div>
      </div>
    </>
  )
}
export default Pages