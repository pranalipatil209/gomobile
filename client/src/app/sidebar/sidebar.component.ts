import {Component} from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class sidebarComponent {
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
        localStorage.setItem('filter',JSON.stringify(this.pp));
    }
    clearAll(){
        this.pp = {
          Manufacturer:[],
          Storage:[],
          OS:[],
          Camera:[]
        };
        localStorage.setItem('filter',JSON.stringify(this.pp));

    }
}
