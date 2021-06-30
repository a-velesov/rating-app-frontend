import {HeaderProps} from "./Header.props";
import Logo from './rate.svg';

export const Header = ({...props}: HeaderProps): JSX.Element => {
    return <>
        <div {...props}>
            <Logo />
        </div>
    </>;
};