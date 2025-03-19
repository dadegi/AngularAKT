import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import {
    provideRouter,
    withPreloading,
    PreloadAllModules,
} from '@angular/router';

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes, withPreloading(PreloadAllModules))],
}).catch((err) => console.error(err));
