import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestsService } from 'src/app/core/services/api-requests.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.sass']
})
export class UserSearchComponent implements OnInit {
  githubUsers: any;
  constructor(private apiservice: ApiRequestsService) { }

  ngOnInit(): void {
  }

  searchGithubUser(searchEvent: any) {
    this.apiservice.getGithubUsers(searchEvent).subscribe(users => {
      console.log(users)
      this.githubUsers = users?.items
    })
  }
}
