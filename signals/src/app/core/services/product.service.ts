import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    // Questo signal memorizza i dati
    private productSignal = signal<Product[]>([
        {
            id: 1,
            name: 'Laptop Pro',
            description: 'Potente laptop per professionisti',
            price: 1299.99,
            imageUrl: 'https://via.placeholder.com/300',
            category: 'computers',
        },
        {
            id: 2,
            name: 'Smartphone Plus',
            description: 'Smartphone di ultima generazione',
            price: 799.99,
            imageUrl: 'https://via.placeholder.com/300',
            category: 'phones',
        },
        {
            id: 3,
            name: 'Tablet Mini',
            description: 'Tablet leggero e portatile',
            price: 499.99,
            imageUrl: 'https://via.placeholder.com/300',
            category: 'tablets',
        },
        {
            id: 4,
            name: 'Smart Watch',
            description: 'Orologio intelligente con monitoraggio fitness',
            price: 299.99,
            imageUrl: 'https://via.placeholder.com/300',
            category: 'wearables',
        },
        {
            id: 5,
            name: 'Cuffie Wireless',
            description: 'Cuffie con cancellazione del rumore',
            price: 199.99,
            imageUrl: 'https://via.placeholder.com/300',
            category: 'audio',
        },
    ]);

    // Questo signal gestirà lo stato
    private selectedCategorySignal = signal<string | null>(null);

    // Ottimizzazione delle prestazioni con computed signal
    readonly products = computed(() => {
        const category = this.selectedCategorySignal();
        if (!category) {
            return this.productSignal();
        }
        return this.productSignal().filter(
            (product) => product.category === category
        );
    });

    getProducts() {
        return this.products;
    }

    getProductById(id: number) {
        return (
            this.productSignal().find((product) => product.id === id) || null
        );
    }

    // Popolamento del selectedCategorySignal
    setSelectedCategory(category: string | null) {
        this.selectedCategorySignal.set(category);
    }

    // Restituzione della categoria selezionata
    getSelectedCategory() {
        return this.selectedCategorySignal;
    }

    // Aggiunta di un nuovo prodotto (mutazione dello stato)
    addProduct(product: Product) {
        this.productSignal.update((products) => [...products, product]);
    }
}
