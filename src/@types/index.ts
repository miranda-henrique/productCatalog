export type AccessToken = {
    exp: number;
    user_name: string;
    authorities: Role[];
};

export type AuthData = {
    username?: string;
    password?: string;
};

export type ButtonWithIconProps = {
    label: string;
    type: "button" | "reset" | "submit" | undefined;
    disabled?: boolean;
};

export type Category = {
    id: number,
    name: string,
};

export type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
};

export type NavLinkProps = {
    target: string;
    label: string;
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

export type ProductPriceProps = {
    price: string;
};

export type ProductProps = {
    productDetails: ProductItemProps,
};

export type ProductResponse = {
    products: ProductItemProps[],
};

export type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN';