import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.styl']
})
export class Form1Component implements OnInit {

  constructor (
    private fb: FormBuilder
  ) {}

  ngOnInit() {
  }

  get members() { return this.myForm.get('members') as FormArray }

  myForm = this.fb.group({
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
