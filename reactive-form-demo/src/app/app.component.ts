import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  constructor (
    private fb: FormBuilder
  ) {}

  get members() { return this.form1.get('members') as FormArray }

  form1 = this.fb.group({
    members: this.fb.array([
      this.fb.group({
        name: '小原鞠莉'
      }),
      this.fb.group({
        name: '桜内梨子'
      }),
      this.fb.group({
        name: '津島善子'
      })
    ])
  })
}
