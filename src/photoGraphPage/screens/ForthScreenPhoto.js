import styles from "./ForthScreenPhoto.module.css"
import {useEffect,useRef} from "react"
import valeria from "../../images/ולריה צילום.png"
import CustomButton from "../../components/button/CustomButton"

const ForthScreenPhoto=()=>{
  


return <>
<div className={styles.background}>
<div className={styles.description}>ובנוסף..</div>
<div className={styles.center}><img className={styles.image} src={valeria}/></div>
<div className={styles.more}>אני לא עושה רק צילומי תדמית , אם אתה מחפש  <br/> צילומי זוגות <br/> צילומי מותגים <br/> צילומי תכשיטים <br/> צילומי אופנה <br/> צילומי לייפסטייל <br/> אירועים (קטנים)</div>
</div>
<CustomButton text ="לחץ כאן !" message="היי ולריה, אני רוצה לשמוע עוד בנוגע לשאר השירותים שאת מציעה בנושא הצילום"/>
</>


}
export default ForthScreenPhoto