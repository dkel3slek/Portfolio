import React from 'react'

const NavBar = (props) => {
    const moveScroll = (move) => {
        document.getElementById('container').scrollTo(0, move)
    }
    return (
        <nav>
                <span onClick={() => moveScroll(props.moveToHome)}>home</span>
                <span onClick={() => moveScroll(props.moveToAbout)}>about</span>
                <span onClick={() => moveScroll(props.moveToSkill)}>skill</span>
                <span onClick={() => moveScroll(props.moveToProject)}>project</span>
        </nav>
    )
}

export default NavBar