import styles from './Hero.module.css';
import mascot from '../assets/header-img.svg';
import { TypeAnimation } from 'react-type-animation';
function Hero(){
    return (
        <div className={styles.container}>
            <div className= {styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Hi, I'm Damar</h1>
                    <p className={styles.heroDescription}>I'm a software engineering student at Gadjah Mada University. I'm passionate about <TypeAnimation 
                          sequence={[
                            'Backend Development.',
                            2000, 
                            'Machine Learning.',
                            2000,
                            'Game Development.',
                            2000
                          ]}
                          speed={40}
                          repeat={Infinity}/></p>
                    <button className={styles.buttonContact} onClick={()=>console.log("hello world")}>Contact me</button>
                </div>
                <div className={styles.mascot}><img src={mascot} alt="" /></div>
            </div>
            <div className={styles.boxShadow1}/>
            <div className={styles.boxShadow2}/>
        </div>
    )
}

export default Hero;