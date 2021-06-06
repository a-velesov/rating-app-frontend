import {ButtonProps} from "./Button.props";
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({children, arrow = 'none', appereance, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appereance === 'primary',
                [styles.ghost]: appereance === 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down'
            })}
            >
              <ArrowIcon />
            </span>}
        </button>
    );
};