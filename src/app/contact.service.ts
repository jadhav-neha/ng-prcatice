import { Injectable } from '@angular/core';
import{Contact} from './contact';
import { CONTACT } from './mock-contact';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getContacts(): Contact[] {
    return CONTACT;
  }
  constructor() {}
}
