import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';
import { AuthService } from 'src/app/services/auth.service';
import { TweetService } from 'src/app/services/tweet.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newTweet = '';
  tweets: Tweet[] = [];
  username: string | null = '';

  constructor(
    private tweetService: TweetService,
    private authService: AuthService,
    private recaptcha: ReCaptchaV3Service,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    this.loadTweets();
  }

  loadTweets() {
    this.tweets = this.tweetService.getTweets().filter(t => !t.parentId);
  }

  postTweet() {
    if (!this.newTweet.trim()) return;

    this.recaptcha.execute('postTweet').subscribe(() => {
      const tweet: Tweet = {
        id: this.tweetService.generateId(),
        username: this.username!,
        content: this.newTweet,
      };
      this.tweetService.postTweet(tweet);
      this.newTweet = '';
      this.loadTweets();
    });
  }

  logout() {
    this.authService.logout();
    localStorage.clear();
    this.router.navigate(['/'])
  }
  

}
