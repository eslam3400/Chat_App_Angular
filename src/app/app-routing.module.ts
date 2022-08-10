import { ChannelComponent } from './channel/channel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from './join/join.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "join", component: JoinComponent },
  { path: "channel/:channel", component: ChannelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
