import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featurePageLink = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  display(featurePage: string){
    this.featurePageLink.emit(featurePage);
  }
}
