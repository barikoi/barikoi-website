import React from 'react';

const TeamProfile = ({
    name,
    designation,
    imgSrc
}) => {
    return (
        <div style={{ ...container}}>
            <div style={{ ...image}}>
                <img style={{borderRadius: '50%'}} width='100%' src={imgSrc} alt = ''/>
            </div>
            <div style={{ ...details }}>
                <h2 style={{ fontSize: '18px' }}>
                    {name}
                </h2>
                <span style={{ fontWeight: 'lighter' }}>{ designation }</span>
            </div>
        </div>
    );
};

const container = {
    width: '240px',
    // background: 'green',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: '20px'
    marginLeft: '50px'
}

const image = {
    width: '180px',
    height: '180px',
    marginTop: '20px',
}

const details = {
    width: '100%',
    textAlign: 'center',
    background: '#19FFB6',
    borderRadius: '6px',
    marginTop: '40px',
    padding: '15px 10px 15px 10px'
}

export default TeamProfile;