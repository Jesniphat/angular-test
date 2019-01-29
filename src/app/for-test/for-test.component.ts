import { Component, OnInit } from '@angular/core';

import { ForTestService } from '../service/for-test.service';

@Component({
  selector: 'app-for-test',
  templateUrl: './for-test.component.html',
  styleUrls: ['./for-test.component.scss']
})
export class ForTestComponent implements OnInit {

  public myFirstVar = 1;

  public testData: any;

  constructor(
    public forTestService: ForTestService
  ) { }

  public ngOnInit() {
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

  public async isPublicRepoGreaterThan(val: number): Promise<boolean> {
    let returnValue: boolean;
    this.testData = await this.forTestService.getGithubUserDetail();
    if (this.testData.public_repos > val) {
      returnValue = true;
    } else {
      returnValue = false;
    }
    return returnValue;
  }

}
