import { Routes } from '@angular/router';

export const userRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('../components/users/user-list/user-list.component').then(
                (m) => m.UserListComponent
            ),
    },
    {
        path: ':id',
        loadComponent: () =>
            import(
                '../components/users/user-details/user-details.component'
            ).then((m) => m.UserDetailsComponent),
        children: [
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full',
            },
            {
                path: 'profile',
                loadComponent: () =>
                    import(
                        '../components/users/user-profile/user-profile.component'
                    ).then((m) => m.UserProfileComponent),
            },
            {
                path: 'settings',
                loadComponent: () =>
                    import(
                        '../components/users/user-settings/user-settings.component'
                    ).then((m) => m.UserSettingsComponent),
            },
        ],
    },
];
