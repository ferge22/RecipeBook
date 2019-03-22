import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {}

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
