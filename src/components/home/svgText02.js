import { React, useEffect } from 'react'

const SvgText02 = () => {
    useEffect(() => {
        const mainGroup = document.querySelector('.svg-group-02')
        const mainPaths = mainGroup.querySelectorAll('path')
        mainPaths.forEach((path, index) => {
            const length = path.getTotalLength()
            path.style.setProperty('--length02', length)
            path.style.setProperty('--delay02', index * 80 + 2000 + 'ms')
            path.style.setProperty('--duration02', length * 10 + 'ms')
        })
    })

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.5 67">
                <defs>
                    <clipPath id='07'>
                        <path d="M2.38,47.1H56.75v8.78H2.38v-8.78ZM50.98,7.14V15.64H7.92V7.14H50.98Zm-10.44,22.54h11.88v7.7H8.65v-7.7h9.43l-5.18-11.09h9.36l4.82,10.73h5.26l3.31-10.73h9.29l-4.39,11.09Z" />
                    </clipPath>
                    <clipPath id='08'>
                        <path d="M118.09,32.41v8.35H62.5v-8.35h23.62v-3.31h-17.5V12.61h32.98v-3.67h-32.98V3.04h43.06V19.38h-33.77v2.95h33.77v6.77h-16.35v3.31h22.75Zm-49.68,30.6v-19.44h8.86v10.22h36.51v9.22h-45.36Z" />
                    </clipPath>
                    <clipPath id='09'>
                        <path d="M123.84,48.54h54.36v8.78h-54.36v-8.78ZM170.21,13.62h-39.53V5.48h39.53V13.62Zm.79,19.59v8.14h-40.32V18.95h39.53v8.14h-30.53v6.12h31.32Z" />
                    </clipPath>
                    <clipPath id='10'>
                        <path d="M216.94,3.04h7.99V41.34h-7.99v-15.41h-5.18c-.22,5.47-5.18,9.79-10.37,9.79h-6.41c-5.18,0-10.66-4.39-10.66-9.94V15.85c0-5.47,5.47-9.86,10.66-9.86h6.41c5.26,0,10.37,4.39,10.37,9.86v1.3h5.18V3.04Zm-13.68,14.83c0-2.52-1.01-4.25-3.53-4.25h-3.1c-2.52,0-3.89,1.73-3.89,4.25v5.98c0,2.38,1.37,4.25,3.89,4.25h3.1c2.52,0,3.53-1.87,3.53-4.25v-5.98Zm-7.99,44.36v-20.38h9v11.88h33.63v8.5h-42.63ZM237.46,3.04V41.34h-8.14V3.04h8.14Z" />
                    </clipPath>
                    <clipPath id='11'>
                        <path d="M245.38,55.67v-8.57h54.58v8.57h-54.58Zm15.48-25.42h32.69v8.78h-42.27V8.72h41.98v8.86h-32.4v12.67Z" />
                    </clipPath>
                </defs>

                <g className='svg-group-02'>
                    <path className='path-02' clipPath='url(#07)' d="M7.5,11H52.5" />
                    <path className='path-02' clipPath='url(#07)' d="M17.5,18c.04,1.78,.38,3.45,1,5,.68,1.69,1.32,2.32,2,4,.62,1.55,.96,3.22,1,5" />
                    <path className='path-02' clipPath='url(#07)' d="M40.5,18c.02,2.72-.51,4.69-1,6-.36,.95-.75,1.7-1,3-.31,1.64-.17,3.05,0,4" />
                    <path className='path-02' clipPath='url(#07)' d="M8,33.5c15.5-.17,31-.33,46.5-.5" />
                    <path className='path-02' clipPath='url(#07)' d="M0,51.5H58" />
                    <path className='path-02' clipPath='url(#08)' d="M67,5.5c33.85,2.42,42.77,1.6,43,0,.13-.89-2.97-2.71-4-2-.71,.49-.38,2.15,0,4,.58,2.8,1.39,4.21,2,6,.53,1.53,1.09,3.85,1,7" />
                    <path className='path-02' clipPath='url(#08)' d="M67,15.5h40" />
                    <path className='path-02' clipPath='url(#08)' d="M74,13.5c1.28,8.99,.89,11.73,0,12-.82,.25-2.27-1.56-2-2,.34-.56,3.26,1.37,8,2,2.08,.27,3.23,.13,6,0h27" />
                    <path className='path-02' clipPath='url(#08)' d="M90.5,26v8" />
                    <path className='path-02' clipPath='url(#08)' d="M60.5,37h59" />
                    <path className='path-02' clipPath='url(#08)' d="M72.5,43c.34,14.45-.28,17.92-1,18-.58,.06-1.64-2.05-1-3,.95-1.4,4.88,.84,11,1,3.63,.09,6.04-.6,8-1,4.61-.95,12.45-1.49,26.5,.5" />
                    <path className='path-02' clipPath='url(#09)' d="M129.5,9h42" />
                    <path className='path-02' clipPath='url(#09)' d="M135,18.5c.44,18.75-.25,22.93-1,23-.6,.06-1.8-2.42-1-4,1.26-2.51,7.05-1.8,15-1,5.43,.55,13.27,1.29,23,2" />
                    <path className='path-02' clipPath='url(#09)' d="M171.5,23c-14.33,.33-28.67,.67-43,1" />
                    <path className='path-02' clipPath='url(#09)' d="M123.5,53h55" />
                    <path className='path-02' clipPath='url(#10)' d="M198,9.5c-2.31,.22-3.5,.34-5,1-.81,.36-1.95,.87-3,2-1.32,1.42-1.74,2.97-2,4-.6,2.37-.29,4.3,0,6,.45,2.6,.73,4.28,2,6,1.7,2.31,4.7,4.03,8,4,3.62-.03,6.03-2.15,7-3,.75-.65,2.15-1.91,3-4,.56-1.38,.4-1.93,0-9-.18-3.11-.2-4.03-1-5-1.11-1.35-2.81-1.73-4-2-1.48-.33-2.65-.22-5,0Z" />
                    <path className='path-02' clipPath='url(#10)' d="M212,20.5h7" />
                    <path className='path-02' clipPath='url(#10)' d="M221,1.5V42.5" />
                    <path className='path-02' clipPath='url(#10)' d="M233,0V43.5" />
                    <path className='path-02' clipPath='url(#10)' d="M200,40.5c-.1,2.38-.17,5.83,0,10,.27,6.55,.93,9.67,0,10-1.03,.36-3.67-2.88-3-4,.73-1.22,4.82,1.01,12,2,4.22,.58,5.54,.19,15,0,3.56-.07,8.7-.12,15,0" />
                    <path className='path-02' clipPath='url(#11)' d="M248.5,12h47" />
                    <path className='path-02' clipPath='url(#11)' d="M255,13.5v9c0,1.33,0,2.67,0,4-.01,3.54-.05,3.49,0,4,.36,3.64,2.24,5.85,2,6-.25,.16-2.5-2.03-2-3,.58-1.13,4.47,.3,10,1,3.85,.49,5.1,.19,13,0,4-.1,9.8-.16,17,0" />
                    <path className='path-02' clipPath='url(#11)' d="M243.5,52h58" />
                </g>
            </svg>
        </>
    )
}

export default SvgText02