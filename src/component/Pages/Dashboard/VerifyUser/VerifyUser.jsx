import { useEffect, useState } from 'react';
import VerifyTr from './VerifyTr';
import Swal from 'sweetalert2';

const VerifyUser = () => {
    const [verify, setverify] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        fetch('https://soulmates-server-two.vercel.app/verifyUser')
        .then(res => res.json())
        .then(data =>{
           setverify(data)
           setLoading(false)
        })
    },[verify])
    const handleVerify = email =>{
     fetch(`https://soulmates-server-two.vercel.app/userVerify/${email}`, {
      method : "PATCH"
     })
     .then(res => res.json())
        .then(data =>{
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: `He is Denied now!`,
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        })
        .catch(error => console.log(error))
    }
    const handleVerifyCancle = email =>{
console.log(email);
    }
    return (
        <div className="relative overflow-x-auto  rounded-2xl px-6 w-[75%] mx-auto py-6 my-5">
            <h1 className='text-black text-4xl my-5 text-center font-serif'>Verify User</h1>
            <table className="table w-full text-sm text-left text-gray-500 overflow-hidden card">
        {/* This is table HEAD */}

        <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
          <tr className="">
            <th></th>
            <th></th>
            <th scope="col" className="">
              Name
            </th>
            <th scope="col" className="">
              Action!
            </th>
          </tr>
        </thead>

        {/* This is table body, pending users goes here */}

        <tbody className="">
          {verify?.map((user, index) => (
            <VerifyTr
              key={user._id}
              user={user}
              index={index}
              handleVerify={handleVerify}
              handleVerifyCancle={handleVerifyCancle}
            />
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default VerifyUser;