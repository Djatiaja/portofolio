import style from './footer.module.css';

function Footer() {
    let date = new Date();
    return (
        <footer className={style.container}>
            <p className={style.copyright}>© {date.getFullYear()} Djatiaja. All right reserved</p>
        </footer>
    );
}
export default Footer;