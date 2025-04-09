import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
})
export class CartComponent {
    private cartSrv = inject(CartService);

    readonly cartItems = this.cartSrv.getCartItems();
    readonly cartTotal = this.cartSrv.cartTotal;
    readonly cartItemsCount = this.cartSrv.cartItemCount;

    updateQuantity(productId: number, quantity: number) {
        this.cartSrv.updateQuantity(productId, Number(quantity));
    }

    removeFromCart(productId: number) {
        this.cartSrv.removeFromCart(productId);
    }

    clearCart() {
        this.cartSrv.clearCart();
    }
}
