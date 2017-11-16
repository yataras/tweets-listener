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
  tweets = [];
  mode = 'indeterminate';
  showSpinner = true;

  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.getTweets();
  }

  getTweets() {
    this.dataservice.getTweets()
    .then((tweets) => {
      this.tweets = tweets;
      console.log('fetched tweets = ', tweets);
      this.mode = 'determinate';
      this.showSpinner = false;
    });
  }

  signOut() {
    this.dataservice.clearCache();
    // this.showSpinner = false;
    this.tweets = [];
  }

  signIn() {
    this.dataservice.clearCache();
    this.showSpinner = true;
    this.getTweets();
  }
}
