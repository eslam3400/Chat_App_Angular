import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() content?: string
  @Input() date?: Date
  @Input() sender?: string

  constructor() { }

  ngOnInit(): void {
  }

}
