'use client';


import { HiOutlineUserCircle } from 'react-icons/hi'

const UserBar = () => {
    return (
        <div className="flexd">
            <div className="bg-slate-950 text-white rounded-md h-10 w-10">
                <div className='items-center justify-center text-1xl'>
                    <HiOutlineUserCircle size={40}/>
                </div>
            </div>
        </div>
    );
}
 
export default UserBar;