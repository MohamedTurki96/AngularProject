import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  users=[{
    id:1,
    name:'mohsen',
    gender:'unknown',
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
