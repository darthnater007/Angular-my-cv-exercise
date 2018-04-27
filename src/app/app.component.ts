import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'My CV';
    name: string = 'Nate Perkins';
    contactInfo: string = 'nsperk@gmail.com : 513-262-6710';
workExperience = 'Cook, Barback, Bar Tender, Farm Hand, Warehouse, etc.';
    
    education = 'Ohio University | The Recording Workshop | Cincy CodeIT';
}
