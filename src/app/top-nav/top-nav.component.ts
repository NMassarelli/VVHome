import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { FontFamilyOptions } from '../Helpers/font-family-options';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  font:FontFamilyOptions;

   setFontFamilyFromDropdown(){
      switch(this.font){
        case FontFamilyOptions.OpenDyslexic:
          document.getElementById("root").style.fontFamily = 'opendyslexic'
          break;
        case FontFamilyOptions.SFMono:
          document.getElementById("root").style.fontFamily = 'SFMono-Regular'
        break;
        

      }
  }

  
}
