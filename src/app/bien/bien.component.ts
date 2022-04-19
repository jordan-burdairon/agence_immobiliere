import { Component, OnInit } from '@angular/core';
import { IBien } from '../models/bien';
import { BienService } from '../services/bien.service';

@Component({
  templateUrl: './bien.component.html',
  styleUrls: ['./bien.component.scss']
})
export class BienComponent implements OnInit {

  biens : IBien[];

  constructor(private bienService : BienService) { }

  ngOnInit(): void {
      this.bienService.getAll().subscribe(result => this.biens = result);
  }

}
