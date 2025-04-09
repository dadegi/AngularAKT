import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { ProductCardComponent } from './../product-card/product-card.component';
import { Product } from '../../../core/models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductCardComponent, FormsModule],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
    private productSrv = inject(ProductService);
    private cartSrv = inject(CartService);

    // Utilizzo diretto del signal products
    products = this.productSrv.getProducts();

    // Signal derivato per le singole categorie
    categories = signal<string[]>([]);

    // Stato temporaneo del component
    selectedCategory: string | null = null;

    ngOnInit(): void {
        const uniqueCategories = [
            ...new Set(
                this.productSrv
                    .getProducts()()
                    .map((p) => p.category)
            ),
        ];
        this.categories.set(uniqueCategories);
    }

    filterByCategory(category: string | null) {
        if (category === 'null') {
            category = null;
        }
        this.productSrv.setSelectedCategory(category);
    }

    addToCart(product: Product) {
        this.cartSrv.addToCart(product);
    }
}
