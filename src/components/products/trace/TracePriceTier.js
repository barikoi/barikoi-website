import React from 'react'
import TracePriceTierList from './TracePriceTierList'


const TracePriceTier = () => {
    return (
        <div className='pricing-plans api-content wrapper'>
            <div>
                <div className='heading'>
                    <h1>Find the perfect plan for your business</h1>
                    <a style={{ color: '#488DE0' }} href="https://docs.barikoi.com/docs/pricing-call/" target="_blank" rel="noopener noreferrer">
                    <p>API Usage and Pricing Clarification</p>
                    </a>
                    <p style={{ fontSize: '12px' }}>prices are exclusing of VAT and tax</p>
                </div>
                <div className='pricing-plans-grid'>
                    <TracePriceTierList
                        title = 'StartUp'
                        perMonthPrice = '2500'
                        totalApiCalls = '100,000'
                        additionalPingPrice = '0.05'
                        additionalHistoryPrice = '0.25'
                        fuelGuestimationPrice = '5'
                        monthlyReportPrice = '10'
                    />
                    <TracePriceTierList
                        title = 'Business'
                        perMonthPrice = '10,000'
                        totalApiCalls = '400,000'
                        additionalPingPrice = '0.03'
                        additionalHistoryPrice = '0.25'
                        fuelGuestimationPrice = '5'
                        monthlyReportPrice = '10'
                    />
                    <TracePriceTierList
                        title = 'Enterprise'
                        perMonthPrice = ' Custom'
                        totalApiCalls = ' Custom'
                        additionalPingPrice = ' Custom'
                        additionalHistoryPrice = '0.25'
                        fuelGuestimationPrice = '5'
                        monthlyReportPrice = '10'
                    />
                </div>
            </div>
        </div>        
    )
}

export default TracePriceTier 