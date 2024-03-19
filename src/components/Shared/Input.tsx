
import { IoIosSearch } from "react-icons/io";

const Input = () => {
  return (
    <div className="flex w-full rounded-full bg-gray-100">
      <button type="submit" className="m-2 rounded ">
        <IoIosSearch size={20} />
      </button>
      <input
        className=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none "
        type="search"
        name="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default Input;
