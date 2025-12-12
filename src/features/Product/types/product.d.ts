export interface IProductProps {
    _id:                ID;
    name:               string;
    description:        string;
    model:              string;
    price:              number;
    discount:           number;
    stock:              number;
    popularity?:        string;
    colors:             string[];
    sizes:              string[];
    category:           string;
    image_url:          string;
    tags:               string[];
    brand:              string;
    relatedProducts:    any[];
    searchableKeywords: string[];
    rating:             Rating;
    isActive:           boolean;
    createdAt:          AtedAt;
    updatedAt:          AtedAt;
    __v:                number;
}

export interface ID {
    $oid: string;
}

export interface AtedAt {
    $date: Date;
}

export interface Rating {
    average: number;
    count:   number;
}
