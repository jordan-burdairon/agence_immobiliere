import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { SessionService } from '../services/session.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg : FormGroup;

  constructor(private _fb: FormBuilder,
    private _loginService: LoginService,
    private _session: SessionService,
    private _router: Router) { }

  ngOnInit(): void {
    this.fg = this._fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  submit() {
    console.log(42);
    
    if(this.fg.invalid) 
      return;
    this._loginService.login(this.fg.value).subscribe({
      next: (auth) => {
        this._session.save(auth.token);
        this._router.navigateByUrl('');
      },
      error: () => {
        console.log('Bad credentials');
      }
    })
  }

  
}
