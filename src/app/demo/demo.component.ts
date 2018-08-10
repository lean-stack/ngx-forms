import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo,.doll,[works]',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @Input()
  first: string;

  @Input()
  works: string;

  constructor() { }

  ngOnInit() {
    console.log(this.first);
    console.log(this.works);
  }

}
