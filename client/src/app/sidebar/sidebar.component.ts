import {Component} from '@angular/core';
import { SharedataService } from '../services/sharedata.service';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    providers : [ SharedataService ]
})

export class sidebarComponent {

   constructor (private share:SharedataService) {}
   public data = [
        {
          head: 'Manufacturer',
          content: [' Apple', ' Samsung', ' HTC', ' Nokia', ' Sony']
        },
        {
          head: 'Storage',
          content: [' 16 GB', ' 32 GB']
        },
        {
          head: 'OS',
          content: [' Android', ' iOS', ' Windows']
        },
        {
          head: 'Camera',
          content: [' 5 Mpx', ' 8 Mpx', ' 12 Mpx', ' 15 Mpx']
        }
   ];

    public pp = {
      Manufacturer:[],
      Storage:[],
      OS:[],
      Camera:[]
    };

    getProperty(filter){
      return this.pp[filter];
    }

    setProperty(value){
      this.share.setData(JSON.stringify(value));
    }

    checkedC(filter,val){
        console.log(filter,val);
        let key = this.getProperty(filter);
        if ((<HTMLInputElement>document.getElementById(val)).checked === true) {
            key.push(val);
        }
        else{
            if ((<HTMLInputElement>document.getElementById(val)).checked === false) {
                let uncheck = key.indexOf(val);
                key.splice(uncheck,1);
            }
        }
        this.setProperty(this.pp);
    }
    clearAll(){
        this.pp = {
          Manufacturer:[],
          Storage:[],
          OS:[],
          Camera:[]
        };
        this.setProperty(this.pp);
    }
}
