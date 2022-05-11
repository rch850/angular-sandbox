import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `ng-mocks-demo-${this.myService.sum(1, 2)}`;

  constructor(
    private myService: MyServiceService
  ) {}
}
