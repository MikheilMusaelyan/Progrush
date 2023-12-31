import { Component } from '@angular/core';
import { faHouse, faMailBulk, faPhone, faSearch, faX } from '@fortawesome/free-solid-svg-icons';
import { MainserviceService } from '../mainservice.service';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  mail = faMailBulk
  phone = faPhone
  fb = faFacebook
  x = faX
  constructor(private service: MainserviceService){

  }
  close(){
    this.service.contact(false)
  }
}
