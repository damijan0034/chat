
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='flex flex-col p-4 border-slate-500 border-r'>
      <SearchInput />
      <div className="px-3 divider"></div>
       <Conversations />
      <LogoutButton />  
    </div>
  )
}

export default Sidebar
