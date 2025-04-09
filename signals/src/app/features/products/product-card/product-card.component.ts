import { Component, input, output } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
    // Utilizzo dei signal per sostituire @Input e @Output
    product = input.required<Product>();
    addToCart = output<Product>();

    addToCartClick() {
        this.addToCart.emit(this.product());
    }
}
