import styles from './Layout.module.css';
import {Outlet} from "react-router-dom";
import { Header } from './Header/Header';

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header/>
            <main className={styles.container}>
                <Outlet/>
            </main>
        </div>
    );
};