import React from 'react'
import { Link } from 'react-router-dom'

const NavBarProduct = props => {
    return (
        // <div className='display-col'>
            // <div className='display-row'>
                // <div className='nav-product'>
                    <Link to={props.link}>
                        <div className='padding-5'>
                        <div className='display-row'>
                            <div className='nav-image'>
                                <img src={require('../../assets/api.svg')} alt='' />
                            </div>
                            <div className='display-col padding-12'>
                                <div className='font-w-400'>
                                    {props.title}
                                </div>
                                <p className='font-12'>
                                    {props.details}
                                </p>
                            </div>
                        </div>
                        </div>
                    </Link>
                // </div>
            // </div>
        // </div>
    )
}

export default NavBarProduct