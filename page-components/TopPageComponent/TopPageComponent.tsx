import {TopPageComponentProps} from "./TopPageComponent.props";
import {Hhdata, Htag, Tag} from "../../components";
import styles from './TopPageComponent.module.css';

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>
                    {page.title}
                </Htag>
                {products && <Tag color='grey' size='m'>{products.length}</Tag>}
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.title}>
                <Htag tag='h2'>
                    Вакансии - {page.category}
                    <Tag color='red' size='m'>hh.ru</Tag>
                </Htag>
            </div>
            <Hhdata {...page.hh} />
        </div>
    );
};