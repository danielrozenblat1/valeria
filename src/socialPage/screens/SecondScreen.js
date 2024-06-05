import styles from "./SecondScreen.module.css"
import time from "../../icons/wired-lineal-61-camera (1).json"
import free from "../../icons/wired-lineal-61-camera (1).json"
import classic from "../../icons/wired-lineal-61-camera (1).json"
import Box from "../../components/box/Box"
const SecondScreenSocial=()=>{
    return <>
    <div className={styles.title}>"אני יכול לנהל את הסושיאל שלי בעצמי"</div>
    <div className={styles.description}>אתה לגמרי יכול !</div>
    <div className={styles.but}>אבל אתה מאבד 3 דברים</div>
    <div className={styles.row}>
    <Box title="זמן" icon={time} description="ניהול סושיאל זאת משימה שדורשת זמן והשקעה מתמדת. כאשר בעל עסק עושה זאת בעצמו, הוא עלול למצוא את עצמו משקיע יותר מדי זמן בזה ופחות בניהול העסק עצמו"/>
    <Box title="חופש" icon={free} description="העסק יכול להינות מתוכן איכותי, ממוקד, מקצועי ואסתטי. השקעה באיש מקצוע עם ציוד מקצועי יכולה להביא לתוצאות טובות יותר בטווח הארוך ולסייע בצמיחת העסק בצורה יעילה יותר."/>
    <Box title="אלגנטיות" icon={classic} description="אנשי מקצוע בתחום הסושיאל מביאים איתם ידע וניסיון רחב בתחום. הם מכירים את הפלטפורמות , את הטרנדים , ואת הטכניקות הכי יעילות לניהול  והגעה לקהלי יעד"/>
    </div>
    </>
}
export default SecondScreenSocial