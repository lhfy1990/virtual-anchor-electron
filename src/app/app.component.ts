import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isNavActive : boolean = false;

  private toggleNav() : void {
    this.isNavActive = !this.isNavActive;
  }
}
