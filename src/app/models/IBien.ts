export interface IBien {
    id: number;
    title: string;
    description: string;
    surface: number;
    rooms: number;
    bedrooms: number;
    floor: number;
    price: number;
    heat: string;
    city: string;
    address: string;
    postal_code: string;
    sold: boolean;
    created_at: Date;
    image_front: File;
    type: string;

}