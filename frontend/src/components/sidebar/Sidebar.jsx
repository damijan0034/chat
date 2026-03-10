import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="px-3 divider"></div>
       <Conversations />
      {/* <Logoutbutton />  */}
    </div>
  )
}

export default Sidebar
