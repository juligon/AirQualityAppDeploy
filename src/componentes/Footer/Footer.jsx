import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (

    <div className={classes.Footer}>
      <h6 className={classes.Footer_h6}>powered by 
      <a className={classes.Link} href="https://www.linkedin.com/in/juligon13" target="_blank" rel='noreferrer'> Juligon</a> & 
      <a className={classes.Link} href="https://ar.linkedin.com/in/yamilhamui" target="_blank" rel='noreferrer'> YamilH</a>
      </h6>
    </div>
  );
}

export default Footer;