import { React, useState, useEffect } from 'react'

const AboutMe = (props) => {
    const [comment, setComment] = useState('')
    const [count, setCount] = useState(0)
    const text = '스스로 실패라고 생각하지 않는 다면,\n결코 실패로 끝나지 않는다.'
    document.documentElement.style.setProperty('--nav-bar-height', `${props.navBarHeight}px`)

    useEffect(() => {
        if (props.scroll === props.vh * 100) {
            const typingInterval = setInterval(() => {
                setComment(comment + text[count])
                setCount(count + 1)
            }, 100)
            if (count === text.length) {
                clearInterval(typingInterval)
            } 
            return () => {
                clearInterval(typingInterval)
            }
        }
        
    })

    return (
        <div className='about-me-area'>
            <div className='about-me-left'>
                <img id='myImg' className='my-img' src='img/aboutMeImg.jpeg' alt='내 사진' />
                <div className='comment-area'>
                    <span className='comment'>{comment}<span className='typing-blink'>|</span></span>
                </div>
            </div>
            <div className='about-me-right'>

            </div>
        </div>
    )
}

export default AboutMe