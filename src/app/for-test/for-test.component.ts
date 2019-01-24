import { Component, OnInit } from '@angular/core';

import { ForTestService } from '../service/for-test.service';

@Component({
  selector: 'app-for-test',
  templateUrl: './for-test.component.html',
  styleUrls: ['./for-test.component.scss']
})
export class ForTestComponent implements OnInit {

  public myFirstVar = 1;

  constructor(
    public forTestService: ForTestService
  ) { }

  ngOnInit() {
    console.log(this.forTestService.item);
  }

  calNumber(a: number, b: number) {
    return a + b;
  }

  changeVar(): void {
    this.myFirstVar = 3;
  }

}
