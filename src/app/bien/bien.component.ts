import { Component, OnInit } from '@angular/core';
import { IBien } from '../models/IBien';
import { BienService } from '../services/bien.service';
import { SessionService } from '../services/session.service';

@Component({
  templateUrl: './bien.component.html',
  styleUrls: ['./bien.component.scss']
})
export class BienComponent implements OnInit {

  p: number = 1;
  biens : IBien[];
  collection: string[] = [];
  search : string = '';
  type : string;
  isSold : boolean;

  constructor(private _bienService : BienService, public session: SessionService) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
   }

  ngOnInit(): void {
      this._bienService.getAll().subscribe(result => this.biens = result);
  }

  vendu(){
    if(this.isSold == true) {
      
    }
  }
}
