import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-notfound',
    standalone: true,
    templateUrl: './notfound.component.html',
    styleUrl: './notfound.component.css',
    imports: [NavbarComponent]
})
export class NotfoundComponent {

}
