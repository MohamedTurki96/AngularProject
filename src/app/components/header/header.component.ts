import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router, public afAuth:AngularFireAuth) { 
    
  }

  ngOnInit(): void {
  }
  logout(): void {
    this.afAuth.signOut();
  }
}
