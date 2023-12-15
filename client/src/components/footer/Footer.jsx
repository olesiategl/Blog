import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>Про сайт</h2>
          <p>Ласкаво просимо на наш веб-сайт, де ми ділимося 
          цікавими інсайтами та інноваціями з різних сфер життя. 
          Незалежно від вашого інтересу - чи то наука, технології, бізнес чи культура - у нас є щось цікаве для кожного.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Контакти</h2>
          <span>Номер телефону: +380635444671</span>
          <span>Telegram: Di_ana321</span>
          <span>GitHub: @Di_ana321</span>
        </div>
        <div className={classes.col}>
          <h2>Місцезнаходження</h2>
          <span>Континент: Європа</span>
          <span>Країна: Україна</span>
          <span>Місто: Львів</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer