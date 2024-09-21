import Links from "./links/Links";
import Styles from "./navbar.module.css"

const Navbar = ()=> {
    return (
        <div className={Styles.container}>
            <div className={Styles.logo}>Dexter</div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar;