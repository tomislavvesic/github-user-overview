import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRequestsService } from 'src/app/core/services/api-requests.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.sass']
})
export class UserDisplayComponent implements OnInit {
  githubUser!: string | null
  userData!: any
  userRepos!: any

  constructor(private apiservice: ApiRequestsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.githubUser = this.route.snapshot.paramMap.get('id');

    this.apiservice.getUserData(this.githubUser).subscribe(usersData => {
      console.log(usersData)
      this.userData = usersData
    })

    this.apiservice.getUserRepos(this.githubUser).subscribe(usersRepos => {
      console.log(usersRepos)
      this.userRepos = usersRepos
    })
  }

}
