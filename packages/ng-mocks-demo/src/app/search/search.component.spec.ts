import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';
import { AppModule } from '../app.module';
import { SearchService } from '../search.service';

import { SearchComponent } from './search.component';

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
