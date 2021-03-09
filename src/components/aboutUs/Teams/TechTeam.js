import React, { useState } from 'react';
import { Profiles } from '../Profiles'
import TeamProfile from './TeamProfile'
const Members = [];
const TechTeam = () => {
    // const [test, setTest] = useState([]);
    
    let title
    const profiles = Profiles
    profiles.map(profile => {
        

        if (profile.team === 'Tech Team') {
            title = profile.team
            // if (profile.members.length % 2 === 0) {
            //     size = 4
            // } else {
            //     size = 3
            // }
            while (profile.members.length > 0) {
                Members.push(profile.members.splice(0, 3))
            }
        }
        
    })
    return (
        <div className='verify about-content wrapper'>
            <div className='heading'>
                <h1>{ title }</h1>
            </div>           
                {  
                    Members.map(member => {
                        return (
                            <div className={`${member.length === 1 ? 'bkoi-verify-page-1' : member.length === 2 ? 'bkoi-verify-page-2' : 'bkoi-verify-page'}`}>
                                {
                                    member.map(mem => {
                                        return (
                                            <TeamProfile
                                                name={mem.name}
                                                designation={mem.designation}
                                                type={mem.type}
                                                linkedin={mem.linkedin}
                                                imgSrc={mem.imgSrc}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
        </div>
    );
};

export default TechTeam;