import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Login, User } from '../configration/config';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  isSignupForm: boolean = true;
  registerUser: User = new User;
  LoginUser: Login = new Login;
  cpassword: any;

  // For Authorization Animation
  IsUserAuthorized: boolean = false;

  // For Password Show
  isShowPass: boolean = false;
  isShowCnfPass: boolean = false;

  isOTPVarification:boolean = false;
  isOTPSend:boolean = false;

  // For OTP Timer
  private subscription: Subscription = new Subscription();
  public timeLeft: number = 120;
  public minutes: number = 0;
  public seconds: number = 0;

  constructor(private $auth: AuthService, private toastr: ToastrService, public router: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.registerUser = new User;
    this.LoginUser = new Login;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  startTimer() {
    this.subscription = interval(1000).subscribe(() => {
      this.timeLeft--;
      this.updateTime();

      if (this.timeLeft <= 0) {
        this.subscription.unsubscribe();
      }
    });
  }

  updateTime() {
    this.minutes = Math.floor(this.timeLeft / 60);
    this.seconds = this.timeLeft % 60;
  }

  addNewUser() {
    let emailRegex = /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    // if (this.registerUser.name && (this.registerUser.email || this.registerUser.mobileNo) && this.registerUser.password == this.cpassword) {
    if (true) {
      this.$auth.addUser(this.registerUser).subscribe({
        next: (res) => {
          this.showAuthorizedAnimation();
          this.getAllUser();
          this.registerUser = new User;
          this.cpassword = '';
          this.toastr.success('Registeritaion Successfully');
        },
        error: (err) => {
          this.toastr.error(err);
        }
      })
    }
    else {
      console.log("Your conform password not match");
    }
  }

  getAllUser() {
    this.$auth.GetUser().subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (err) => {
        this.toastr.error(err);
      }
    })
  }

  loginUser() {
    this.$auth.loginUser(this.LoginUser).subscribe({
      next: (res) => {
        if (res) {
          this.LoginUser = new Login;
          this.showAuthorizedAnimation();
          this.toastr.success('User Login Successfully');
        }
        else {
          this.toastr.error('Please provide valid user name and password');
        }
      },
      error: (err) => {
        this.toastr.error(err);
      }
    })
  }

  showAuthorizedAnimation() {
    this.IsUserAuthorized = true;
    setTimeout(() => {
      this.IsUserAuthorized = false;
      this.router.navigate(['chat']);
    }, 2000);
  }

  toggleForm() {
    this.isSignupForm = !this.isSignupForm;
  }

  toggleVarificationMode() {
    this.isOTPVarification = !this.isOTPVarification;
  }

  sendOTP() {
    this.isOTPSend = true;
    this.updateTime();
    this.startTimer();
  }
}

