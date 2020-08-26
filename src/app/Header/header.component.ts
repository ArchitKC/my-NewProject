import { HttpServices } from './../services/data.storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private httpServices: HttpServices){}

  // tslint:disable-next-line: typedef
  onSaveRecipe(){
    this.httpServices.storeRecipe();
  }

  // tslint:disable-next-line: typedef
  onFetchRecipe(){
    this.httpServices.fetchRecipe().subscribe();
  }

}
