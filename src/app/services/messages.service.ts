import { Injectable } from '@angular/core';
import fakeMessages from 'src/fakeDB/messages';
import Message from '../interfaces/message';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages: Message[] = [];
}
