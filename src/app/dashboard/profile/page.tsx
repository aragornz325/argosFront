'use client';
import { NextPage } from 'next'

import StyledButton from '@/components/button/botton'

interface Props {}

const Profile: NextPage<Props> = ({}) => {
  return <div>
    <h1>este es el Profile</h1>
    <StyledButton
        onClick={() => console.log('llegue al profile')}
        >
            login
        </StyledButton>
  </div>
}

export default Profile