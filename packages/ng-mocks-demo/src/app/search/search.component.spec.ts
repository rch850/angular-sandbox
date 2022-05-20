import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';
import { AppModule } from '../app.module';
import { KakkoPipe } from '../kakko.pipe';
import { SearchService } from '../search.service';

import { SearchComponent } from './search.component';

describe('SearchComponent w/o ng-mocks', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [
        SearchComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('when search, SearchService.search should be called', () => {
    const searchService = TestBed.inject(SearchService);
    spyOn(searchService, 'search');
    component.search('query');
    expect(searchService.search).toHaveBeenCalled();
  })
});

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    return MockBuilder(SearchComponent, AppModule)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('when search, SearchService.search should be called', () => {
    const searchService = TestBed.inject(SearchService);
    component.search('query');
    expect(searchService.search).toHaveBeenCalled();
  })
});
