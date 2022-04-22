import { Component, OnInit, Pipe } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IBien } from '../models/IBien';
import { BienService } from '../services/bien.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  biens : IBien[];
  bienForm : FormGroup;

  constructor(private _bienService : BienService) { }

  ngOnInit(): void {
    this._bienService.getAll().subscribe(result => this.biens = result);
  }



}
