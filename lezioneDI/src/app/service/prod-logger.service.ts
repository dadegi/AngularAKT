import { Injectable } from '@angular/core';

@Injectable()
export class ProdLoggerService {
    log(message: string) {
        console.log(`Logger di produzione: ${message}`);
    }
}
