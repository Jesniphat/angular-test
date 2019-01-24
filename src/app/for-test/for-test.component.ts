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

  public ngOnInit() {
    console.log(this.forTestService.item);
  }

  public calNumber(a: number, b: number) {
    return a + b;
  }

  public changeVar(): void {
    this.myFirstVar = 3;
  }

  public setSomething(val: number): string {
    let returnValue: string;
    if (val - this.getRandomValue() < 1) {
         returnValue = 'Success';
    } else {
         returnValue = 'Fail';
    }
    return returnValue;
}

  public getRandomValue(): number {
    const a = 10;
    const b = 20;
    return (a + b) * 2;
  }

}
