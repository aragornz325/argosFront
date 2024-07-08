"use client";


import { NextPage } from 'next';
import './styles.css';
import StyledButton from '../../components/button/botton';
import { Fragment } from 'react';

interface Props {}

const loginPage: NextPage<Props> = () => {
  return (
    <>
        <div>
          <h1>soy el puto login</h1>
            <div>
                <img className='img' src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="avart login" />
            </div>
            <div>
                <h3>este va a ser el login</h3>
            </div>


        <StyledButton
        onClick={() => console.log('hola que tal')}
        >
            login
        </StyledButton>
          
        </div>
    </>
  );
};

export default loginPage;