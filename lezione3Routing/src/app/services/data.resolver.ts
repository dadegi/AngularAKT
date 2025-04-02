import {
    ResolveFn,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

export const dataResolver: ResolveFn<boolean> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<any> => {
    const dataSrv = inject(DataService);

    // Determino quali dati fornire in base all'URL
    if (state.url.includes('/products')) {
        return dataSrv.getProducts();
    } else if (state.url.includes('/users')) {
        return dataSrv.getUsers();
    }

    // Default
    return dataSrv.getProducts();
};
