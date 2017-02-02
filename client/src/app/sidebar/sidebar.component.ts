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
          head: 'manufacturer',
          content: ['Apple', 'Samsung', 'HTC', 'Nokia', 'Sony']
        },
        {
          head: 'storage',
          content: ['16', '32']
        },
        {
          head: 'os',
          content: ['Android', 'iOS', 'Windows']
        },
        {
          head: 'camera',
          content: ['5', '8', '12', '15']
        }
   ];

    public pp = {
      manufacturer:[],
      storage:[],
      os:[],
      camera:[]
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
          manufacturer:[],
          storage:[],
          os:[],
          camera:[]
        };
        this.setProperty(this.pp);
    }
}
