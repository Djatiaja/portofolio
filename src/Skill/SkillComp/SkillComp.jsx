import styles from './SkillComp.module.css';

function SkillComp(props) {
    return (
        <div className={styles.container}><div className={styles.Circle}><img src={props.image} alt="" /></div>
            <h3 className={styles.SkillName}>{props.name}</h3> </div>
    )
}

export default SkillComp;   