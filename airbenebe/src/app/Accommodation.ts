export interface Accommodation {
    id: string;
    title: string;
    description: string;
    type: string;
    state: string;
    city: string;
    street: string;
    number: number;
    zipcode: string;
    capacity: number;
    rooms: number;
    bathrooms: number;
    images: string[];
    price: number;
}