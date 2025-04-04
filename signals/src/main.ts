import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(APP_ROUTES, withComponentInputBinding()),
        provideAnimations(),
        provideHttpClient(),
    ],
}).catch((err) => console.error(err));
