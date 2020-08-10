import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// tslint:disable-next-line: no-inferrable-types
  loadedLinkPage: string = '';
  navigatePage(featureData: string){
      this.loadedLinkPage = featureData;
  }
}
