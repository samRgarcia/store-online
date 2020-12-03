import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls:['./product.component.scss']
})
export class ProductComponent implements OnChanges,OnInit {
  @Input() product: Product;
  @Output() productCliked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('constructor :)');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChange');
    console.log(changes);
  }

  ngOnInit(){
      console.log(' ngOnInit')
  }




  addCart() {
    console.log('i am methods');
    this.productCliked.emit(this.product.id);
  }
}
