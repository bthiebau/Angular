import { Component, inject } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { NgForOf } from '@angular/common';
import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../entities/product.entity';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [ProductCardComponent, NgForOf],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {

  private readonly productervice = inject(ProductService)
  private readonly activateRoute = inject(ActivatedRoute)
  private readonly router = inject(Router)

  product: Product[]

  async ngOnInit(): Promise<void> {
    const search = this.activateRoute.snapshot.queryParamMap.get('s')

    if(!search || search.length < 3) {
      this.router.navigateByUrl('/')
      return
    }


    const product = await this.productervice.list()
    this.product = product.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
  }
}
