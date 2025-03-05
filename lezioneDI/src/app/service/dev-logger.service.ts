import { Injectable } from '@angular/core';

@Injectable()
export class DevLoggerService {
    log(message: string) {
        console.log(`Logger di sviluppo: ${message}`);
    }
}
