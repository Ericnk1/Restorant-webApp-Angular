import {Component, Inject, OnInit} from '@angular/core';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import {expand, flyInOut} from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {
  leaders: Leader[];

  constructor(private leaderService: LeaderService, @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
    // this.leaders = this.leaderService.getLeaders();
    // this.leaderService.getLeaders().then(leaders => this.leaders = leaders);
    this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders);
  }

}
