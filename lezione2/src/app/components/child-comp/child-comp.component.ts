import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SentData } from '../../models/sent-data';

@Component({
    selector: 'app-child-comp',
    standalone: true,
    imports: [FormsModule], // Importazione delle caratteristiche TD Forms
    templateUrl: './child-comp.component.html',
    styleUrl: './child-comp.component.scss',
})
export class ChildCompComponent {
    // Raccolta dati
    formData =  {
        name: '',
        email: ''
    }

    // Evento per inviare i dati al componente parent
    @Output() formSubmitted = new EventEmitter<SentData>();

    // Funzione chiamata all'invio del form
    submitForm() {
        this.formSubmitted.emit(this.formData); // Evento emesso
        console.log(this.formData);
        this.formData = { name: '', email: ''}; // Reset del form
    }
}
