import { Routes } from '@angular/router';
import { dataResolver } from '../services/data.resolver';

export const productRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import(
                '../components/products/products-list/products-list.component'
            ).then((m) => m.ProductsListComponent),
        resolve: { products: dataResolver },
        children: [
            {
                path: 'category/:category',
                loadComponent: () =>
                    import(
                        '../components/products/product-category/product-category.component'
                    ).then((m) => m.ProductCategoryComponent),
            },
        ],
    },
    {
        path: ':id',
        loadComponent: () =>
            import(
                '../components/products/product-details/product-details.component'
            ).then((m) => m.ProductDetailsComponent),
    },
];
