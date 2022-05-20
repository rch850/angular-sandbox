import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  result$ = of('');

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  search(query: string): void {
    this.result$ = this.searchService.search(query);
  }
}
