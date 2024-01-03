import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @ViewChild('email') emailInputRef!: ElementRef;

  constructor(private contactService : ContactService) { }

  ngOnInit(): void {
  }

  onSubmit(f: any) {
    console.log("Form object :", f)
    this.contactService.saveContact(f).subscribe(res =>{
      console.log("result from server", res);
    });
  }

}
