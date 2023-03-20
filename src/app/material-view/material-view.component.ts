import { Component, OnInit } from '@angular/core';
import { BlobServiceClient, BlobDownloadResponseModel } from '@azure/storage-blob';


@Component({
  selector: 'app-material-view',
  template: '<div #insertedHtml></div>',
  styleUrls: ['./material-view.component.css']
})
export class MaterialViewComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    
      const myDiv = document.querySelector('#insertedHtml');
     // myDiv.innerHTML = html;
    };
  }
