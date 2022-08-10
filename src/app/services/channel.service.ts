import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import fakeOnlineUsers from 'src/fakeDB/onlineUsers';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  username: string = '';
  channel: string = '';
  onlineUsers: any[] = [];

  constructor(private router: Router) { }

  connect(username: string, channel: string) {
    this.username = username.trim();
    this.channel = channel.trim();
    if (this.username === '' && this.channel === '') return alert('please make sure to provide a username and select channel');
    this.router.navigate([`/channel/${this.channel}`]);
  }
}
