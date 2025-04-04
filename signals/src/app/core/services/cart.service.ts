import { Injectable, signal, computed, effect } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    // Signal per lo stato del carrello
    private cartItemsSignal = signal<CartItem[]>([]);

    readonly cartTotal = computed(() => {
        return this.cartItemsSignal().reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
        );
    });

    readonly cartItemCount = computed(() => {
        return this.cartItemsSignal().reduce(
            (count, item) => count + item.quantity,
            0
        );
    });

    constructor() {
        // Gestione side effects, ad esmepio un coneols.log e una memorizzaszione localStorage
        effect(() => {
            const items = this.cartItemsSignal();
            localStorage.setItem('cart', JSON.stringify(items));
            console.log(`Carrello aggiornato con ${items.length} articoli`);
        });

        this.loadCart();
    }

    private loadCart() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                const parsed = JSON.parse(savedCart);
                this.cartItemsSignal.set(parsed);
            } catch (e) {
                console.error(`Errore nella lettura dei dati: ${e}`);
                localStorage.removeItem('cart');
            }
        }
    }

    // Cosa c'è nel carrello?
    getCartItems() {
        return this.cartItemsSignal;
    }

    // Aggiunta prodotti al carrello
    addToCart(product: Product, quantity: number = 1) {
        this.cartItemsSignal.update((items) => {
            const existingItemIndes = items.findIndex(
                (item) => item.product.id === product.id
            );

            if (existingItemIndes >= 0) {
                const updatedItems = [...items];
                updatedItems[existingItemIndes] = {
                    ...updatedItems[existingItemIndes],
                    quantity:
                        updatedItems[existingItemIndes].quantity + quantity,
                };
                return updatedItems;
            } else {
                return [...items, { product, quantity }];
            }
        });
    }

    // Rimozione prodotto dal carrello
    removeFromCart(productId: number) {
        this.cartItemsSignal.update((items) =>
            items.filter((item) => item.product.id !== productId)
        );
    }

    // Aggiorna quantità prodotto
    updateQuantity(productId: number, quantity: number) {
        if (quantity <= 0) {
            this.removeFromCart(productId);
            return;
        }

        this.cartItemsSignal.update((items) => {
            return items.map((item) => {
                if (item.product.id === productId) {
                    return { ...item, quantity };
                }
                return item;
            });
        });
    }

    // Svuota carrello
    clearCart() {
        this.cartItemsSignal.set([]);
        localStorage.removeItem('cart');
    }
}
