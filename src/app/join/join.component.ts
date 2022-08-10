import { ChannelService } from './../services/channel.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent {
  channels: string[] = ["channel-1", "channel-2", "channel-3"]
  enterChannel = new FormGroup({
    username: new FormControl(""),
    channel: new FormControl("")
  })

  constructor(private ChannelService: ChannelService) { }

  onSubmit() {
    this.ChannelService.connect(String(this.enterChannel.value.username), String(this.enterChannel.value.channel))
  }
}
