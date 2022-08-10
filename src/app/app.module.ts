import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinComponent } from './join/join.component';
import { LandingComponent } from './landing/landing.component';
import { ChannelComponent } from './channel/channel.component';
import { MessageComponent } from './channel/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinComponent,
    LandingComponent,
    ChannelComponent,
    MessageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
