import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MyServiceService } from './my-service.service';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-mocks-demo'`, () => {
    const myService = TestBed.inject(MyServiceService)
    spyOn(myService, 'sum').and.callFake((a, b) => a - b)

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-mocks-demo-3');
  });
});
