import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recipeBook';
  loadedFeature = '';

  OnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC-K38F6mQOl8jCTrE17vgpzGLC1quA8uw',
      authDomain: 'ng-recipe-book-7f9b1.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
