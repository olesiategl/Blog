import React from 'react'
import classes from './newsletter.module.css'
import {FiSend} from 'react-icons/fi'

const Newsletter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Бажаєте отримувати інформацію про останні оновлення?</h5>
          <h2>Залиште нам свою електроннну пошту!</h2>
        </div>
        <div className={classes.inputContainer}>
          <input type="email" placeholder='Введіть електронну пошту...'/>
          <FiSend className={classes.sendIcon}/>
        </div>
      </div>
    </div>
  )
}

export default Newsletter