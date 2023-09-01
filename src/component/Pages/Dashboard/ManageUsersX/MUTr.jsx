import { RiDeleteBinLine } from "react-icons/ri";
import {motion} from 'framer-motion'

const MUTr = ({user, index, handleMakeAdmin, handleMakeSupport, handleDelete}) => {
  return (
      <motion.tr
       className="bg-white   hover:bg-gray-50 "

      // remake
      transition={{delay: 0.1 * index}}
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 20}}
      
      >
        <th scope="row" className="flex items-center px-6 py-4 whitespace-nowrap ">
          <img className="w-10 h-10 rounded-full" src={user?.profileImage} alt="Jese image" />
          <div className="pl-3">
            <div className="text-base font-semibold">{user.name}</div>
            <div className="font-normal text-gray-500">{user.email}</div>
          </div>
        </th>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online </div>
        </td>
        <td className="px-6 py-4">
          <div className="">
          <button onClick={() =>handleMakeAdmin(user._id)} className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Make Admin</button>
          <button onClick={() =>handleMakeSupport(user._id)}  className="bg-red-100 text-rose-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">Make Supporter</button>
          </div>
        </td>
        <td className=''>
         <button onClick={() =>handleDelete(user._id)} className='text-xl text-white bg-red-500 p-2 rounded-full ml-8 cursor-pointer'><RiDeleteBinLine/></button>
        </td>
      </motion.tr>
  );
};

export default MUTr;