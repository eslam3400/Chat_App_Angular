import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Message from '../interfaces/message';
import { ChannelService } from '../services/channel.service';
import { MessagesService } from '../services/messages.service';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
})
export class ChannelComponent implements OnInit {
  message: string = '';

  constructor(
    public channelServices: ChannelService,
    public messageService: MessagesService,
    private router: Router,
    private socketService: SocketService
  ) { }

  ngOnInit(): any {
    if (this.channelServices.username === '' || this.channelServices.channel === '') return this.router.navigate(['/join']);
    this.socketService.socket.on('receive message', msg => this.messageService.messages.push(msg));
    this.socketService.socket.on('new join', msg => this.messageService.messages.push(msg));
    this.socketService.socket.on('room users', users => this.channelServices.onlineUsers = users);
    this.socketService.socket.emit('join channel', { username: this.channelServices.username, channel: this.channelServices.channel })
  }

  send() {
    const msg: Message = {
      content: this.message,
      date: new Date(),
      sender: this.channelServices.username,
      channel: this.channelServices.channel
    }
    this.messageService.messages.push(msg);
    this.socketService.socket.emit('message', msg);
    this.message = '';
  }
}
