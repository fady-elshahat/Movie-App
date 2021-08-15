import { AuthService } from './../auth.service';
import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  user:any = this._AuthService.currentUesr;
  constructor(private _AuthService:AuthService) {
  }
  isloguot(){
    this._AuthService.loguot();
  }

  islogin:boolean = false;
  ngOnInit(): void {
    this._AuthService.currentUesr.subscribe(()=>{
      if (this._AuthService.currentUesr.getValue() != null){
        this.islogin = true
      }else{
        this.islogin = false
      }
    })
  }
  @HostListener("window:scroll")

  navScroll(){
    let element = document.querySelector('.navbar') as HTMLElement;
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      element.classList.add('header_change');
    }
    else {
      element.classList.remove('header_change');
    }
  }
  ToggleNavBar () {
    let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
    if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
        element.click();
    }
}
};

