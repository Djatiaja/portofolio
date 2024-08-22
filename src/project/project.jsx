import CardComp from './cardComp/CardComp';
import styles from './project.module.css';

function Project(){
    return (
        <div className={styles.container} >
            <h2>PROJECT</h2>
            <div className={styles.projectSection}>
                <CardComp 
                img="https://placehold.co/600x400"
                alt="project image"
                title="Know More IT Game"
                desc="Game ini menceritakan tentang anak it yang sedang menjalankan kunjungan ke perusahaan"
                techStack={["Unity", "C#"]}
                source=""
                />
            </div>
            <button className={styles.More}>More</button>
        </div>
    )
}
export default Project;