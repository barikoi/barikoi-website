import React from 'react';

const TeamProfile = ({
    name,
    founder,
    designation,
    type,
    linkedin,
    imgSrc
}) => {
    return (
        <div style={{ ...container}}>
            <div style={{ ...image}}>
                <img style={{borderRadius: '50%'}} width='100%' src={imgSrc} alt = ''/>
            </div>
            <div style={{ ...details }}>
                <a style={{...aTag}} href={linkedin} target='_blank' rel='noopener noreferrer'>
                    <h2 style={{ fontSize: '18px' }}>
                        {name}
                    </h2>
                </a>
                <p style={{ fontWeight: 'lighter' }}>{founder}</p>
                <span style={{ fontWeight: 'lighter' }}>{designation}</span>
                <p style={{ fontWeight: 'lighter' }}>{ type }</p>
            </div>
        </div>
    );
};

const container = {
    maxWidth: '550px',
    // background: 'green',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    // padding: '20px'
    // marginLeft: '50px'
}

const aTag = {
    textDecoration: 'none',
    color: '#000000'
}

const image = {
    width: '180px',
    height: '180px',
    marginTop: '20px',
}

const details = {
    // width: '100%',
    width: '250px',
    textAlign: 'center',
    //background: '#19FFB6',
    background: '#2DDBAC',
    borderRadius: '6px',
    marginTop: '40px',
    padding: '15px 10px 15px 10px'
}

export default TeamProfile;