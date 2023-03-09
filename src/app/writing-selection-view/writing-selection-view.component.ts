import { Component, OnInit } from '@angular/core';
import { BlobServiceClient } from "@azure/storage-blob";
import { AppConfiguration } from 'read-appsettings-json';

@Component({
  selector: 'app-writing-selection-view',
  templateUrl: './writing-selection-view.component.html',
  styleUrls: ['./writing-selection-view.component.css']
})
export class WritingSelectionViewComponent implements OnInit {

  constructor() { 


  }

  ngOnInit(): void {
    const blobServiceClient = BlobServiceClient.fromConnectionString(AppConfiguration.Setting().azureBlobConnectionString); 
    var batchClient = blobServiceClient.getBlobBatchClient()

    batchClient.
  }

}
