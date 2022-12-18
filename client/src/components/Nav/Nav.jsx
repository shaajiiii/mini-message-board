import React from 'react';
import './Nav.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


function Nav({username}) {


    const MySwal = withReactContent(Swal)

    const LogOutprompt = () => {
        MySwal.fire({
            title: 'Log out?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#1c668d',
            cancelButtonColor: '#398ab9',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                handleLogout()
            }
        })
    }

    let handleLogout = () => {
        localStorage.removeItem('token')
        window.location = '/'

    }

    

    return (
        <>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <h1> Hi {username}  </h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarText">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item" onClick={LogOutprompt}>
                                <span class="nav-link Nav-header" aria-current="page" >Log out</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='fix-box-nav'>

            </div>

        </>
    )
}

export default Nav
