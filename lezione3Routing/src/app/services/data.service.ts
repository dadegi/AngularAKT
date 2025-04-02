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

    // JSON utenti
    private users = [
        {
            id: 1,
            name: 'Mario',
            surname: 'Rossi',
            role: 'admin',
            age: 37,
        },
        {
            id: 2,
            name: 'Nicola',
            surname: 'Bianchi',
            role: 'user',
            age: 28,
        },
        {
            id: 3,
            name: 'Anna',
            surname: 'Verdi',
            role: 'admin',
            age: 30,
        },
        {
            id: 4,
            name: 'Maria',
            surname: 'Neri',
            role: 'user',
            age: 25,
        },
    ];

    constructor() {}

    // Metodi funzionalità prodotti
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

    getCategories(): Observable<any[]> {
        const categories = this.products.map((product) => product.category);
        return of(categories).pipe(delay(100));
    }

    // Metodi funzionalità utenti
    getUsers(): Observable<any[]> {
        return of(this.users).pipe(delay(500));
    }

    getUserById(id: number): Observable<any> {
        const user = this.users.find((u) => u.id === id);
        return of(user).pipe(delay(250));
    }
}
