import { React, useState, useEffect } from 'react'

const NavBar = (props) => {
    const [showNav, setShowNav] = useState(false)
    const [underlineLeft, setUnderlineLeft] = useState(0)
    const [scene, setScene] = useState('home')

    useEffect(() => {
        showNavEvent()
        sceneChangeEvent()
    })

    const showNavEvent = () => {
        if (props.scroll >= props.vh * 50) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    }
    const sceneChangeEvent = () => {
        var height = props.vh * 100
        var halfVh = height/2
        if (props.scroll < halfVh ){
            setUnderlineLeft(0)
            setScene('home')
        }else if (props.scroll >= halfVh && props.scroll < height+halfVh){
            setUnderlineLeft('20%')
            setScene('aboutMe')
        }else if (props.scroll >= height+halfVh && props.scroll < height*2+halfVh){
            setUnderlineLeft('40%')
            setScene('skill')
        }else if (props.scroll >= height*2+halfVh && props.scroll < height*3+halfVh/2){
            setUnderlineLeft('60%')
            setScene('project')
        }else if (props.scroll >= height*3+halfVh/2 && props.scroll < height*4+halfVh){
            setUnderlineLeft('80%')
            setScene('contact')
        }
    }

    const moveScroll = (move) => {
        document.getElementById('container').scrollTo(0, move)
    }

    return (
        <nav className={showNav ? 'show-nav' : ''}>
            <div id='underline' style={{left: underlineLeft}} />
            <span className={scene==='home'?'color-black':''} onClick={() => moveScroll(0)}>home</span>
            <span className={scene==='aboutMe'?'color-black':''} onClick={() => moveScroll(props.vh * 100)}>about me</span>
            <span className={scene==='skill'?'color-black':''} onClick={() => moveScroll(props.vh * 100 * 2)}>skill</span>
            <span className={scene==='project'?'color-black':''} onClick={() => moveScroll(props.vh * 100 * 3)}>project</span>
            <span className={scene==='contact'?'color-black':''} onClick={() => moveScroll(props.vh * 100 * 4)}>contact</span>
        </nav>
    )
}

export default NavBar