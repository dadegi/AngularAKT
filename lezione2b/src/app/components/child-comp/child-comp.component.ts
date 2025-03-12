import { Component, Input } from '@angular/core';
import { SentData } from '../../models/sent-data';

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.scss'
})
export class ChildCompComponent {
    @Input() formData: SentData | null = null;
}
