// Button.js

import styles from "./Button.module.css";

const Button = ({children}:any) => {
  return (
   <button className={styles.mutton} >
    {children}
   </button>
  );
};

export default Button;