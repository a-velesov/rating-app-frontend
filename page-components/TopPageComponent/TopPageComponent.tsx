import {TopPageComponentProps} from "./TopPageComponent.props";
import {Advantages, Hhdata, Htag, Product, Sort, Tag} from "../../components";
import styles from './TopPageComponent.module.css';
import {TopLevelCategory} from "../../interfaces/page.interface";
import {useReducer} from "react";
import {sortReducer} from "./sort.reducer";
import {SortEnum} from "../../components/Sort/Sort.props";

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort});
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>
                    {page.title}
                </Htag>
                {products && <Tag color='grey' size='m'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div>
                {sortedProducts && sortedProducts.map(s => (<Product key={s._id} product={s} />))}
            </div>
            <div className={styles.title}>
                <Htag tag='h2'>
                    Вакансии - {page.category}
                    <Tag color='red' size='m'>hh.ru</Tag>
                </Htag>
            </div>
            {firstCategory === TopLevelCategory.Courses && page.hh && <Hhdata {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag='h2'>Преимущества</Htag>
                <Advantages advantages={page.advantages} />
            </>}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(tag => <Tag key={tag} color='primary'>{tag}</Tag>)}
        </div>
    );
};