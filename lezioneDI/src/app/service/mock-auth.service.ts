import { Injectable } from '@angular/core';

@Injectable()
export class MockAuthService {
    login(): string {
        return 'Login effettuato col servizio mock';
    }
}
