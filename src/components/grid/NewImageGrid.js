import styles from "./NewImageGrid.module.css"



import grid3 from "../../videos/ולריה רמידובסקי סרטוני מותגים 3.mp4"

import grid5 from "../../videos/ולריה רמידובסקי סרטוני מותגים 5.mp4"
import grid6 from "../../videos/ולריה רמידובסקי סרטוני מותגים 6.mp4"
import grid7 from "../../videos/ולריה רמידובסקי סרטוני מותגים 7.mp4"
import grid8 from "../../videos/ולריה רמידובסקי סרטוני מותגים 8.mp4"
import grid9 from "../../videos/ולריה רמידובסקי סרטוני מותגים 9.mp4"
import grid10 from "../../videos/ולריה רמידובסקי סרטוני מותגים 10.mp4"
import grid11 from "../../videos/ולריה רמידובסקי סרטוני מותגים 11.mp4"
import grid12 from "../../videos/ולריה רמידובסקי סרטוני מותגים 12.mp4"
import grid15 from "../../videos/ולריה רמידובסקי סרטוני מותגים 15.mp4"
import grid16 from "../../videos/ולריה רמידובסקי סרטוני מותגים 16.mp4"
 import grid14 from "../../videos/ולריה רמידובסקי סרטוני מותגים 14.mp4"

import { useEffect, useState } from "react"
import ScrollReveal from "scrollreveal"
import CustomButton from "../button/CustomButton"
const NewImagesGrid=()=>{

const [zoom,setZoom]=useState(false)


    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.image1}`, {
            duration: 600,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 100,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.image2}`, {
            duration:600,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.image3}`, {
            duration:600,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 100,
            scale: 1,
          });
    },[])
    return <>
<div className={styles.title}>איך זה נראה אתם שואלים?</div>
<div className={styles.description}>גללו למטה והתרשמו</div>
    <div className={styles.container}>
    <div className={styles.row2}>
    <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={grid16} type="video/mp4" />
                </video>
                <video className={styles.image1} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={grid15} type="video/mp4" />
                </video>
    <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={grid3} type="video/mp4" />
                </video>
                <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={grid14} type="video/mp4" />
                </video>
                <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={grid5} type="video/mp4" />
                </video>
                <video className={styles.image1} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={grid6} type="video/mp4" />
                </video>
   
    </div>
    <div className={styles.row2}>
    <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={grid7} type="video/mp4" />
                </video>
                <video className={styles.image1} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={grid8} type="video/mp4" />
                </video>
    <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={grid9} type="video/mp4" />
                </video>
                <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={grid10} type="video/mp4" />
                </video>
                <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={grid11} type="video/mp4" />
                </video>
                <video className={styles.image1} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={grid12} type="video/mp4" />
                </video>
        
    </div>
    {/* <div className={styles.row}>
    <img className={styles.image3}  alt="ולריה רמידובסקי UGC"src={image6}/>
    </div> */}
    {/* <div className={styles.row2}>


    </div> */}
  
    
    </div>
    <CustomButton text="לחץ כאן לעוד פרטים"/>
    </>
    }
    export default NewImagesGrid