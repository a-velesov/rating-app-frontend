import cn from 'classnames';
import styles from './Hhdata.module.css';
import {Card} from "../Card/Card";
import RateIcon from './rate.svg';
import {HhData} from "../../interfaces/page.interface";
import { currencyHandler } from '../../helpers';

export const Hhdata = ({count, juniorSalary, middleSalary, seniorSalary}: HhData): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{currencyHandler(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{currencyHandler(middleSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Профессионал</div>
                    <div className={styles.salaryValue}>{currencyHandler(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                    </div>
                </div>
            </Card>
        </div>
    );
};