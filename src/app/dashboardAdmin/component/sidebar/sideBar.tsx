import React from 'react'
import '../sidebar/style.css'
import '../../../globals.css'

import LogoutButton from '@/components/logOutButton';
import Image from 'next/image';


import nuevaMulta from '../../../../../public/NuevasMultas.png'
import historial from '../../../../../public/Historial.png'
import check from '../../../../../public/check.png'
import config from '../../../../../public/config.png'
import logout from '../../../../../public/logout.png'



const SideBar=()=>{

    return(
            <div className='flex flex-col md:flex-row h-screen posicion'>
                <div className="container">
                <aside className="sidebar">
                    <nav className="menu">
                        <ul>
                            <div> 
                                <li className='hidden md:block titulo'>Sistema Argos</li>
                                <li className='block md:hidden titulo'></li>
                            </div>

                            <li className='hidden md:block'><a href="#option1">Nuevas Multas</a></li>
                            <li className='block md:hidden'><a href="#option1"><Image src={nuevaMulta} alt='nuevaMulta' width={30} /></a></li>

                            <li className='hidden md:block'><a href="#option2">Historial</a></li>
                            <li className='block md:hidden'><a href="#option2"><Image src={historial} alt='historial' width={30} /></a></li>
                            
                            <li className='hidden md:block'><a href="#option3">Confirmar</a></li>
                            <li className='block md:hidden'><a href="#option3"><Image src={check} alt='check' width={30} /></a></li>


                            <li className='hidden md:block'><a href="#option4">Configuracion</a></li>
                            <li className='block md:hidden'><a href="#option4"><Image src={config} alt='config' width={30} /></a></li>

                            <li className='hidden md:block'><a href="#option4"><LogoutButton/></a></li>
                            <li className='block md:hidden'><LogoutButton/><Image src={logout} alt='logout' width={30}/></li>
                            
                        </ul>
                    </nav>
                </aside>
            </div>
        </div>
    );
};

export default SideBar;



