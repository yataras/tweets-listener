import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OAuth } from 'oauthio-web';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  title = 'Hello twitter!';
  tweets = [];

  constructor(private dataservice: DataService) {
    console.log('constructor run...');
  }

  ngOnInit() {
    this.dataservice.getTweets()
    .then((tweets) => {
      console.log('tweets = ', tweets);
      this.tweets = tweets;
    });
  }
}
