import { Component, EventEmitter, Output } from '@angular/core';
import config from '../../config/config.json';

interface Group {
  id: string;
  title: string;
  thumb: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

  public groups: Group[] = config.groups;

  public click(): void {
    this.onClick.next();
  }
}
