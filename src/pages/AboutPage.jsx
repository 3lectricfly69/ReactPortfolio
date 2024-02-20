// header, link React/dom/css/footer/
import "../components/UI/About.css";

const styles = {
    card: {
    margin: 20,
    background: '#e8eaf6',
    },
    heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
    },
    content: {
    padding: 20,
    },
};

  // In `Card`, we can assign a style from an object by using curly braces
  // We are assigning the card, heading, and content all from our `style` object
const AboutPage = () => {
    return (
    <div style={styles.card} className="AboutPageCard" >
        <div style={styles.heading} className="Heading">Descriptive synopsis:</div>
        <div style={styles.content} id="Msg">
        `About description / message here`
        </div>
    </div>
    )
}

export default AboutPage;






export default function About() {
    return (
    <div></div>
    )
};