export interface IProduct {
    id: string;
    object: string;
    active: boolean;
    attributes: any[];
    created: number;
    default_price: string;
    description: any;
    images: string[];
    livemode: boolean;
    metadata: any;
    name: string;
    package_dimensions: any;
    shippable: any;
    statement_descriptor: any;
    tax_code: any;
    type: string;
    unit_label: any;
    updated: number;
    url: any;
    price?: number;
}

export type CartContextType = {
    cart: IProduct[],
    addToCart: (product: IProduct) => void,
    deleteItemCart: (product: IProduct) => void,
    clearCart: (product: IProduct) => void
}