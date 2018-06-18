import { Component, OnInit } from '@angular/core';
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
export class ListComponent implements OnInit {
  public groups: Group[] = config.groups;

  constructor() { }

  ngOnInit() {
  }

}
