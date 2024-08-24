import CardComp from './cardComp/CardComp';
import styles from './project.module.css';
import projectData from '../project.json';

function Project(){
    console.log(projectData);
    return (
        <div className={styles.container} >
            <h2>PROJECT</h2>
            <div className={styles.projectSection}>
            {
                projectData.projects.map((project) =>
                    <CardComp 
                        img={project.img}
                        alt={project.alt}
                        title={project.title}
                        desc={project.desc}
                        techStack={project.techStack}
                        source={project.source}
                    />
                )
            }
            </div>

            {
                projectData.projects.length > 3 ? (
                    <button className={styles.More}>More</button>
                ) : (
                    <div className={styles.gap}></div>
                )
            }
        </div>
    )
}

// <CardComp 
// img="https://placehold.co/600x400"
// alt="project image"
// title="Know More IT Game"
// desc="Game ini menceritakan tentang anak it yang sedang menjalankan kunjungan ke perusahaan"
// techStack={["Unity", "C#"]}
// source=""
// />

export default Project;