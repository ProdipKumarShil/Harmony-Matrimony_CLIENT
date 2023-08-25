
import { useEffect, useState } from "react";
import useMyData from "../../../Hooks/useMydata";
import { TbUserEdit } from "react-icons/tb";
import { BsArrowRightCircle, BsFillCheckCircleFill } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";






import Post from "./postFunction/Post";

const MyProfile = () => {
  const [userInfo, refetch] = useMyData();
  const {
    img,
    name,
    country,
    religion,
    physical_attributes,
    mobile,
    email,
    gender,
    about,
    age,
  } = userInfo;


    const [userInfo] = useMyData();
    const { img, name, country, religion, physical_attributes, mobile, email, gender, about, age, profile_complete } = userInfo

    const [selectedOption, setSelectedOption] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Posts', 'Followers'];

    const {  handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);
        console.log(selectedOption);
        navigate("/userinfo1", {
            state: selectedOption
        }
       )

    };

    const changeTab = (index) => {
        setActiveTab(index);
    };

    useEffect(() => {
        if (profile_complete === 10) {
            setShowModal(true);
        }
        if (profile_complete === 30) {
            setShowModal2(true);
        }
    }, [profile_complete]);


    return (
        <div className="w-[80%] mx-auto m-32">
            {showModal ? (
                <>
                    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-30 backdrop-blur-lg backdrop-filter bg-gray-300">
                        <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card">
                            <div className="md:card-body ">
                                <div className="flex justify-center"> <BiSolidUserCircle className="text-6xl" /></div>
                                <div className="text-center mb-20 flex justify-center"><h2 className="card-title ">Profile For</h2></div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="container  gap-5  grid grid-cols-2 md:grid-cols-3">
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="MySelf" onChange={() => setSelectedOption({ Profile_For: "Myself" })} />
                                            <div className=" max-w-xl rounded-md bg-gray-100 p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex  gap-2 items-center">
                                                        <div>
                                                            <BsFillCheckCircleFill className="text-xl -mb-1" />
                                                        </div>
                                                        <p><span value="mySelf" className="sm:text-lg ">Myself</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="MySelf" onChange={() => setSelectedOption({ Profile_For: "My Son" })} />
                                            <div className=" max-w-xl rounded-md bg-gray-100 p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex gap-2 items-center">
                                                        <div>
                                                            <BsFillCheckCircleFill className="text-xl -mb-1" />
                                                        </div>
                                                        <p><span className="sm:text-lg ">My Son</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="MySelf" onChange={() => setSelectedOption({ Profile_For: "My Daughter" })} />
                                            <div className=" max-w-xl rounded-md bg-gray-100 p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex gap-2 items-center">
                                                        <div>
                                                            <BsFillCheckCircleFill className="text-xl -mb-1" />
                                                        </div>
                                                        <p><span className="sm:text-lg ">My Daughter</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                        <label className="cursor-pointer">
                                             <input type="radio" className="peer sr-only" name="MySelf" onChange={() => setSelectedOption({ Profile_For: "My Brother" })} />
                                            <div className=" max-w-xl rounded-md bg-gray-100 p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex gap-2 items-center">
                                                        <div>
                                                            <BsFillCheckCircleFill className="text-xl -mb-1" />
                                                        </div>
                                                        <p><span className="sm:text-lg ">My Brother</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                        <label className="cursor-pointer">
                                        <input type="radio" className="peer sr-only" name="MySelf" onChange={() => setSelectedOption({ Profile_For: "My Sister" })} />
                                            <div className=" max-w-xl rounded-md bg-gray-100 p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex gap-2 items-center">
                                                        <div>
                                                            <BsFillCheckCircleFill className="text-xl -mb-1" />
                                                        </div>
                                                        <p><span className="sm:text-lg ">My Sister</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                        <label className="cursor-pointer">
                                        <input type="radio" className="peer sr-only" name="MySelf" onChange={() => setSelectedOption({ Profile_For: "My Friend" })} />
                                            <div className=" max-w-xl rounded-md bg-gray-100 p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#51ac83]  peer-checked:ring-[#51ac83] peer-checked:ring-offset-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex gap-2 items-center">
                                                        <div>
                                                            <BsFillCheckCircleFill className="text-xl -mb-1" />
                                                        </div>
                                                        <p><span className="sm:text-lg ">My Friend</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                        <div className="flex justify-center mt-10">
                                            <button disabled={ !selectedOption }  className="bg-[#34af78] py-2 rounded-lg text-white btn" type="submit">Submit</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {showModal2 ? (
                <>
                    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-opacity-60 backdrop-blur-xl backdrop-filter bg-gray-300">
                        <div className="bg-white p-4 sm:p-10 rounded-lg shadow-2xl card">
                            <div className="md:card-body ">
                                <p className="text-lg font-medium">Update Your Profile please</p>
                                <div className="flex justify-center mt-4"><div className="radial-progress bg-[#51ac83] text-primary-content border-4 border-[#51ac83] text-center" style={{"--value":30}}>30%</div></div>
                                <div className="flex justify-center mt-10">
                                    <Link to="/userinfo2"> <button   className="bg-[#34af78] py-2 rounded-lg text-white btn" type="submit">Continue<BsArrowRightCircle className="text-lg font-semibold" /></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
            {/* Profile Header */}
            <div className=" bg-white w-full flex h-40 items-center relative shadow-lg rounded-xl">
                {/* Profile Image */}
                <div className=" ml-4">
                    <img
                        className="round border border-teal-400 rounded-full p-2 text w-20 h-20 md:w-32 md:h-32 mx-auto object-fill"
                        src={img}
                        alt="user"
                    />
                </div>
                {/* Profile Info */}
                <div className="ml-4">
                    <h3 className="user-name font-semibold md:text-2xl text-base ">{name}</h3>
                    <div className="address flex items-center text-gray-700 font-bold">
                        <p className="block">{country}</p>
                    </div>
                    <p className="">Age: {age}</p>
                </div>
                {/* Notification Bell */}
                <div className="text-white absolute rounded-full top-1/2 right-2 md:right-8 transform -translate-y-1/2 w-10 h-10 flex justify-center items-center cursor-pointer transition duration-500 ease-in-out bg-[#FF725E] hover:bg-white border-2  hover:text-[#FF725E]">
                    <TbUserEdit></TbUserEdit>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row py-6 xl:pr-16">
                {/* Left Side */}
                <div className="w-full xl:w-1/4">
                    {/* Profile Information */}
                    <div className=" bg-white shadow-md p-8">
                        <p className="mobile-no text-gray-600">
                            phone: {mobile}
                        </p>
                        <p className="user-mail text-gray-600">
                            Email: {email}
                        </p>
                        <div className=" mt-4">
                            <h3 className="font-semibold text-xl">Bio</h3>
                            <p className=" text-gray-600">
                                {about}
                            </p>
                        </div>
                        <div >
                            <h6 className="my-2 font-medium">More Info</h6>
                            <ul >
                                <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
                                    {religion}
                                </li>
                                <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
                                    {gender}
                                </li>
                                <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
                                    {physical_attributes?.height}
                                </li>
                                <li className="inline-block border border-[#FF725E] rounded-md text-xs font-medium px-3 py-1 m-1">
                                    {physical_attributes?.weight}
                                </li>

                            </ul>
                        </div>
                        <div className="flex gap-5 mt-4">
                            <button className=" bg-[#FF725E] text-white py-2 px-4 rounded-md">
                                Chat
                            </button>
                            <button className=" bg-[#FF725E] text-white py-2 px-4 rounded-md ">
                                Follow
                            </button>
                        </div>

                    </div>
                </div>
                {/* Right Side */}
                <div className="xl:w-3/4 w-full xl:pl-16 my-20 lg:my-0 ">
                    {/* Tab Navigation */}
                    <div className=" bg-white shadow-md">
                        <ul className="flex">
                            {tabs.map((tab, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer px-6 py-2 w-full text-center transition duration-200 ease-in-out ${activeTab === index ? 'active bg-[#FF725E] text-white' : ''
                                        }`}
                                    onClick={() => changeTab(index)}
                                >
                                    {tab}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Profile Content */}
                    <div className="mt-10">
                        <div className={`profile-posts tab ${activeTab === 0 ? 'block' : 'hidden'}`}>
                            <h1 className="font-semibold text-2xl mb-4">Your Posts</h1>
                            <p className="text-gray-600">
                                Post will show here
                            </p>
                        </div>
                        <div className={`profile-reviews tab ${activeTab === 1 ? 'block' : 'hidden'}`}>
                            <h1 className="font-semibold text-2xl mb-4">Followers</h1>
                            <p className="text-gray-600">
                                followers will show here
                            </p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
      </div>
    </div>
  );
};

export default MyProfile;
