import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../cart/cart';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart-modal',
  imports: [Cart],
  templateUrl: './cart-modal.html'
})
export class CartModal {
  @Input() items: CartItem[] = [];
 

  @Output() idProductEventEmitter = new EventEmitter();
  @Output() closeEventEmitter = new EventEmitter();

  onDeleteCart(id: number){
    this.idProductEventEmitter.emit(id);
  }
  closeCart(): void {
    this.closeEventEmitter.emit();
  }
}
