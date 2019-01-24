import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { NewTestModule } from '../new-test/new-test.module';
import { ForTestModule } from '../for-test/for-test.module';

@Injectable({
  providedIn: 'root'
})
export class ForTestService {

  item = {};

  constructor() { }

  getItems() {
    return [];
  }

  getItem() {
    return this.item;
  }
}
