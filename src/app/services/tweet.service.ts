import { Injectable } from '@angular/core';
import { Tweet } from '../models/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
private STORAGE_KEY = 'tweets';

  getTweets(): Tweet[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  saveTweets(tweets: Tweet[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tweets));
  }

  postTweet(tweet: Tweet) {
    const tweets = this.getTweets();
    tweets.push(tweet);
    this.saveTweets(tweets);
  }

  getReplies(parentId: number): Tweet[] {
    return this.getTweets().filter(tweet => tweet.parentId === parentId);
  }

  generateId(): number {
    return Date.now();
  }
}
