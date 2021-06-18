import {DetailedHTMLProps, HTMLAttributes} from "react";
import {ProductModel} from "../../interfaces/product.interface";

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    product: ProductModel;
}