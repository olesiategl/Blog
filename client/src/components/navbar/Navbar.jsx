import React from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'
import womanImg from '../../assets/myPicture.jpg'
import { useState } from 'react'



import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
      <span onClick={handleLogout}>Вийти</span>
  );
};


const Navbar = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>PostBlog</Link>
        </div>
        <ul className={classes.center}>
          <Link to='/' className={classes.listItem}>Головна</Link>
          <li className={classes.listItem}>Про мене</li>
          <li className={classes.listItem}>Контакти</li>
          <li className={classes.listItem}>Категорії</li>
        </ul>
        <div className={classes.right}>
          <img onClick={() => setShowModal(prev => !prev)} src={womanImg} className={classes.img} />
          {showModal &&
            <div className={classes.modal}>
              <Link to='/create'>Створити</Link>
              <Logout />

              {/*<span >Logout</span>*/}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar