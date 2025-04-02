import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';

@Component({
    selector: 'app-user-settings',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user-settings.component.html',
    styleUrl: './user-settings.component.css',
})
export class UserSettingsComponent implements OnInit {
    user: any = null;

    constructor(private route: ActivatedRoute, private dataSrv: DataService) {}

    ngOnInit(): void {
        this.route.parent?.paramMap.subscribe((params) => {
            const id = Number(params.get('id'));

            this.dataSrv
                .getUserById(id)
                .subscribe((user) => (this.user = user));
        });
    }
}
