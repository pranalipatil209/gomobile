import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'buy-product,[buy-product]',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})

  export class BuyProductComponent implements OnInit, OnDestroy {
  product: any;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let data = params['q'];
      this.product = JSON.parse(data);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
