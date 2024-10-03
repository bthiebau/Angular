export interface ProductHttp {
    id: number,
    title: string,
    price: number,
    description: string,
    category: {
        id: number,
        name: string,
        image: string
    },
    images: []
}

export interface Product {
    id: number,
    title: String,
    price: number,
    description: string,
    category: {
        name: string,
        image: string
    },
    images: []
}

export namespace Product {
export function fromHttp(productHttp: ProductHttp): Product {
    return {
        id: productHttp.id,
        title: productHttp.title,
        price: productHttp.price,
        description: productHttp.description,
        category: productHttp.category ? {
            name: productHttp.category.name,
            image: productHttp.category.image
        } : null,
        images: productHttp.images
    }
}
}