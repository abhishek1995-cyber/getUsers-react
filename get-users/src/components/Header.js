import React from 'react';

function Header(props){
   
    return (
        <>
        <header className='container'>
            <nav>
                <ul className='flex'>
                    <li className='logo'>
                        <h1>User<span className='span'>Info</span></h1>
                    </li>
                    <li>
                        <button 
                           className='btn-header'
                           onClick={props.handleUsers}>
                           Get Users
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;