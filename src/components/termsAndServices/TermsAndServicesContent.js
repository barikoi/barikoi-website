import React from 'react';

// Import Components
import { TermsAndServicesData } from '../termsAndServices/TermsAndServicesData'

const TermsAndServicesContent = () => {

    return (
        <div>
            <div>
                <div class="container privacy">

                    <section class="full-section expanded initial-section">

                        <div class="col-md-12 col-lg-12 col-sm-12">
                            <div class="privacy-header pb-2">

                                <h1 class="py-1">Terms And Services of Barikoi Bot</h1>
                                {
                                    TermsAndServicesData.map(data => {
                                        return (
                                            <div style={{ marginBottom: '2rem' }}>
                                                <h2>
                                                    {data.header}
                                                </h2>
                                                {
                                                    data.contents.map(content => {
                                                    return (
                                                        <p class="privacy-content">
                                                            {content.content}    
                                                        </p>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    } )
                                }
                            </div>
                        </div>


                    </section>

                </div>


            </div>
        </div>
    );
};

export default TermsAndServicesContent;