import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BienService } from 'src/app/services/bien.service';

declare var toastr: any;

@Component({
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.scss']
})
export class AddBienComponent implements OnInit {

  bienForm : FormGroup;

  constructor(private _fb : FormBuilder, private _bienService : BienService, private _route : Router) { }

  ngOnInit(): void {
    this.bienForm = this._fb.group({
      title : [null, [Validators.required]],
      description : [null, [Validators.required]],
      surface : [null, [Validators.required]],
      rooms : [null, [Validators.required]],
      bedrooms : [null, [Validators.required]],
      floor : [null, [Validators.required]],
      price : [null, [Validators.required]],
      heat : [null, [Validators.required]],
      city : [null, [Validators.required]],
      address : [null, [Validators.required]],
      postal_code : [null, [Validators.required]],
      //created_at : [null, [Validators.required]],
      image_front : [null, [Validators.required]],
      type : [null, [Validators.required]]
    });

  }

  addBien() {
    if(this.bienForm.valid) {
      let bien = {...this.bienForm.value };
      this._bienService.addBien(bien).subscribe(() => {
        toastr.success("Nouveau bien enregistrĂ©");
        this._route.navigateByUrl('bien')
      });
    }
    else {
      console.log("c'est pas valide"),
      toastr.error("Veuillez remplir les champs");
      this.bienForm.markAllAsTouched();
    }
  }

  onchange($event:any) {
    let file = $event.target.files[0];
    if(!file) return;
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = e => this.bienForm.get('image_front')?.setValue(e.target.result);
  }

}
