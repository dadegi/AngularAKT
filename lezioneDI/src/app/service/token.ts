import { InjectionToken } from '@angular/core';
import { LoggerService } from './logger.service';
import { ProdLoggerService } from './prod-logger.service';
import { DevLoggerService } from './dev-logger.service';
import { environment } from '../../environments/environment';

export const LOGGER_ALIAS = new InjectionToken<LoggerService>('LoggerAlias');

export function loggerFactory() {
    return environment.production
        ? new ProdLoggerService()
        : new DevLoggerService();
}

export const API_URL = new InjectionToken<string>('API_URL');
