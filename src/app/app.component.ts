import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushService } from './push.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'push';

  constructor(private swPush  : SwPush ){

  }

  subscribeNotification(){
    this.swPush.requestSubscription({
      serverPublicKey: "BNNWctVklwSAxXao5q74XR-gNsD0OMjqSnAqVeb9_f-nbzkJptsd_ZISPVRdY5D5Rts-23gy9k5kI6AVc1bnZmM"
    }).then( sub => {
      console.log(sub.toJSON());
    })
  }
}
