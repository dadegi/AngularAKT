import { Routes } from '@angular/router';
import { dataResolver } from './services/data.resolver';

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
            import('./routes/product.routes').then((m) => m.productRoutes),
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./components/about/about.component').then(
                (m) => m.AboutComponent
            ),
    },
    {
        path: 'users',
        loadChildren: () =>
            import('./routes/user.routes').then((m) => m.userRoutes),
        resolve: { users: dataResolver },
    },
    {
        path: '**',
        loadComponent: () =>
            import('./components/not-found/not-found.component').then(
                (m) => m.NotFoundComponent
            ),
    },
];
