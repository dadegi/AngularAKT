import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
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

    constructor(private route: ActivatedRoute, private dataSrv: DataService) {}

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
            });
    }
}
