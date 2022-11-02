import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enter-name-show-details';

  chosenObj: any;
  Data: DataObj[] = [
    { id: 'one', name: 'Wasim' , address: 'rarial', pinNumber: '732140' },
    { id: 'two', name: 'Nahed', address: 'malda' , pinNumber: '732137'  },
    { id: 'three', name: 'Ashim',address: 'kolkata', pinNumber: '732190'   },
    { id: 'four', name: 'Noor', address: 'tulshihata', pinNumber: '732100'   },
  ];
}
interface DataObj {
  id: string;
  name: string;
  address: string,
  pinNumber: string
}
