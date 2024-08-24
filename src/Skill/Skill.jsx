import SkillComp from './SkillComp/SkillComp';
import data from '../skill.json';
import styles from './Skill.module.css';
import Marquee from "react-fast-marquee";

function Skill(){
    return (
        <div className={styles.container} id='skill'>
            <h2 className={styles.textSection}> Skill</h2>
            <div className={styles.listSkill}>
`                <Marquee play={true} autoFill={true} pauseOnHover={true}>
                {data.map((skill) => <SkillComp name={skill.name} image={skill.image} />)}
                </Marquee>`
            </div>
        </div>
    )
}

export default Skill;