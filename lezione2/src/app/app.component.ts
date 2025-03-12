import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ParentCompComponent } from "./components/parent-comp/parent-comp.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ParentCompComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'lezione2';
}
