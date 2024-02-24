import ChatBox from '@/component/Chatbox'
import Sidebar from '@/component/Sidebar'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-1">
                  <Sidebar />
                </div>
                <div className="col-span-3">
                    <ChatBox/>
                </div>
              </div>

              {/* {children} */}
           
    </div>
  )
}

export default HomePage
