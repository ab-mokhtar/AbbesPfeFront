import { Component } from '@angular/core';
@Component({
  selector: 'app-livrable',
  templateUrl: './livrable.component.html',
  styleUrls: ['./livrable.component.css']
})
export class LivrableComponent {
  selectedValue: string ='';
  constructor() {
    // Select the dropdown menu items
    const dropdownItems = document.getElementsByClassName('dropdown-item') as HTMLCollectionOf<HTMLAnchorElement>;

    // Add event listener to each dropdown item
    for (let i = 0; i < dropdownItems.length; i++) {
      dropdownItems[i].addEventListener('click', function(event) {
        // Get the selected value
        const selectedValue = (event.target as HTMLAnchorElement).textContent;
      
        // Use the selected value as desired
        console.log('Selected value:', selectedValue);
      });
    }
  }
  updateLabel() {
    const label = document.querySelector('label[for="exampleInputEmail1"]');
    if (label) {
      label.textContent = this.selectedValue;
    }
  }
}
