import {useContext} from "react";
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import {TopLevelCategory} from "../../interfaces/page.interface";
import styles from './Menu.module.css';
import cn from 'classnames';
import Link from "next/link";
import {useRouter} from "next/router";

const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
    {route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products},
];

export const Menu = () => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <a>
                                <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: m.id === firstCategory
                                })}
                                >
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                            </a>
                        </Link>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };
    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        const openSecondLevel = (secondCategory: string) => {
            setMenu && setMenu(menu.map(m => {
                if (m._id.secondCategory === secondCategory) {
                    m.isOpened = !m.isOpened;
                }
                return m;
            }));
        };

        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }

                    return (
                        <div key={m._id.secondCategory}>
                            <div
                                className={styles.secondLevel}
                                onClick={() => openSecondLevel(m._id.secondCategory)}
                            >
                                {m._id.secondCategory}
                            </div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: m.isOpened
                            })}
                            >
                                {buildThreeLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
    const buildThreeLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <div key={p.alias}>
                    <Link href={`/${route}/${p.alias}`}>
                        <a className={cn(styles.thirdLevel, {
                            [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
                        })}
                        >
                            {p.category}
                        </a>
                    </Link>
                </div>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};