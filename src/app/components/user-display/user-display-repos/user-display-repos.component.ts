import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-display-repos',
  templateUrl: './user-display-repos.component.html',
  styleUrls: ['./user-display-repos.component.sass']
})
export class UserDisplayReposComponent implements OnInit {
  @Input() userRepos: any = ''
  showIndex!: number;
  repoInfo!: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
