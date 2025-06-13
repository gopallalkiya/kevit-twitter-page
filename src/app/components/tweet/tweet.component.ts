import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';
import { AuthService } from 'src/app/services/auth.service';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
@Input() tweet!: Tweet;
  replies: Tweet[] = [];
  replyText = '';
  username = '';

  constructor(
    private tweetService: TweetService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.replies = this.tweetService.getReplies(this.tweet.id);
    this.username = this.authService.getUsername()!;
  }

  reply() {
    if (!this.replyText.trim()) return;

    const replyTweet: Tweet = {
      id: this.tweetService.generateId(),
      username: this.username,
      content: this.replyText,
      parentId: this.tweet.id,
    };

    this.tweetService.postTweet(replyTweet);
    this.replyText = '';
    this.replies = this.tweetService.getReplies(this.tweet.id);
  }

}
