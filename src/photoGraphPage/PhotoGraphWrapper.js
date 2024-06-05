import styles from "./PhotoGraphWrapper.module.css"
import {useEffect,useRef} from "react"
import FirstScreenPhoto from "./screens/FirstScreenPhoto"
import NavBar from "../components/NavBar/NavBar"
import FifthPageHome from "../homePage/screens/FifthPageHome"
import ThirdScreenPhoto from "./screens/ThirdScreen"
import BasicAccordion from "../components/Akordion/AkordionPhoto"
import ByMe from "../components/ByMe/ByMe"
import ForthScreenPhoto from "./screens/ForthScreenPhoto"


const PhotoGraphWrapper=()=>{
  


return <>
<div className={styles.background}>
<NavBar/>
<FirstScreenPhoto/>
<FifthPageHome title="יש צילומי סטודיו" title2="ויש צילומי חוץ"/>
<ThirdScreenPhoto/>
<ForthScreenPhoto/>
<BasicAccordion/>
<ByMe/>
</div>
</>


}
export default PhotoGraphWrapper