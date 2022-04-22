import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBien } from 'src/app/models/IBien';
import { BienService } from 'src/app/services/bien.service';

declare var toastr: any;

@Component({
  templateUrl: './edit-bien.component.html',
  styleUrls: ['./edit-bien.component.scss'],
})
export class EditBienComponent implements OnInit {
  bien: IBien;
  bienForm: FormGroup;
  //id: number;

  constructor(
    private _bienService: BienService,
    private _fb: FormBuilder,
    private _activeRoute: ActivatedRoute,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    let id = this._activeRoute.snapshot.params['id'];
    this._bienService.getBienById(id).subscribe((b) => this.bienForm.patchValue(b));

    this.bienForm = this._fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      surface: [null, [Validators.required]],
      rooms: [null, [Validators.required]],
      bedrooms: [null, [Validators.required]],
      floor: [null, [Validators.required]],
      price: [null, [Validators.required]],
      heat: [null, [Validators.required]],
      city: [null, [Validators.required]],
      address: [null, [Validators.required]],
      postal_code: [null, [Validators.required]],
      created_at: [null, [Validators.required]],
      image_front: [null, [Validators.required]],
      sold: [null, [Validators.required]],
    });
  }

  editBien() {
    let id = this._activeRoute.snapshot.params['id'];
    this._bienService.editBien(id, this.bienForm.value).subscribe( {
      next :(b) => {
        toastr.success('Ok');
        this._router.navigate(['/bien']);
      }, error: () => {
        toastr.error('Error');
      } });
  }
}

