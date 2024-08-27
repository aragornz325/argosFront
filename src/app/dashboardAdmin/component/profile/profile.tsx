import Image from 'next/image';
import React, { useEffect, useState } from "react";
import avatarUser from "../../../../../public/avatarUser.png";
import '../profile/style.css';
import Cookies from 'js-cookie';

const ProfileBar = () => {
  const [name, setName] = useState<string | null>(null);
  const [mail, setMail] = useState<string | null>(null);

  useEffect(() => {
    const fetchedName = Cookies.get('name') || null;
    const fetchedMail = Cookies.get('mail') || null;

    setName(fetchedName);
    setMail(fetchedMail);
  }, []);

  // Mostrar un placeholder mientras se obtienen los datos
  if (!name || !mail) {
    return (
      <div className='profileBar'>
        <Image src={avatarUser} alt='avatar' width={100} height={100} />
        <div>
          <h1 className='nombre_profile'>Cargando...</h1>
          <h2 className='mail'>Cargando...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className='profileBar'>
      <Image src={avatarUser} alt='avatar' width={100} height={100} />
      <div>
        <h1 className='nombre_profile'>{name}</h1>
        <h2 className='mail'>{mail}</h2>
      </div>
    </div>
  );
};

export default ProfileBar;
