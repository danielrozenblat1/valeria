import styles from "./ToInstagram.module.css"
import {useEffect,useRef} from "react"
import valeria from "../../images/ולריה רמידובסקי אינסטגרם.png"

const ToInstagram=()=>{
  
const handleClick=()=>{
    window.open("https://www.instagram.com/valeriaremydovsky/")
}

return <>
<div className={styles.background}>
<div className={styles.description}>אני מחכה לכם באינסטגרם</div>
<div className={styles.more}>לחצו על התמונה ותעברו ישירות לאינסטגרם שלי..</div>
<div className={styles.center} ><img onClick={handleClick} className={styles.image} src={valeria}/></div>

</div>
</>


}
export default ToInstagram