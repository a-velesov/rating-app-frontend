import {withLayout} from "../../layout/Layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {MenuItem} from "../../interfaces/menu.interface";
import {TopLevelCategory, TopPageModel} from "../../interfaces/page.interface";
import {ParsedUrlQuery} from "querystring";
import {ProductModel} from "../../interfaces/product.interface";
import {firstLevelMenu} from "../../helpers/menu";
import {TopPageComponent} from "../../page-components";

function TopPage({firstCategory, page, products}: TopPageProps): JSX.Element {
    return <TopPageComponent firstCategory={firstCategory} page={page} products={products} />;
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    for (const e of firstLevelMenu) {
        const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory: e.id});
        paths = paths.concat(menu.flatMap(m => m.pages.map(p => `/${e.route}/${p.alias}`)));
    }
    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    const firstCategoryItem = firstLevelMenu.find(m => m.route === params?.type);
    if (!params || !firstCategoryItem) return {
        notFound: true
    };

    try {
        const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: firstCategoryItem.id
        });
        const {data: page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
        const {data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find/', {
            category: page.category,
            limit: 10
        });

        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        };
    } catch {
        return {
            notFound: true
        };
    }

};

interface TopPageProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}