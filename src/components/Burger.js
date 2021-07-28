import React, { useState } from 'react'
import { RiMenu2Line } from 'react-icons/ri'
import { VscChromeClose } from 'react-icons/vsc'

function Burger() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="menu" onClick={handleClick}>
            {click ? <VscChromeClose/> : <RiMenu2Line/>}
        </div>
    )
}

export default Burger
