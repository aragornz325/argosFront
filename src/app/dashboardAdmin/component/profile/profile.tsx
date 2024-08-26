import Image from 'next/image';
import React from "react";
import avatarUser from "../../../../../public/avatarUser.png";
import '../profile/style.css'


const ProfileBar=()=>{

    return(
        <div className='profileBar'>
            <Image src={avatarUser} alt='avatar'width={100} height={100}/>
            <div>
                <h1 className='nombre_profile'>Santiago Collaud</h1>
                <h2 className='mail'>santiago_collaud@gmail.com</h2>
            </div>
        </div>
    );
};

export default ProfileBar;