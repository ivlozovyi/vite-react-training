import { useState, useEffect } from 'react';
import logo from '/vite.svg'
import {styled} from 'styled-components'

const HeaderContainer = styled.header`
    color:red;
    font-size:48px;
`

export default function Header() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])
    
    

    return (
        <HeaderContainer>
            <img src={logo} />
            {/* <h3>New React project </h3> */}

            <span>Time now: {time.toLocaleTimeString()}</span>
        </HeaderContainer>
    )
}