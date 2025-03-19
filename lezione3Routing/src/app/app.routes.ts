import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/home/home.component').then(
                (m) => m.HomeComponent
            ),
    },
    {
        path: 'products',
        loadChildren: () =>
            import('./routes/product.routes').then((m) => m.productRoutes)
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./components/about/about.component').then(
                (m) => m.AboutComponent
            ),
    },
    {
        path: '**',
        loadComponent: () =>
            import('./components/not-found/not-found.component').then(
                (m) => m.NotFoundComponent
            ),
    },
];
