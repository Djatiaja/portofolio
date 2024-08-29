import CardComp from './cardComp/CardComp';
import styles from './project.module.css';
import projectData from '../project.json';
import { useState } from 'react';

function Project(){
    const [showMore, setShowMore] = useState(false);

    function showMoreHandler(){
        if(showMore) {
            setShowMore(false);
            return;
        }
        setShowMore(true);
    }

    return (
        <div className={styles.container} id='project' >
            <h2>PROJECT</h2>
            <div className={styles.projectSection}>
            {
                projectData.projects.map((project, index) =>
                    !showMore && index < 3? (
                        <CardComp 
                        img={project.img}
                        alt={project.alt}
                        title={project.title}
                        desc={project.desc}
                        techStack={project.techStack}
                        source={project.source}
                        demo={project.live}
                        />
                    ) : showMore && (
                        <CardComp 
                        img={project.img}
                        alt={project.alt}
                        title={project.title}
                        desc={project.desc}
                        techStack={project.techStack}
                        source={project.source}
                        demo={project.live}
                        />   
                    )
                )
                   
                    
            }
            </div>

            {
                projectData.projects.length > 3 ? (
                    showMore ?(
                        <button className={styles.More} onClick={showMoreHandler}>Less</button>
                    ):(
                    <button className={styles.More} onClick={showMoreHandler}>More</button>
                )
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