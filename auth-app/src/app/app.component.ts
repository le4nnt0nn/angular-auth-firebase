import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {

  }
  Submit() {
    console.log(this.user);
    const {email, password} = this.user
    this.authService.register(email, password).then(res => {
      console.log('Register completed: ', res);
    })
  }

  SubmitWithGoogle() {
    console.log(this.user);
    const {email, password} = this.user
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log('Register completed with Google: ', res);
    })
  }

}
