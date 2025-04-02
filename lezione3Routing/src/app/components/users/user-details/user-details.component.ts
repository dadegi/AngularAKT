import { Component, OnInit } from '@angular/core';
import {
    ActivatedRoute,
    Router,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';

@Component({
    selector: 'app-user-details',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
    templateUrl: './user-details.component.html',
    styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
    user: any = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataSrv: DataService
    ) {}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.dataSrv.getUserById(id).subscribe(
            (user) => (this.user = user),
            (error) => this.router.navigate(['/users'])
        );
    }

    goBack(): void {
        this.router.navigate(['/users']);
    }
}
