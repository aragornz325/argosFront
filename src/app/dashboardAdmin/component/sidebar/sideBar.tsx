import React from 'react'
import '../sidebar/style.css'
import LogoutButton from '@/components/logOutButton';

const SideBar=()=>{

    return(
            <div className='flex flex-col md:flex-row h-screen'>
                <div className="container">
                <aside className="sidebar">
                    <nav className="menu">
                        <ul>
                            <div> 
                                <h1 className='titulo'>Sistema Argos</h1>
                            </div>
                            <li><a href="#option1">Option 1</a></li>
                            <li><a href="#option2">Option 2</a></li>
                            <li><a href="#option3">Option 3</a></li>
                            <li><a href="#option4">Option 4</a></li>
                            <LogoutButton/>
                        </ul>
                    </nav>
                </aside>
            </div>
        </div>
    );
};

export default SideBar;



