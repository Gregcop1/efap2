import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('menu')
  menu: ElementRef;

  public opened: boolean = false;

  public toggleDisplay(value?: boolean): void {
    if (undefined !== value) {
      this.opened = value;
    } else {
      this.opened = !this.opened;
    }

    if (!this.opened) {
      this.menu.nativeElement.scrollTop = 0;
    }
  }

  public click(): void {
    window.scroll(0, 0);
    this.toggleDisplay(false);
  }
}
