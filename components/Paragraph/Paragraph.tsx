import {ParagraphProps} from "./Paragraph.props";
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({children, size, className, ...props}: ParagraphProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size === 's',
                [styles.l]: size === 'l',
                [styles.m]: size === 'm',
            })}
            {...props}
        >
            {children}
        </p>
    );
};