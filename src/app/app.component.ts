import { Component, HostListener } from '@angular/core';
import {AddToHomeScreenServiceService} from './add-to-home-screen-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'azure-login';
  @HostListener('window:onload', ['$event'])
  onEventFire(e: any) {
    this.a2hs.deferredPrompt = e;
  }
  constructor(
   
    private a2hs: AddToHomeScreenServiceService
   ) {
    this.a2hs.deferredPrompt = "e";
   }
   

}
