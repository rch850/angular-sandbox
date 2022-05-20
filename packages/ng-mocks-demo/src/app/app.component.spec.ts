import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockBuilder, MockComponent, ngMocks } from 'ng-mocks';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { KakkoPipe } from './kakko.pipe';
import { SearchComponent } from './search/search.component';

describe('AppComponent', () => {
  // It needs to stub SearchComponent by myself.
  // If not, it causes NG0304: 'app-card' is not a known element.
  describe('w/o ng-mocks', () => {
    @Component({selector: 'app-search'})
    class SearchComponentStub {}

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          SearchComponentStub,
          KakkoPipe
        ],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
      expect(fixture.componentInstance.title).toEqual('ng-mocks-demo-3');
    });
  });

  // so classic
  // It is calles as 'Classic tools' in https://ng-mocks.sudo.eu/api/MockComponent
  describe('w/ MockComponent', () => {
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          MockComponent(SearchComponent)
        ],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
      expect(fixture.componentInstance.title).toEqual('ng-mocks-demo-3');
    });
  });

  // Not bad.
  describe('w/ ngMocks.guts', () => {
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule(ngMocks.guts(
        AppComponent,
        AppModule
      )).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
      expect(fixture.componentInstance.title).toEqual('ng-mocks-demo-3');
    });
  });

  // Contemporary tools
  // https://ng-mocks.sudo.eu/api/MockBuilder
  describe('w/ MockBuilder', () => {
    beforeEach(() => {
      return MockBuilder(AppComponent, AppModule)
    });

    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
      expect(fixture.componentInstance.title).toEqual('ng-mocks-demo-3');
    });
  });
})
