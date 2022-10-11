import { React, useEffect } from 'react'

const SvgText01 = () => {
    useEffect(() => {
        const bgGroup = document.querySelector('.svg-group-bg-01')
        const bgPaths = bgGroup.querySelectorAll('path')
        bgPaths.forEach((path, index) => {
            const length = path.getTotalLength()
            path.style.setProperty('--length01', length)
            path.style.setProperty('--delay01', index * 100 + 'ms')
            path.style.setProperty('--duration01', length * 8 + 'ms')
        })

        const mainGroup = document.querySelector('.svg-group-01')
        const mainPaths = mainGroup.querySelectorAll('path')
        mainPaths.forEach((path, index) => {
            const length = path.getTotalLength()
            path.style.setProperty('--length01', length)
            path.style.setProperty('--delay01', index * 100 + 'ms')
            path.style.setProperty('--duration01', length * 8 + 'ms')
        })
    })
    return (
        <>
            <svg className='svg-01' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 321.19 71">
                <defs>
                    <clipPath id='01'>
                        <path d="M21.97,6.6c5.4,0,9.72,4.46,9.72,10.01v9.94c0,5.47-4.32,10.01-9.72,10.01H12.61c-5.33,0-10.01-4.54-10.01-10.01v-9.94c0-5.54,4.68-10.01,10.01-10.01h9.36ZM9.08,42.68h9.29v11.59H52.21v8.64H9.08v-20.23Zm14.04-24.19c0-2.52-1.87-4.18-4.25-4.18h-3.17c-2.52,0-4.61,1.66-4.61,4.18v6.12c0,2.38,2.09,4.25,4.61,4.25h3.17c2.38,0,4.25-1.87,4.25-4.25v-6.12Zm26.71,6.41v17.71h-9.36V3.72h9.36v12.67h7.78v8.5h-7.78Z" />
                    </clipPath>
                    <clipPath id='02'>
                        <path d="M96.06,29.21v8.06H63.37V8.69h9.58V29.21h23.11Zm7.7,13.54c5.11,0,8.86,2.95,8.86,8.14v5.76c0,4.82-3.31,7.7-8.5,7.7h-26.43c-4.68,0-8.64-2.09-8.64-8.42v-5.76c0-5.4,4.75-7.42,9.36-7.42h25.35Zm-21.96,7.49c-2.81,0-3.6,1.01-3.6,2.09v2.88c0,2.09,1.66,2.16,3.6,2.16h19.51c1.66,0,2.88-.43,2.88-1.8v-3.02c0-1.44-1.37-2.3-3.1-2.3h-19.3ZM112.91,3.87V39.01h-9.43v-11.59h-10.66v-7.49h10.66v-4.25h-10.66v-7.49h10.66V3.87h9.43Z" />
                    </clipPath>
                    <clipPath id='03'>
                        <path d="M155.74,18.13h-6.77c2.23,1.73,3.89,4.32,3.89,7.78v10.51c0,5.98-4.46,11.16-10.37,11.16h-8.86c-5.18,0-10.22-4.68-10.22-10.58v-11.09c0-3.46,1.8-6.05,4.32-7.78h-6.19v-7.56h11.59V5.52h10.15v5.04h12.46v7.56Zm-11.59,9.5c0-2.59-1.66-4.68-4.18-4.68h-3.31c-2.52,0-4.82,2.09-4.82,4.68v7.71c0,2.52,2.3,4.03,4.82,4.03h3.31c2.52,0,4.18-1.37,4.18-3.89v-7.85Zm34.2-4.25v9.29h-8.71v31.11h-9.43V3.94h9.43V23.38h8.71Z" />
                    </clipPath>
                    <clipPath id='04'>
                        <path d="M203.98,15.82c0,11.66,3.24,19.01,11.74,24.41v9.58c-2.02-.65-4.03-1.58-5.98-2.81-3.38-2.02-7.7-5.26-11.09-10.37-3.46,5.11-7.78,8.35-11.16,10.37-1.94,1.22-3.96,2.16-5.9,2.81v-9.58c9.58-6.55,12.53-13.39,12.53-25.13V7.97h9.86v7.85Zm23.98-12.03v60.56h-8.35V31.66h-8.14v-10.3h8.14V3.8h8.35Zm13.46,60.56h-8.42V3.8h8.42v60.56Z" />
                    </clipPath>
                    <clipPath id='05'>
                        <path d="M303.85,57.87h-54.51v-9.5h15.12v-15.99h8.78v15.99h7.42v-15.99h7.92v15.99h15.26v9.5Zm-16.06-52.78c4.46,0,11.95,4.03,11.95,10.08v4.97c0,5.47-5.11,9.58-12.02,9.58h-21.6c-6.41,0-11.02-4.32-12.02-9v-6.19c.79-5.54,6.55-9.43,10.94-9.43h22.75Zm-1.73,17.64c2.66,0,4.9-2.3,4.9-4.9s-2.23-4.82-4.9-4.82h-18.51c-2.81,0-4.97,2.23-4.97,4.82s1.87,4.9,4.97,4.9h18.51Z" />
                    </clipPath>
                    <clipPath id='06'>
                        <path d="M310.32,65.36c1.51-1.51,3.02-3.24,3.24-6.12h-3.24v-7.27h8.21v5.98c0,3.67-2.45,7.27-6.12,9.5l-2.09-2.09Z" />
                    </clipPath>
                </defs>

                <g className='svg-group-bg-01'>
                    <path className='path-01' clipPath='url(#01)' d="M17.41,10c-4.42,0-8.15,2.63-10,6-2.64,4.82-1.54,11.33,3,15,4.22,3.41,10.68,3.76,15,0,4.59-3.99,4.52-10.66,2-15-.28-.48-3.6-6-10-6Z" />
                    <path className='path-01' clipPath='url(#01)' d="M44.41,2V44" />
                    <path className='path-01' clipPath='url(#01)' d="M45.41,21h14" />
                    <path className='path-01' clipPath='url(#01)' d="M14.41,41c-.33,8-.67,16-1,24" />
                    <path className='path-01' clipPath='url(#01)' d="M6.41,60c15.33-.33,30.67-.67,46-1" />
                    <path className='path-01' clipPath='url(#02)' d="M67.41,6V39" />
                    <path className='path-01' clipPath='url(#02)' d="M60.91,33.5c11.83,.17,23.67,.33,35.5,.5" />
                    <path className='path-01' clipPath='url(#02)' d="M90.41,12h13" />
                    <path className='path-01' clipPath='url(#02)' d="M89.41,23h14" />
                    <path className='path-01' clipPath='url(#02)' d="M108.41,0V41" />
                    <path className='path-01' clipPath='url(#02)' d="M92.41,46c-2.92-.25-2.27,.34-11,1-4.39,.33-5.07,.22-6,1-2.77,2.32-3.05,8.58,0,12,.06,.06,.18,.2,.36,.37,3.18,3.05,8.81,2.44,15.64,1.63,9.1-1.09,13.68-1.66,15-3,3.26-3.32,4.02-9.27,2-11-1.11-.95-2.34-.01-6,0-4.79,.02-4.99-1.58-10-2Z" />
                    <path className='path-01' clipPath='url(#03)' d="M138.41,1V7" />
                    <path className='path-01' clipPath='url(#03)' d="M121.41,13h35" />
                    <path className='path-01' clipPath='url(#03)' d="M137.64,20.89c-2.46,.1-4.2,.19-6.22,1.11-.9,.41-2.04,.93-3,2-1.94,2.17-1.78,5.11-1.55,8.41,.29,4.19,.52,7.49,2.94,9.21,1.23,.88,2.69,1.05,5.61,1.38,2.52,.29,4.35,.08,5,0,2.18-.28,3.64-.86,4-1,.73-.3,1.32-.53,2-1,.46-.32,2.57-1.76,3-4,.32-1.67-.62-2.06-1-5-.16-1.23,0-1.23,0-4,0-4.18-.02-6.28-1-7-.68-.5-1.15-.14-4,0-2.97,.14-2.89-.23-5.78-.11Z" />
                    <path className='path-01' clipPath='url(#03)' d="M164.41,2c.33,21,.67,42,1,63" />
                    <path className='path-01' clipPath='url(#03)' d="M157.41,28h22" />
                    <path className='path-01' clipPath='url(#04)' d="M199.41,6c.69,6.31,.41,11.44,0,15-.55,4.81-1.43,7.47-2,9-.11,.29-1.29,3.38-3,6-4.46,6.82-12.17,9.98-15,11" />
                    <path className='path-01' clipPath='url(#04)' d="M197.41,26c1.95,2.98,3.71,5.35,5,7,5.43,6.97,8.06,8.49,9,9,2.38,1.28,4.6,1.78,6,2" />
                    <path className='path-01' clipPath='url(#04)' d="M209.41,26h13" />
                    <path className='path-01' clipPath='url(#04)' d="M223.41,1c.33,22,.67,44,1,66" />
                    <path className='path-01' clipPath='url(#04)' d="M237.41,2V67" />
                    <path className='path-01' clipPath='url(#05)' d="M274.41,8c-8.01,.49-12.02,.74-14,3-2.79,3.18-2.81,9.34,0,12,1.36,1.29,2.49,.84,12,1,4.33,.07,8.67-.01,13,0,5.27,.02,6.55,.06,8-1,2.56-1.88,4.22-5.81,3-9-.82-2.13-2.63-3.2-4-4-.97-.57-3.07-1.63-10-2-4.22-.22-7.41-.04-8,0Z" />
                    <path className='path-01' clipPath='url(#05)' d="M268.91,31.5v18" />
                    <path className='path-01' clipPath='url(#05)' d="M284.91,31.5v18" />
                    <path className='path-01' clipPath='url(#05)' d="M248.41,54h57" />
                    <path className='path-01' clipPath='url(#06)' d="M315.41,50c-1.67,6-3.33,12-5,18" />
                </g>

                <g className='svg-group-01'>
                    <path className='path-01' clipPath='url(#01)' d="M17.41,10c-4.42,0-8.15,2.63-10,6-2.64,4.82-1.54,11.33,3,15,4.22,3.41,10.68,3.76,15,0,4.59-3.99,4.52-10.66,2-15-.28-.48-3.6-6-10-6Z" />
                    <path className='path-01' clipPath='url(#01)' d="M44.41,2V44" />
                    <path className='path-01' clipPath='url(#01)' d="M45.41,21h14" />
                    <path className='path-01' clipPath='url(#01)' d="M14.41,41c-.33,8-.67,16-1,24" />
                    <path className='path-01' clipPath='url(#01)' d="M6.41,60c15.33-.33,30.67-.67,46-1" />
                    <path className='path-01' clipPath='url(#02)' d="M67.41,6V39" />
                    <path className='path-01' clipPath='url(#02)' d="M60.91,33.5c11.83,.17,23.67,.33,35.5,.5" />
                    <path className='path-01' clipPath='url(#02)' d="M90.41,12h13" />
                    <path className='path-01' clipPath='url(#02)' d="M89.41,23h14" />
                    <path className='path-01' clipPath='url(#02)' d="M108.41,0V41" />
                    <path className='path-01' clipPath='url(#02)' d="M92.41,46c-2.92-.25-2.27,.34-11,1-4.39,.33-5.07,.22-6,1-2.77,2.32-3.05,8.58,0,12,.06,.06,.18,.2,.36,.37,3.18,3.05,8.81,2.44,15.64,1.63,9.1-1.09,13.68-1.66,15-3,3.26-3.32,4.02-9.27,2-11-1.11-.95-2.34-.01-6,0-4.79,.02-4.99-1.58-10-2Z" />
                    <path className='path-01' clipPath='url(#03)' d="M138.41,1V7" />
                    <path className='path-01' clipPath='url(#03)' d="M121.41,13h35" />
                    <path className='path-01' clipPath='url(#03)' d="M137.64,20.89c-2.46,.1-4.2,.19-6.22,1.11-.9,.41-2.04,.93-3,2-1.94,2.17-1.78,5.11-1.55,8.41,.29,4.19,.52,7.49,2.94,9.21,1.23,.88,2.69,1.05,5.61,1.38,2.52,.29,4.35,.08,5,0,2.18-.28,3.64-.86,4-1,.73-.3,1.32-.53,2-1,.46-.32,2.57-1.76,3-4,.32-1.67-.62-2.06-1-5-.16-1.23,0-1.23,0-4,0-4.18-.02-6.28-1-7-.68-.5-1.15-.14-4,0-2.97,.14-2.89-.23-5.78-.11Z" />
                    <path className='path-01' clipPath='url(#03)' d="M164.41,2c.33,21,.67,42,1,63" />
                    <path className='path-01' clipPath='url(#03)' d="M157.41,28h22" />
                    <path className='path-01' clipPath='url(#04)' d="M199.41,6c.69,6.31,.41,11.44,0,15-.55,4.81-1.43,7.47-2,9-.11,.29-1.29,3.38-3,6-4.46,6.82-12.17,9.98-15,11" />
                    <path className='path-01' clipPath='url(#04)' d="M197.41,26c1.95,2.98,3.71,5.35,5,7,5.43,6.97,8.06,8.49,9,9,2.38,1.28,4.6,1.78,6,2" />
                    <path className='path-01' clipPath='url(#04)' d="M209.41,26h13" />
                    <path className='path-01' clipPath='url(#04)' d="M223.41,1c.33,22,.67,44,1,66" />
                    <path className='path-01' clipPath='url(#04)' d="M237.41,2V67" />
                    <path className='path-01' clipPath='url(#05)' d="M274.41,8c-8.01,.49-12.02,.74-14,3-2.79,3.18-2.81,9.34,0,12,1.36,1.29,2.49,.84,12,1,4.33,.07,8.67-.01,13,0,5.27,.02,6.55,.06,8-1,2.56-1.88,4.22-5.81,3-9-.82-2.13-2.63-3.2-4-4-.97-.57-3.07-1.63-10-2-4.22-.22-7.41-.04-8,0Z" />
                    <path className='path-01' clipPath='url(#05)' d="M268.91,31.5v18" />
                    <path className='path-01' clipPath='url(#05)' d="M284.91,31.5v18" />
                    <path className='path-01' clipPath='url(#05)' d="M248.41,54h57" />
                    <path className='path-01' clipPath='url(#06)' d="M315.41,50c-1.67,6-3.33,12-5,18" />
                </g>
            </svg>
        </>
    )
}

export default SvgText01