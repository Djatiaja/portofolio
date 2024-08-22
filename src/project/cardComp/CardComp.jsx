import styles from './CardComp.module.css';

function CardComp(props){
    return(
        <div className={styles.card}>
            <img src={props.img?props.img:"https://placehold.co/600x400"} alt={props.alt?props.alt:"project image"}></img>
            <div className={styles.info}>
                <h3>{props.title}</h3> 
                <p>{props.desc}</p>
            </div>
            <div className={styles.techStack}>
                {
                    props.techStack.map((tec) => <div className={styles.tech}>{tec}</div>)
                }
            </div>
            <div className={styles.sourceSection}>
                <a href={props.source}>
                    <button className={styles.button}>Source</button>
                </a>
            </div>
        </div>
    )
}
export default CardComp

// Know More IT Game
//Game ini menceritakan tentang anak it yang sedang menjalankan kunjungan ke perusahaan teknologi untuk mengetahui berbagai pekerjaan dalam bidang IT.