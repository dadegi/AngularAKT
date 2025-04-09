import { Component, inject, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
    private productSrv = inject(ProductService);
    private cartSrv = inject(CartService);
    productId!: number;

    // Utilizzo del ModelSignal (signal scrivibile) per recuperare e gestire l'id dall'URL
    id = signal<number>(0);

    quantity = 1;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.id.set(Number(this.route.snapshot.paramMap.get('id')));
        effect(() => {
            const currentProduct = this.product();
            if (currentProduct) {
                console.log(
                    `Visualizzazione prodotto: ${currentProduct!.name}`
                );
            }
        });
    }

    product = computed(() => {
        return this.productSrv.getProductById(this.id());
    });

    incrementQuantity() {
        if (this.quantity < 10) {
            this.quantity++;
        }
    }

    decrementQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }

    addToCart() {
        const currentProduct = this.product();
        if (currentProduct) {
            this.cartSrv.addToCart(currentProduct, this.quantity);
        }
    }
}
