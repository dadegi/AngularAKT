import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildCompComponent } from '../child-comp/child-comp.component';
import { SentData } from '../../models/sent-data';

@Component({
    selector: 'app-parent-comp',
    standalone: true,
    imports: [CommonModule, ChildCompComponent], //Importazione del componente figlio a livello di componente padre
    templateUrl: './parent-comp.component.html',
    styleUrl: './parent-comp.component.scss',
})
export class ParentCompComponent {
    receiveData: SentData | null = null;

    // Funzione per ricevere i dati dal figlio
    handleFormData(data: SentData) {
        this.receiveData = data;
    }
}
