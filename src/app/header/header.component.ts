import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { MatDialog , MatDialogRef } from '@angular/material/dialog'; 
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sticky: boolean = false;
  menuPosition: any;
  menuElement: any;
  ngAfterViewInit(){
    this.menuPosition = this.menuElement.nativeElement.offsetTop
}
  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
    handleScroll(){
        const windowScroll = window.pageYOffset;
        if(windowScroll >= this.menuPosition){
            this.sticky = true;
        } else {
            this.sticky = false;
        }
    }

    loginForm(){
      this.dialog.open(LoginComponent ,{width:'500px', height:'450px'});
    }

}
