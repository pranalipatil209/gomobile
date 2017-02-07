import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarsComponent } from '../ratings/stars/stars.component';

@Component({
  selector: 'buy-product,[buy-product]',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})

  export class BuyProductComponent implements OnInit, OnDestroy {
  product: any;
  private sub: any;
  data : any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.data = params['q'];
      this.product = JSON.parse(this.data);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
