import { Component, OnInit } from '@angular/core';
import {} from '@popperjs/core'

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new toolTip.Tooltip(tooltipTriggerEl);
    });

    
  }

}
