import { Component, Inject } from '@angular/core';
import { AuthServiceService } from './service/auth-service.service';
import { LoggerService } from './service/logger.service';
import { API_URL, LOGGER_ALIAS } from './service/token';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
})
export class AppComponent {
    appName: string;
    appVersion: string;
    apiUrl: string;

    constructor(
        private authSrv: AuthServiceService,
        private loggerSrv: LoggerService,
        @Inject('APP_CONFIG') private config: any,
        @Inject(API_URL) private apiUrlInjected: string,
        @Inject(LOGGER_ALIAS) private aliasLogger: LoggerService
    ) {
        this.appName = config.appName;
        this.appVersion = config.appVersion;
        this.apiUrl = apiUrlInjected;
    }

    login() {
        const message = this.authSrv.login();
        this.loggerSrv.log(message);
        this.aliasLogger.log('AliasLogger usato');
    }
}
