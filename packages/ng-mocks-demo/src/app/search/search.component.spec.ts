import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchService } from '../search.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('when search, SearchService.search should be called', () => {
    const searchService = TestBed.inject(SearchService);
    spyOn(searchService, 'search')
    component.search('query');
    expect(searchService.search).toHaveBeenCalled();
  })
});
