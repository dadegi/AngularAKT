import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SignalsDemoService } from '../../core/services/signals-demo.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    private signalDemoSrv = inject(SignalsDemoService);

    // Utilizzo di signals con Observables
    // Obresvable
    readonly counter = this.signalDemoSrv.getCounter();
    // Signals
    readonly dblCounter = this.signalDemoSrv.doubleCounter;
    readonly timer = this.signalDemoSrv.timer;

    incrementCounter() {
        this.signalDemoSrv.incrementCounter();
    }

    decrementCounter() {
        this.signalDemoSrv.decrementCounter();
    }

    resetCounter() {
        this.signalDemoSrv.resetCounter();
    }
}
