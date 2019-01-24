import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTestComponent } from './for-test.component';

describe('ForTestComponent', () => {
  let component: ForTestComponent;
  let fixture: ComponentFixture<ForTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await expect(component).toBeTruthy();
  });

  it('should be 21', async () => {
    await expect(component.calNumber(10, 11)).toBe(21);
  });

  it('should be 3', async () => {
    await expect(component.myFirstVar).toBe(1);
    await component.changeVar();
    await expect(component.myFirstVar).toBe(3);
  });
});