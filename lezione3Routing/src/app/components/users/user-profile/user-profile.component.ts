import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';

@Component({
    selector: 'app-user-profile',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit {
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
