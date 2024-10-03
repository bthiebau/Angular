import { Component, inject } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../entities/product.entity';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly productService = inject(ProductService)

  product:  Product[];

  async ngOnInit() {
    this.product = await this.productService.list()
    console.log(this.product)
  }
}
