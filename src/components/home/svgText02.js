import { React, useEffect } from 'react'

const SvgText02 = () => {
    useEffect(() => {
        const mainGroup = document.querySelector('.svg-group-02')
        const mainPaths = mainGroup.querySelectorAll('path')
        mainPaths.forEach((path, index) => {
            const length = path.getTotalLength()
            path.style.setProperty('--length02', length)
            path.style.setProperty('--delay02', index * 40 + 1900 + 'ms')
            path.style.setProperty('--duration02', length * 2 + 'ms')
        })
    })

    return (
        <>
            <svg className='svg-02' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.1 67">
                <defs>
                    <clipPath id='07'>
                        <path d="M1.95,49.59H56.31v8.79H1.95v-8.79ZM50.55,9.63v8.5H7.49V9.63H50.55Zm-10.44,22.54h11.88v7.7H8.21v-7.7h9.43l-5.18-11.09h9.36l4.82,10.73h5.26l3.31-10.73h9.29l-4.39,11.09Z" />
                    </clipPath>
                    <clipPath id='08'>
                        <path d="M117.66,34.9v8.35H62.07v-8.35h23.62v-3.31h-17.5V15.1h32.98v-3.67h-32.98V5.53h43.06V21.87h-33.77v2.95h33.77v6.77h-16.35v3.31h22.75Zm-49.68,30.6v-19.44h8.86v10.23h36.51v9.22h-45.36Z" />
                    </clipPath>
                    <clipPath id='09'>
                        <path d="M123.41,51.03h54.36v8.79h-54.36v-8.79Zm46.37-34.92h-39.53V7.97h39.53v8.14Zm.79,19.59v8.14h-40.32V21.44h39.53v8.14h-30.53v6.12h31.32Z" />
                    </clipPath>
                    <clipPath id='10'>
                        <path d="M216.51,5.53h7.99V43.83h-7.99v-15.41h-5.18c-.22,5.47-5.18,9.79-10.37,9.79h-6.41c-5.18,0-10.66-4.39-10.66-9.94v-9.94c0-5.47,5.47-9.86,10.66-9.86h6.41c5.26,0,10.37,4.39,10.37,9.86v1.3h5.18V5.53Zm-13.68,14.83c0-2.52-1.01-4.25-3.53-4.25h-3.1c-2.52,0-3.89,1.73-3.89,4.25v5.98c0,2.38,1.37,4.25,3.89,4.25h3.1c2.52,0,3.53-1.87,3.53-4.25v-5.98Zm-7.99,44.36v-20.38h9v11.88h33.63v8.5h-42.63ZM237.03,5.53V43.83h-8.14V5.53h8.14Z" />
                    </clipPath>
                    <clipPath id='11'>
                        <path d="M244.95,58.16v-8.57h54.58v8.57h-54.58Zm15.48-25.42h32.69v8.78h-42.27V11.21h41.98v8.86h-32.4v12.67Z" />
                    </clipPath>
                </defs>

                <g className='svg-group-02'>
                    <path clipPath='url(#07)' d="M3.5,13.5H54.5" />
                    <path clipPath='url(#07)' d="M18,20c-.14,.69-.27,1.77,0,3,.38,1.74,1.26,2.5,2,4,.51,1.04,1.06,2.65,1,5" />
                    <path clipPath='url(#07)' d="M39,20c-.52,2.68-.91,5.69-1,9-.03,1.03-.03,2.03,0,3" />
                    <path clipPath='url(#07)' d="M6,36H53" />
                    <path clipPath='url(#07)' d="M0,54H57" />
                    <path clipPath='url(#08)' d="M67,6h46" />
                    <path clipPath='url(#08)' d="M106,3V23" />
                    <path clipPath='url(#08)' d="M113,18h-47" />
                    <path clipPath='url(#08)' d="M72,14v18" />
                    <path clipPath='url(#08)' d="M65,27h49" />
                    <path clipPath='url(#08)' d="M90,29v6" />
                    <path clipPath='url(#08)' d="M61,39h58" />
                    <path clipPath='url(#08)' d="M72,45v22" />
                    <path clipPath='url(#08)' d="M65,61h50" />
                    <path clipPath='url(#09)' d="M129,12h42" />
                    <path clipPath='url(#09)' d="M128,25h43" />
                    <path clipPath='url(#09)' d="M135,19v26" />
                    <path clipPath='url(#09)' d="M128,39h44" />
                    <path clipPath='url(#09)' d="M121,56h58" />
                    <path clipPath='url(#10)' d="M197,12c-2.44,.34-4.11,1.42-5,2-1.58,1.04-3.15,2.08-4,4-.66,1.49-.45,3.34,0,7,.34,2.78,.51,4.16,1,5,1.63,2.78,5.15,4.02,8,4,1.13,0,4.64-.23,7-3,1.8-2.11,1.89-4.47,2-7,.07-1.61,.06-6.64-3-10-1.4-1.53-2.7-1.92-3-2-1.11-.3-2.02-.14-3,0Z" />
                    <path clipPath='url(#10)' d="M209,24h8" />
                    <path clipPath='url(#10)' d="M220,4V45" />
                    <path clipPath='url(#10)' d="M233,4V45" />
                    <path clipPath='url(#10)' d="M199,43v24" />
                    <path clipPath='url(#10)' d="M193,61h46" />
                    <path clipPath='url(#11)' d="M248,15h46" />
                    <path clipPath='url(#11)' d="M255,8V43" />
                    <path clipPath='url(#11)' d="M247,38h48" />
                    <path clipPath='url(#11)' d="M243,54c19.33,.33,38.67,.67,58,1" />
                </g>
            </svg>
        </>
    )
}

export default SvgText02