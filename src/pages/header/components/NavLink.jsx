import { Link } from 'react-router-dom';


export const NavLink = ({ children, LinkText, path, css, isActive }) => {
    return (
        <>
            <Link to={path}
                className={`col-3 navLinks row align-items-center g-0 text-center text-white ${css}
                    ${isActive ? 'activeLink' : ''}
                    `}
            >
                <div className='row g-0 align-items-center'>
                    <span className="fs-md-5">{LinkText}</span>
                    <div className='icon'>
                        {children}
                    </div>
                </div>
            </Link>
        </>
    )
}
