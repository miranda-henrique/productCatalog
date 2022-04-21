export type NavLinkProps = {
    target: string;
    label: string;
};

export type ButtonWithIconProps = {
    label: string;
    type: "button" | "reset" | "submit" | undefined;
};

export type ProductPriceProps = {
    price: string;
};

export type Category = {
    id: number,
    name: string,
};

export type ProductItemProps = {
    id: number,
    name: string,
    description: string,
    price: number,
    imgUrl: string,
    date: string,
    categories: Category[],
};

export type ProductResponse = {
    products: ProductItemProps[],
};

export type ProductProps = {
    productDetails: ProductItemProps,
};

export type AuthData = {
    username?: string;
    password?: string;
};