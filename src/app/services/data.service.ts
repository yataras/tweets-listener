import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { OAuth } from 'oauthio-web';
import { Observable } from 'rxjs/Observable';
import { config } from '../../../.settings/config';

@Injectable()
export class DataService {
  tweets = [];

  constructor(public http: Http) {
    console.log('Data service connected !');
  }

  getTweets(): Promise<any> {
    return new Promise((resolve, reject) => {
      const initialized = OAuth.initialize(config.oauthKey);
      OAuth.popup('twitter', { cache: true }).done(function (result) {
        console.log('OAuth result = ', result);
        result.me().done(function (data) {
          console.log('result.me done data = ', data);
        });
      });

      if (OAuth.create('twitter')) {
        OAuth.popup('twitter', { cache: true })
        .done(function (result) {
          // result.get('https://api.twitter.com/1.1/statuses/home_timeline.json')
          // result.get('https://api.twitter.com/1.1/search/tweets.json')
          result.get('https://api.twitter.com/1.1/statuses/user_timeline.json')
          .done(function (response) {
            console.log(response);
            this.tweets = response;
            resolve(response);
          })
          .fail(function (err) {
            console.log(err);
          });
        });
      } else {
        reject('error');
      }
    })
    .then(res => {
      return res;
    });
  }
}
