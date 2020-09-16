import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    private toggleMenu = false;

    constructor() { }

    ngOnInit(): void {
    }

    buttonOnClick(): void {
        if (this.toggleMenu) {
            console.log ('Menü ist zugeklappt...');
            this.toggleMenu = !this.toggleMenu;
            console.log ('Menü ist aufgeklappt...');
        } else {
          console.log ('Menü ist aufgeklappt...');
          this.toggleMenu = !this.toggleMenu;
          console.log ('Menü ist zugeklappt...');
        }
    }

}
