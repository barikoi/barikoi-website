import React from 'react';
import { Profiles } from './Profiles'
import TeamProfile from './Teams/TeamProfile'

const Test = () => {
    const duplicate = Profiles
    duplicate.map(profile => {
        console.log('profile', profile)
        return (
            profile.members.map((prof, index) => {
                return (console.log('prof', index))
            })
        )
    })
    return (
        <React.Fragment>
            <div className='verify about-content wrapper'>
                {
                    duplicate.map(profile => {
                        return (
                            <React.Fragment>
                                <div className='heading'>
                                    <h1>{profile.team}</h1>
                                </div>
                                <div className='section group'>
                                    {
                                        profile.members.map(mem => {
                                            return (
                                                <div className='col span_1_of_3 grid-center'>
                                                    <TeamProfile
                                                        name={mem.name}
                                                        designation={mem.designation}
                                                        linkedin={mem.linkedin}
                                                        imgSrc={mem.imgSrc}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </React.Fragment>
    );
};

export default Test;