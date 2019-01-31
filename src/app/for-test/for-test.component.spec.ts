import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTestComponent } from './for-test.component';

import { ForTestService } from '../service/for-test.service';
import { Observable, of } from 'rxjs';

describe('ForTestComponent', () => {
  let component: ForTestComponent;
  let fixture: ComponentFixture<ForTestComponent>;

  const mockTestService = jasmine.createSpyObj('ForTestService', ['getGithubUserDetail']);

  const mockObject = {
    'public_repos': 3,
    'public_gists': 0,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForTestComponent ],
      providers: [
        { provide: ForTestService, useValue: mockTestService}
      ]
    })
    .compileComponents();

    const TestServiceSpyObj = TestBed.get(ForTestService);
    const mockPromise: Observable<any> = of(mockObject);
    TestServiceSpyObj.getGithubUserDetail.and.returnValue(mockPromise);
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

  it('should return Success from something function', async () => {
    await spyOn(component, 'getRandomValue').and.returnValue(10);
    await expect(component.setSomething(10)).toBe('Success');
  });

  it('should return Fail from something function', async () => {
    await spyOn(component, 'getRandomValue').and.returnValue(10);
    await expect(component.setSomething(20)).toBe('Fail');
  });

  it('should return True from isPublicRepoGreaterThan function', (async() => {
    const result = await component.isPublicRepoGreaterThan(1);
    expect(result).toBe(true);
  }));

  it('should return False from isPublicRepoGreaterThan function', async (done) => {
    const result = await component.isPublicRepoGreaterThan(10);
    expect(result).toBe(false);
    await done();
  });

});
