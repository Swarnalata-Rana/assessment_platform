import React from 'react'
import Pagination from './Pagination';

const Header = () => {
    return (
        <>

            <div className='headerDiv'>
                <img className='logoImg' src='LogoGrp.png' />
                <img className='QAdiv' src='QA.png' />
            </div>
            {/* <div style={{ display: 'flex' }}>
                <div className='headerDiv'>
                    <img className='logoImg' src='LogoGrp.png' />
                    <img className='QAdiv' src='QA.png' />
                </div>
                <div style={{ justifyContent: 'end', display: 'none' }}><Pagination /></div>
            </div> */}
        </>
    )
}

export default Header;