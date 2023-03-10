import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import { checkIsAuth, logout } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

export const Navbar = () => {
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()

    const activeStyles = {
        color: 'white',
    }

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('Вы вышли из системы')
    }

    return (
        <div className='flex justify-between items-center px-2 py-4'>
            <button className='flex justify-center items-center w-16 h-8 bg-gray-600 text-xs text-white rounded-sm'>
                Перевести
            </button>

            {isAuth && (
                <ul className='flex gap-8'>
                    <li>
                        <NavLink
                            to={'/'}
                            href='/'
                            className='text-sx text-gray-400 hover:text-white'
                            style={({ isActive }) =>
                                isActive ? activeStyles : undefined
                            }
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/posts'}
                            href='/'
                            className='text-sx text-gray-400 hover:text-white'
                            style={({ isActive }) =>
                                isActive ? activeStyles : undefined
                            }
                        >
                            Профиль
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            to={'/new'}
                            href='/'
                            className='text-sx text-gray-400 hover:text-white'
                            style={({ isActive }) =>
                                isActive ? activeStyles : undefined
                            }
                        >
                            Добавить пост
                        </NavLink>
                    </li> */}
                </ul>
            )}

            <div className='flex justify-center items-center w-16 h-8 bg-gray-600 text-xs text-white rounded-sm px-4 py-2'>
                {isAuth ? (
                <button onClick={logoutHandler}>Выйти</button>                    
                ) : (<Link to={'/login'}> Войти </Link>)}
                    
            </div>
        </div>
    )
}