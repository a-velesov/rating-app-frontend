import {ProductProps} from "./Product.props";
import styles from './Product.module.css';
import {Card} from "../Card/Card";
import {Rating} from "../Rating/Rating";
import {Tag} from "../Tag/Tag";
import {Button} from "../Button/Button";
import {currencyHandler, decOfReviews} from "../../helpers";
import {Divider} from "../Divider/Divider";
import Image from "next/image";

export const Product = ({product}: ProductProps): JSX.Element => {
    return (
        <Card className={styles.product}>
            <div className={styles.logo}>
                <Image
                    width={70}
                    height={70}
                    src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`}
                    alt={product.title} />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {currencyHandler(product.price)}
                {product.oldPrice && <Tag className={styles.oldPrice}
                                          color='green'>{currencyHandler(product.price - product.oldPrice)}</Tag>}
            </div>
            <div className={styles.credit}>{currencyHandler(product.credit)}
                <span className={styles.month}>/мес.</span>
            </div>
            <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
            <div className={styles.tags}>{product.categories.map(c =>
                <Tag key={c} color='ghost' className={styles.category}>{c}</Tag>)}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>{product.reviewCount} {decOfReviews(product.reviewCount)}</div>
            <Divider className={styles.hr}/>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
                {product.characteristics.map(c => (
                    <div className={styles.characteristics} key={c.name}>
                   <span className={styles.characteristicsName}>{c.name}</span>
                   <span className={styles.characteristicsDots}/>
                        <span>{c.value}</span>
                    </div>
                ))}
            </div>
            <div className={styles.advBlock}>
                {product.advantages && (
                    <div className={styles.advantages}>
                        <div className={styles.advTitle}>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>
                )}
                {product.disadvantages && (
                    <div className={styles.disadvantages}>
                        <div className={styles.advTitle}>Недостатки</div>
                        <div>{product.disadvantages}</div>
                    </div>
                )}
            </div>
            <Divider className={styles.hr}/>
            <div className={styles.actions}>
                <Button appereance='primary'>Узнать подробнее</Button>
                <Button appereance='ghost' arrow='right' className={styles.reviewButton}>Читать отзывы</Button>
            </div>
        </Card>
    );
};