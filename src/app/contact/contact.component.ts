import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { of } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm : FormGroup;
 // feedback: Feedback;
//  contactType = ContactType;
  constructor(private _fb : FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){

  }

}
