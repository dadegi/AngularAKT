import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-product-category',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './product-category.component.html',
    styleUrl: './product-category.component.css',
})
export class ProductCategoryComponent implements OnInit {
    category: string = '';
    filteredProducts: any[] = [];
    categories: any[] = [];
    founded: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private dataSrv: DataService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .pipe(
                switchMap((params) => {
                    this.category = params.get('category') ?? '';
                    return this.dataSrv.getProductsByCategory(this.category);
                })
            )
            .subscribe((products) => {
                this.filteredProducts = products;
                if (this.filteredProducts.length === 0) {
                    this.founded = false;
                    this.router.navigate(['/**']);
                } else {
                    this.founded = true;
                }
            });
    }
}
