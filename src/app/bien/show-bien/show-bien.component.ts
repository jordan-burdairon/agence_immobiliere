import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IBien } from 'src/app/models/IBien';
import { IMessage } from 'src/app/models/IMessage';
import { BienService } from 'src/app/services/bien.service';
import { MessageService } from 'src/app/services/message.service';
import { SessionService } from 'src/app/services/session.service';

declare var toastr: any;

@Component({
  templateUrl: './show-bien.component.html',
  styleUrls: ['./show-bien.component.scss']
})
export class ShowBienComponent implements OnInit {

  bien : IBien;
  visible : boolean = false;
  messageForm : FormGroup;
  messages : IMessage[];

  constructor(private _bienService : BienService, private _activeRoute : ActivatedRoute, private _fb : FormBuilder, private _messageService : MessageService, public session : SessionService) { }

  ngOnInit(): void {
    let id = this._activeRoute.snapshot.params['id'];
    this._bienService.getBienById(id).subscribe(b => this.bien = b);
    this._messageService.getAll(id).subscribe(result => this.messages = result)

    this.messageForm = this._fb.group({
      lastname : [null,[Validators.required]],
      firstname : [null,[Validators.required]],
      message : [null,[Validators.required]],
      email: [null,[Validators.required]],
      bienId: [id]
    })
  }

  submitMessage(){
    if(this.messageForm.valid) {
      let message = {...this.messageForm.value};
      this._messageService.addMessage(message).subscribe(() => {
        toastr.success("Message envoyé");
        this.messageForm.reset();
      })
    }
  }

}
