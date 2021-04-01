import React, { useState } from 'react'

const NavBarProduct = props => {
    // const [isHovered, setIsHovered] = useState(false);

    // const mouseEnter = (e) => {
    //     setIsHovered(true)
    //   }
    //   const mouseLeave = () => {
    //       setIsHovered(false)
    //   }
    return (
        <a
            href={props.link}
            // onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
        >
            <div className='padding-5' id={props.id}>
                <div
                    className='display-row-center'
                    // style={{ width: '12rem', height: '3rem', }}
                >
                    <div className='nav-image'>
                        <img
                            src={props.imgSrc}
                            alt=''
                        />
                    </div>
                    <div
                        className='display-col padding-12'
                        // style={{ whiteSpace: 'pre-wrap' }}
                    >
                        <div className='font-w-400'>
                            {props.title}
                        </div>
                        {/* {
                            isHovered &&
                            <p className='font-12' style={{ lineHeight: 1, }}>
                                {props.details}
                            </p>
                        } */}
                        <p className='font-12' style={{ lineHeight: 1, }}>
                                {props.details}
                        </p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default NavBarProduct