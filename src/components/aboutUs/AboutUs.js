import React from 'react';
import Navbar from '../layout/Navbar'
import TeamProfile from './TeamProfile'
import { Profiles } from './Profiles'

const AboutUs = () => {
    const profiles = Profiles
    console.log('profile: ', Profiles.map(profile => {
        return profile.members.map((prof, index) => {
            
                // if(index === '3') {
                //     console.log('break')
                // } else console.log('cont')
            console.log('index: ', index)
            if (index === 2) {
                console.log('checked 2')
            }
               
        })
    }))
    return (
        <React.Fragment>
            <Navbar />
            {
                profiles && 
                profiles.map(profile => { 
                    return (
                        <div className=' wrapper'>
                                 <div className='heading'>
                                     <h1>{ profile.team }</h1>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    {
                                    profile.members.map((prof, index) => {
                                            if (index === 3) {
                                                return (
                                                    <br />
                                                )
                                            }
                                            return (
                                                <div>
                                                    <TeamProfile
                                                        name={prof.name}
                                                        designation={prof.designation}
                                                        imgSrc={prof.imgSrc}
                                                    /> 
                                                </div>
                                        ) 
                                        })
                                    }
                                </div>
                             </div>
                    )
                })
            }
        </React.Fragment>
    );
};

export default AboutUs;