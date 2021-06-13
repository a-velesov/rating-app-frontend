import {LayoutProps} from "./Layout.props";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Sidebar} from "./sidibar/Sidebar";
import {FunctionComponent} from "react";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return <>
        <Header />
        <div>
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
        <Footer />
    </>;
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