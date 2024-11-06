// Button.js

import styles from "./Button2.module.css";

const Button2 = ({children}:any) => {
  return (
   <button className={styles.mutton} >
    {children}
   </button>
  );
};

export default Button2;