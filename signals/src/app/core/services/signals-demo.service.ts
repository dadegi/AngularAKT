import { Injectable, signal, computed, effect } from '@angular/core';
import { interval, map, take } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: 'root',
})
export class SignalsDemoService {
    // Counter signal
    private counterSignal = signal(0);

    // Derivo un Observable dal signal
    readonly counter$ = toObservable(this.counterSignal);

    // Utilizzo Observable
    private timerObservable$ = interval(500).pipe(
        take(20),
        map((val) => `Timer: ${val + 1}`)
    );

    // Derivo un signal dall'Observable
    readonly timer = toSignal(this.timerObservable$, {
        initialValue: 'Timer non partito',
    });

    // Computed Signal dipendente da counter
    readonly doubleCounter = computed(() => this.counterSignal() * 2);

    constructor() {
        effect(() => {
            console.log(`Contatore aggiornato: ${this.counterSignal}`);
        });
    }

    incrementCounter() {
        this.counterSignal.update((val) => val + 1);
    }

    decrementCounter() {
        this.counterSignal.update((val) => Math.max(0, val - 1));
    }

    resetCounter() {
        this.counterSignal.set(0);
    }

    getCounter() {
        return this.counterSignal;
    }
}
