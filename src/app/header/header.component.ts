import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from 'selenium-webdriver/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService, public authService: AuthService) {}

  saveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  getData() {
    this.dataStorageService.getRecipes();
  }
}
