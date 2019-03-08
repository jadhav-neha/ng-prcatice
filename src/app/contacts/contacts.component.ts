import { Component, OnInit } from '@angular/core';
import{Contact} from '../contact';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
   contacts:any;  
  // contacts = CONTACT; 
  constructor(private contactservice : ContactService) { }
  getContacts() {
     this.contacts = this.contactservice.getContacts();
  }
  ngOnInit() {
    this.getContacts();
  }
  // mylist = Contact;
  
}
