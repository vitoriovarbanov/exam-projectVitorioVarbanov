import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Output, EventEmitter } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-dialog-view',
  templateUrl: './dialog-view.component.html',
  styleUrls: ['./dialog-view.component.css']
})
export class DialogViewComponent implements OnInit {
  @Input() totalSum
  @Output() renderDialogWindowEmitter = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<DialogViewComponent>,
    @Inject(MAT_DIALOG_DATA) public router: Route) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.renderDialogWindowEmitter.emit()
  }

}
