import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { OAuth } from 'oauthio-web';
import { Observable } from 'rxjs/Observable';
import { config } from '../config/config';

@Injectable()
export class DataService {
  constructor(public http: Http) {}

  getTweets(): Promise<any> {
    return new Promise((resolve, reject) => {
      OAuth.initialize(config.oauthKey, { cache: true });
      OAuth.popup('twitter', { cache: true })
      .done(function (result) {
        // result.get('https://api.twitter.com/1.1/statuses/home_timeline.json')
        // result.get('https://api.twitter.com/1.1/search/tweets.json')
        result.get('https://api.twitter.com/1.1/statuses/user_timeline.json')
        .done(function (response) {
          console.log('response from fetch timeline = ', response);
          resolve(response);
          localStorage.setItem('cached_tweets', JSON.stringify(response));
        })
        .fail(function (err) {
          console.log('fetch user timeline err = ', err);
          const cachedTweets = JSON.parse(localStorage.getItem('cached_tweets'));
          if (cachedTweets.length) {
            resolve(cachedTweets);
          } else {
            reject(err);
          }
        });
      });
    })
    .then(res => {
      console.log('res in promise then = ', res);
      return res;
    });
  }

  clearCache() {
    OAuth.clearCache('twitter');
    localStorage.setItem('cached_tweets', null);
  }
}
