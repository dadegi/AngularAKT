import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AuthServiceService } from './app/service/auth-service.service';
import { MockAuthService } from './app/service/mock-auth.service';
import { LoggerService } from './app/service/logger.service';
import { loggerFactory } from './app/service/token';
import { APP_CONFIG } from './app/config';
import { API_URL, LOGGER_ALIAS } from './app/service/token';

bootstrapApplication(AppComponent, {
    providers: [
        { provide: AuthServiceService, useClass: MockAuthService }, // useClass
        { provide: LOGGER_ALIAS, useExisting: LoggerService }, // useExisting
        { provide: LoggerService, useFactory: loggerFactory }, // useFactory
        { provide: 'APP_CONFIG', useValue: APP_CONFIG }, // useValue
        { provide: API_URL, useValue: APP_CONFIG.apiUrl }, // Injection Token
    ],
}).catch((err) => console.error(err));
