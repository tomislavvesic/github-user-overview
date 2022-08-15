import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-display-info',
  templateUrl: './user-display-info.component.html',
  styleUrls: ['./user-display-info.component.sass']
})
export class UserDisplayInfoComponent implements OnInit {
  @Input() userData = '';

  constructor() { }

  ngOnInit(): void {
  }

}
