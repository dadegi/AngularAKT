import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { SentData } from '../../models/sent-data';
import { ChildCompComponent } from '../child-comp/child-comp.component';

@Component({
    selector: 'app-parent-comp',
    standalone: true,
    imports: [CommonModule, FormsModule, ChildCompComponent],
    templateUrl: './parent-comp.component.html',
    styleUrl: './parent-comp.component.scss',
})
export class ParentCompComponent {
    formSubmitted: boolean = false;
    errorMessage: boolean = false;

    formData: SentData = {
        name: '',
        surname: '',
        age: 0,
        email: '',
    };

    formSentData: SentData = {
        name: '',
        surname: '',
        age: 0,
        email: '',
    };

    sendForm() {
        let sentName: string = this.formData.name;
        let sentSurname: string = this.formData.surname;
        let sentAge: number = this.formData.age;
        let sentEmail: string = this.formData.email;

        if (
            sentName == '' ||
            sentSurname == '' ||
            sentAge == 0 ||
            sentEmail == ''
        ) {
            this.errorMessage = true;
            this.formSubmitted = false;
        } else {
            this.formSentData.name = sentName;
            this.formSentData.surname = sentSurname;
            this.formSentData.email = sentEmail;
            this.formSentData.age = sentAge;

            this.errorMessage = false;
            this.formSubmitted = true;
        }

        this.formData = {
            name: '',
            surname: '',
            age: 0,
            email: '',
        };
    }
}
