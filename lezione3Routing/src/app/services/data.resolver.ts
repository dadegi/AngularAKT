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
    return dataSrv.getProducts();
};
