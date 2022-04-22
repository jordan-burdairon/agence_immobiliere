import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBien } from 'src/app/models/IBien';
import { BienService } from 'src/app/services/bien.service';

@Component({
  templateUrl: './show-bien.component.html',
  styleUrls: ['./show-bien.component.scss']
})
export class ShowBienComponent implements OnInit {

  bien : IBien;

  constructor(private _bienService : BienService, private _activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let id = this._activeRoute.snapshot.params['id'];
    this._bienService.getBienById(id).subscribe(b => this.bien = b)
  }

}
