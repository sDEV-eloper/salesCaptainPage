import React from 'react'
import DiscoveredByCustomers from '../DiscoveredByCustomers/DiscoveredByCustomers'
import CaptainAIConversation from '../CaptainAIConversation/CaptainAIConversation'
import MarketingWorks from '../MarketingWorks/MarketingWorks'
import TrainingAndSupport from '../TrainingAndSupport/TrainingAndSupport'

const MakingBusiness = () => {
  return (
    
      <div className='bg-gray-700'>
        <div>
        <h1 className="text-center font-extrabold text-5xl p-8 text-white ">Make your business stand out with us</h1>
      </div>
       <DiscoveredByCustomers/>
       <CaptainAIConversation/>
       <MarketingWorks/>
       <TrainingAndSupport/>
    </div>
  )
}

export default MakingBusiness