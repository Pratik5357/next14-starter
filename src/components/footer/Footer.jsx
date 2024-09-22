import styles from './footer.module.css';

const Footer = ()=> {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Dexter</div>
            <div className={styles.text}>
                Dexter creative thoughts agency &copy; All rights reserved.
            </div>
        </div>
    )
}

export default Footer;