import React from 'react';

const FeaturedOn = () => {
    return (
        <div className='verify about-content wrapper'>
            <div className='heading'>
                <h1>We were featured on</h1>
            </div>
            <div className='bkoi-verify-page'>
                <div style={{ ...container }}>
                    <div style={{...image}}>
                        
                        <a
                            href='https://tbsnews.net/feature/panorama/barkoi-localised-solution-helps-businesses-pinpoint-location-201862?fbclid=IwAR1Hn2IbdN3ZAU1KHRJ2lLSsqL7eKbqeI0fB4yn59Ab1J9UPFcAQEz0K3Vk#.YCqZYb8-CZ8.facebook'
                            target='_blank' rel='noopener noreferrer'
                        >
                            <img width='100%' src={require('../../assets/featuredOn/TBS.png')} alt='barikoi-featured-on-TBS' />
                        </a>
                    </div>
                </div>
                <div style={{ ...container }}>
                    <div style={{ ...image }}>
                        <a
                            href='https://futurestartup.com/2020/12/16/10-powerful-founders-interviews-on-starting-up-and-building-a-business-from-scratch/?utm_content=buffer411fa&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer'
                            target='_blank' rel='noopener noreferrer'
                        >
                            <img width='100%' src={require('../../assets/featuredOn/FS.png')} alt='barikoi-featured-on-FS'/>
                        </a>
                        
                    </div>
                </div>
                <div style={{ ...container }}>
                    <div style={{ ...image }}>
                        <a
                            href='https://www.grameenphone.com/about/media-center/press-release/grameenphone-accelerator-receives-batch-4-batch-3-departs'
                            target='_blank' rel='noopener noreferrer'
                        >
                            <img width='100%' src={require('../../assets/featuredOn/gp_acc.png')} alt='barikoi-featured-on-gp-accelerator'/>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

const container = {
    maxWidth: '550px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}
const image = {
    width: '250px',
    marginTop: '20px',
}

export default FeaturedOn;