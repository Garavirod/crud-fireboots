import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  idEmployee = null;

  constructor(private activeRoute:ActivatedRoute) {  }

  ngOnInit(): void {
    this.idEmployee = this.activeRoute.snapshot.params.id;
  }

}
