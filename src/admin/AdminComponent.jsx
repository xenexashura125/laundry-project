import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
export const AdminLogin = ({ admin, setAdmin, setVerifiedMain, inputadmin, setInputAdmin }) => {
    
    const [error, setError] = useState({ username: '', password: '' });

    const handleInputs = (e, input) => {
        setInputAdmin((prevState) => ({
            ...prevState,
            [input]: e.target.value
        }));
        setError({ ...error, [input]: '' }); // Clear error when input changes

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputadmin.username === admin.username && inputadmin.password === admin.password) {
            setVerifiedMain(true);
        } else {
            setError({
                username: inputadmin.username !== admin.username ? 'Invalid username' : '',
                password: inputadmin.password !== admin.password ? 'Invalid password' : ''
            });
        }
    };

    return (
        <>
        <div className="login-system flex items-center justify-center">
            <div className="circles tp1"></div>
            <div className="circles tp2"></div>
            <div className="circles tp3"></div>
            <div className="circles tp4"></div>
            <div className="container mx-auto contain-box w-4/12">
                <h2 className='py-16 text-2xl'> Admin Login </h2>
                <form action="#">
                    <div className="box-input">
                        <div className="er-it">
                            <div className="input-item">
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 11.9999L8 15.9999H18V11.9999H12ZM9.06 3.1899L0 12.2499V15.9999H3.75L12.81 6.93989L9.06 3.1899ZM2.92 13.9999H2V13.0799L9.06 5.9999L10 6.93989L2.92 13.9999ZM15.71 4.0399C16.1 3.6499 16.1 2.9999 15.71 2.6299L13.37 0.289895C13.1825 0.103887 12.9291 -0.000488281 12.665 -0.000488281C12.4009 -0.000488281 12.1475 0.103887 11.96 0.289895L10.13 2.11989L13.88 5.86989L15.71 4.0399Z" fill="#8CBAFF"/>
                                </svg>
                                <div className="dp-inp">
                                    <input onChange={e => handleInputs(e,'username')} value={inputadmin.username} className='px-4' type="text" placeholder='Email' />
                                </div>
                            </div>
                            {error.username && <p className="error-message py-2">{error.username}</p>}
                        </div>
                        <div className="er-it">
                            <div className="input-item">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 16C7.26522 16 7.51957 15.8946 7.70711 15.7071C7.89464 15.5196 8 15.2652 8 15C8 14.7348 7.89464 14.4804 7.70711 14.2929C7.51957 14.1054 7.26522 14 7 14C6.73478 14 6.48043 14.1054 6.29289 14.2929C6.10536 14.4804 6 14.7348 6 15C6 15.2652 6.10536 15.5196 6.29289 15.7071C6.48043 15.8946 6.73478 16 7 16ZM11 16C11.2652 16 11.5196 15.8946 11.7071 15.7071C11.8946 15.5196 12 15.2652 12 15C12 14.7348 11.8946 14.4804 11.7071 14.2929C11.5196 14.1054 11.2652 14 11 14C10.7348 14 10.4804 14.1054 10.2929 14.2929C10.1054 14.4804 10 14.7348 10 15C10 15.2652 10.1054 15.5196 10.2929 15.7071C10.4804 15.8946 10.7348 16 11 16ZM16 15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16C14.7348 16 14.4804 15.8946 14.2929 15.7071C14.1054 15.5196 14 15.2652 14 15C14 14.7348 14.1054 14.4804 14.2929 14.2929C14.4804 14.1054 14.7348 14 15 14C15.2652 14 15.5196 14.1054 15.7071 14.2929C15.8946 14.4804 16 14.7348 16 15Z" fill="#000"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.75 6.99984C5.74826 5.72082 6.21349 4.48515 7.05833 3.52487C7.90317 2.56458 9.06951 1.94574 10.3383 1.78455C11.6072 1.62335 12.8912 1.93089 13.9493 2.64941C15.0074 3.36793 15.7669 4.44801 16.085 5.68684C16.1391 5.87443 16.2641 6.03355 16.4336 6.13039C16.6031 6.22724 16.8037 6.25417 16.9928 6.20548C17.1818 6.15678 17.3444 6.0363 17.446 5.86962C17.5477 5.70293 17.5803 5.5032 17.537 5.31284C17.1273 3.72094 16.1508 2.33323 14.7908 1.4101C13.4307 0.486963 11.7805 0.0918494 10.1498 0.298891C8.51912 0.505933 7.02003 1.3009 5.93379 2.53463C4.84756 3.76836 4.24885 5.35607 4.25 6.99984V8.30284C4.023 8.31884 3.81 8.33884 3.608 8.36684C2.708 8.48684 1.95 8.74684 1.348 9.34784C0.746 9.94984 0.488 10.7078 0.367 11.6078C0.25 12.4748 0.25 13.5778 0.25 14.9448V15.0548C0.25 16.4218 0.25 17.5248 0.367 18.3918C0.487 19.2918 0.747 20.0498 1.348 20.6518C1.95 21.2538 2.708 21.5118 3.608 21.6338C4.475 21.7498 5.578 21.7498 6.945 21.7498H15.055C16.422 21.7498 17.525 21.7498 18.392 21.6338C19.292 21.5118 20.05 21.2538 20.652 20.6518C21.254 20.0498 21.512 19.2918 21.634 18.3918C21.75 17.5248 21.75 16.4218 21.75 15.0548V14.9448C21.75 13.5778 21.75 12.4748 21.634 11.6078C21.512 10.7078 21.254 9.94984 20.652 9.34784C20.05 8.74584 19.292 8.48784 18.392 8.36684C17.525 8.24984 16.422 8.24984 15.055 8.24984H6.945C6.522 8.24984 6.124 8.24984 5.75 8.25284V6.99984ZM3.808 9.85284C3.074 9.95184 2.686 10.1328 2.409 10.4088C2.132 10.6858 1.952 11.0738 1.853 11.8088C1.752 12.5638 1.75 13.5648 1.75 14.9998C1.75 16.4348 1.752 17.4358 1.853 18.1918C1.952 18.9258 2.133 19.3138 2.409 19.5908C2.686 19.8678 3.074 20.0478 3.809 20.1468C4.563 20.2478 5.565 20.2498 7 20.2498H15C16.435 20.2498 17.436 20.2478 18.192 20.1468C18.926 20.0478 19.314 19.8668 19.591 19.5908C19.868 19.3138 20.048 18.9258 20.147 18.1908C20.248 17.4358 20.25 16.4348 20.25 14.9998C20.25 13.5648 20.248 12.5628 20.147 11.8078C20.048 11.0738 19.867 10.6858 19.591 10.4088C19.314 10.1318 18.926 9.95184 18.191 9.85284C17.436 9.75184 16.435 9.74984 15 9.74984H7C5.565 9.74984 4.563 9.75184 3.808 9.85284Z" fill="#8CBAFF"/>
                                </svg>
                                <div className="dp-inp">
                                    <input onChange={e => handleInputs(e,'password')} value={inputadmin.password} className='px-4' type="password" placeholder='Password' />
                                </div>
                            </div>
                            {error.password && <p className="error-message py-2">{error.password}</p>}
                        </div>
                    </div>

                    <div className="button-box">
                        <button className='p-2' onClick={handleSubmit}> Login </button>
                    </div>
                </form>
            </div>
        </div>
        </>    
    )
}

export const AdminContainer = () => {



    return(
        <>
        <nav className='navbar-admin'>
            <ul>
                <Link to={'/admin/dash'}> Dashboard </Link>
                <Link to={'/admin/book'}> Dashboard </Link>
                <Link to={'/admin/account'}> Dashboard </Link>
            </ul>
        </nav>
        </>
    )


}



const AdminComponent = () => {

    const [verifiedAdmin,setVerifiedMain] = useState(false)
    const [admin,setAdmin] = useState({ username:"joyboy123", password:"static123"  })
    const [inputadmin,setInputAdmin] = useState({username:'',password:''})

    return (
        <div className='admin-system-main'>
            {!verifiedAdmin && 
                <AdminLogin 
                    admin={admin} 
                    setAdmin={setAdmin} 
                    setVerifiedMain={setVerifiedMain} 
                    inputadmin={inputadmin} 
                    setInputAdmin={setInputAdmin}
                />
            }
            {verifiedAdmin && <AdminContainer></AdminContainer>}
        </div>
    )
}

export default AdminComponent