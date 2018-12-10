import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.styl']
})
export class Form2Component implements OnInit {

  constructor (
    private fb: FormBuilder
  ) {}

  ngOnInit() {
  }

  allMemberOptions = [
    { name: '高坂穂乃果', grade: 2 },
    { name: '絢瀬絵里', grade: 3 },
    { name: '南ことり', grade: 2 },
    { name: '園田海未', grade: 2 },
    { name: '星空凛', grade: 1 },
    { name: '西木野真姫', grade: 1 },
    { name: '東條希', grade: 3 },
    { name: '小泉花陽', grade: 1 },
    { name: '矢澤にこ', grade: 3 }
  ]
  memberOptions = [
    this.allMemberOptions.slice(),
    this.allMemberOptions.slice(1),
    this.allMemberOptions.slice(2)
  ]

  get members() { return this.myForm.get('members') as FormArray }

  myForm = this.fb.group({
    members: this.fb.array([
      this.fb.group({
        name: this.memberOptions[0][0],
        files: this.fb.array([
          this.fb.control(''),
          this.fb.control('')
        ])
      }),
      this.fb.group({
        name: this.memberOptions[1][0],
        files: this.fb.array([this.fb.control('')])
      }),
      this.fb.group({
        name: this.memberOptions[2][0],
        files: this.fb.array([this.fb.control('')])
      })
    ])
  })

  onNameChange(index) {
    this.memberOptions.forEach((opts, optIndex) => {
      if (optIndex <= index) return
      this.memberOptions[optIndex] = this.memberOptions[optIndex - 1].filter(o => {
        return o.name !== this.members.get(`${optIndex - 1}`).value.name.name
      })
    })
    for (let i = 1; i < this.members.length; i++) {
      const name = this.memberOptions[i].find(o => {
        return o.name === this.members.at(i).value.name.name
      }) || this.memberOptions[i][0]
      this.members.at(i).patchValue({ name })
    }
  }

  onFileChange(file) {
    console.log(file)
  }
}
