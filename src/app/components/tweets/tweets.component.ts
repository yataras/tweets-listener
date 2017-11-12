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

  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.dataservice.getTweets()
    .then((tweets) => {
      this.tweets = tweets;
      console.log('fetched tweets = ', tweets);
    });
  }
}
