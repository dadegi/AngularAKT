import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceService {
    login(): string {
        return 'Login effettuato col servizio reale';
    }
}
