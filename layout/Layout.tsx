import {LayoutProps} from "./Layout.props";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Sidebar} from "./sidibar/Sidebar";
import styles from './Layout.module.css';
import {FunctionComponent} from "react";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return <div className={styles.wrapper}>
        <Header className={styles.header} />
        <Sidebar className={styles.sidebar} />
        <div className={styles.body}>
            {children}
        </div>
        <Footer className={styles.footer} />
    </div>;
};

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent (props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};