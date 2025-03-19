import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
    products: any[] = [];
    showingCategory = false;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.route.data.subscribe((data) => {
            this.products = data['products'];
        });

        this.router.events.subscribe(() => {
            this.showingCategory = this.router.url.includes('/category');
        });
    }

    filterByCategory(category: string): void {
        if (category === 'all') {
            this.router.navigate(['/products']);
        } else {
            this.router.navigate(['/products/category', category]);
        }
    }

}
