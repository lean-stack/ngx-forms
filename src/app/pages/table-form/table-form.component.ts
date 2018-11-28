import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {

  users: User[];
  tableFrm: FormGroup;
  constructor(private fb: FormBuilder) { }

  rows: FormArray;

  ngOnInit() {
    this.users = [
      { id: 1, acc: 'Acc1', password: '12345678', email: 'user@egal.de', zip: '55442' },
      { id: 2, acc: 'Acc2', password: '12345678', email: 'user@egal.de', zip: '55442' },
      { id: 3, acc: 'Acc3', password: '12345678', email: 'user@egal.de', zip: '55442' },
      { id: 4, acc: 'Acc4', password: '12345678', email: 'user@egal.de', zip: '55442' },
      { id: 5, acc: 'Acc5', password: '12345678', email: 'user@egal.de', zip: '55442' }
    ];

    this.tableFrm = this.fb.group({
      'items': this.fb.array([])
    });

    this.rows = this.tableFrm.get('items') as FormArray;

    for (const u of this.users) {
      const row = this.buildRow();
      row.patchValue(u);
      this.rows.push(row);
    }
  }

  private buildRow() {
    const fg = this.fb.group({});
    for (const key of ['acc', 'email', 'zip']) {
      fg.addControl(key, this.fb.control('', [Validators.required]));
    }
    return fg;
  }
}
