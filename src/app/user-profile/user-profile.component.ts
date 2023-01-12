import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  
   user1 : User = new User("KAKASHI HATAKE", "https://www.ecured.cu/images/2/27/Kakashi_Hatake.png");
     getFullName() {
    
    return this.user1.nom;
    
   }
   
   

}
