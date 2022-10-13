import { React } from 'react'
import SvgText01 from './svgText01'
import SvgText02 from './svgText02'
import SvgText03 from './svgText03'
import SvgText04 from './svgText04'


const Home = (props) => {
    return (
        <div className='home-content'>
            <div className='home-text'>
                <SvgText01 />
                <SvgText02 />
            </div>
            <div className='home-text'>
                <SvgText03/>
                <SvgText04/>
            </div>
            <div className='home-btn-area'>
                <div className='home-btn' onClick={() => document.getElementById('container').scrollTo(0, props.vh * 100)}>
                    더 보기
                </div>
            </div>
        </div>
    )
}

export default Home