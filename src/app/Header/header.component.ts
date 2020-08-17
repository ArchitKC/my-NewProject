import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayAccount = true;
  @Output() featurePageLink = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  display(featurePage: string){
    this.featurePageLink.emit(featurePage);
  }
}