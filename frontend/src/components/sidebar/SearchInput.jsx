import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2" >
        <input type="text" className="rounded-full input input-bordered" placeholder="Search..." />
        <button className="bg-sky-500 text-white btn btn-circle">
          <IoSearchSharp className="outline-none w-6 h-6" />
        </button>
    </form>
  )
}

export default SearchInput
