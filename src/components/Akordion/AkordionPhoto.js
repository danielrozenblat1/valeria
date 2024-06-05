import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (

    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 2px 15px 0px rgba(87, 0, 140, 0.2)',
          width: "100%",
          margin: "auto",
          background:"linear-gradient(135deg, rgba(31,130,167,0.5545868005405288) 0%, rgba(119,255,254,0.5013655120251226) 100%)",
  
          display: "flex",
          flexDirection: "column",
          
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              padding:"5px 0",
              color: 'black', // Apply black color to content
              fontFamily: 'AssistantR',
              direction: "rtl",
              fontSize:18
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography itemProp="headline">{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'AssistantR' , fontSize:18}} itemProp="description">{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
     
    <div className={styles.title} id="שאלות נפוצות" itemProp="mainEntity" itemScope itemType="https://schema.org/WebPage">שאלות נפוצות</div>
      <DropdownAccordion title="איפה אני יכול להשתמש בתמונות שאקבל ממך?" content="בכל מקום שתרצו:)
אני מעבירה לך את כל החומרים לאחר הצילומים, אתם בוחרים כמות מסויימת לעריכה ומשם תוכלו לעלות את התמונות חופשי ברשתות החברתיות/ אתר/ להדפיס על המוצר וכו" />
      <DropdownAccordion title="איך את יודעת להבליט כל עסק מול המצלמה ?" content="לפני הצילומים אנחנו עושים שיחה, אני מכירה אתכם ואת העסק שלכם, ומחפשת רפרנסים מדויקים ולוקיישן לצילומים שיעברו ברמה הגבוהה ביותר ! אני תמיד שמחה לעזור גם בבחירת לוקים/אביזרים וכו׳" />
      <DropdownAccordion title="אני מוכר מוצר ולא את עצמי אני עדיין צריך לעשות צילומי תדמית?" content="בוודאי:) 
כל הרעיון שהלקוחות יכירו את מי שעומד מאחורי המותג. מאוד חשוב ליצור חיבור אישי בין הצרכן למותג" />
      <DropdownAccordion title="אני חייב להגיע לסטודיו/למיקום שאת בוחרת לי? אם אני רוצה לעשות את הצילומים אצלי במשרדים?" content="אפשר לעשות גם צילומים במשרד שלכם! אנחנו נהיסגר על הלוקיישן במהלך השיחה.
במקרה שאין לכם מושג איפה להצטלם - אני אשלח לכם אופציות לבחירה :)" />
      {/* <DropdownAccordion title="איך עובד תהליך העבודה איתך ?" content="תהליך העבודה איתי מתחלק ל3 חלקים , תחילה תקבלו טופס פיצוח שיעזור לי להבין יותר עליך ,על העסק שלך ולנסח את הדברים בעמוד בצורה מקצועית , החלק השני הוא השיחה לתיאום הציפיות ועיצוב הדף שבה נסכם על המבנה והעיצוב של הדף שלכם והשלב השלישי הוא העבודה שלי :)" /> */}
  
      {/* <DropdownAccordion title="מה אני עושה אם אני אתקל בבעיה ? " content="אז סביר להניח שיהיו דברים מאתגרים, בשביל זה אני כאן. אני אלווה אותך בכל מהלך תוכנית ההכשרה מפתיחת החנות ועד לחנות יציבה ורווחית באיביי" />
      <Accordion
        disabled
        sx={{
          width: "50%",
          margin: "0 auto",
          background: "none",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography></Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  
  );
}
