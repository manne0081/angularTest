import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: string;
  username: string;
  isUserCorrect: boolean;
  isPasswordCorrect: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
      this.isUserCorrect = false;
      this.isPasswordCorrect = false;
  }

  onClickLogin():void {
      if (this.username == "test") {
          this.isUserCorrect = true;
          if (this.password == "test") {
            this.isPasswordCorrect = true;
            this.router.navigate(['/mc/dashboard']);
          } else {
            console.log("Passwort ist falsch...");            
          }
      } else {
        console.log("Benutzername ist falsch...");
      }
  }
}
