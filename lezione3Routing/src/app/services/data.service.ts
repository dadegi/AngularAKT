import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    // JSON prodotti
    private products = [
        {
            id: 1,
            name: 'Laptop',
            price: 1200,
            category: 'electronics',
            description: 'Laptop economico',
        },
        {
            id: 2,
            name: 'Smartphone',
            price: 500,
            category: 'electronics',
            description: 'Smartphone fascia media',
        },
        {
            id: 3,
            name: 'Headphones',
            price: 80,
            category: 'accessories',
            description: 'Cuffie',
        },
        {
            id: 4,
            name: 'Monitor',
            price: 300,
            category: 'accessories',
            description: 'Monitor 4k',
        },
    ];

    constructor() {}

    getProducts(): Observable<any[]> {
        return of(this.products).pipe(delay(500));
    }

    getProductById(id: number): Observable<any> {
        const product = this.products.find((el) => el.id === id);
        return of(product).pipe(delay(250));
    }

    getProductsByCategory(category: string): Observable<any[]> {
        const filtered = this.products.filter((el) => el.category === category);
        return of(filtered).pipe(delay(300));
    }
}
