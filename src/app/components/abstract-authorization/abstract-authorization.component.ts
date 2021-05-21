import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserAuthService} from "../../services/user-auth.service";

@Component({
  selector: 'nr-abstract-authorization',
  template: ``,
  styleUrls: ['./abstract-authorization.component.scss']
})
export class AbstractAuthorizationComponent implements OnInit {
  @Output() onNavigate = new EventEmitter()

  constructor(private userAuthService: UserAuthService) {
  }

  ngOnInit(): void {
  }

  googleAuth(){
    //this.userAuthService.googleAuth();
    console.log('google')
  }

  facebookAuth(){
    // this.userAuthService.facebookAuth()
    console.log('facebook')

  }

  submit(form: FormGroup) {
    console.log(form)
  }

}
