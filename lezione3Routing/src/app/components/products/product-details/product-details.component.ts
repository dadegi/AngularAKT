import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
    product: any = null;
    founded: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataSrv: DataService
    ) {}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.dataSrv.getProductById(id).subscribe(
            (product) => {
                this.product = product;
                if (this.product === undefined) {
                    this.router.navigate(['/**']);
                    this.founded = false;
                } else {
                    this.founded = true;
                }
            },
            (error) => this.router.navigate(['/**'])
        );
    }
}
