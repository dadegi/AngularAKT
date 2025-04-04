import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
    },
    {
        path: 'about',
        loadChildren: () =>
            import('./features/about/about.routes').then((m) => m.ABOUT_ROUTES),
    },
    {
        path: 'products',
        loadChildren: () =>
            import('./features/products/products.routes').then(
                (m) => m.PRODUCTS_ROUTES
            ),
    },
    {
        path: 'cart',
        loadChildren: () =>
            import('./features/cart/cart.routes').then((m) => m.CART_ROUTES),
    },
    {
        path: 'contact',
        loadChildren: () =>
            import('./features/contact/contact.routes').then(
                (m) => m.CONTACT_ROUTES
            ),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
