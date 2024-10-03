import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductHttp } from '../../entities/product.entity';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly http = inject(HttpClient)

  async list(): Promise<Product[]> {
    const request = this.http.get<ProductHttp[]>('https://api.escuelajs.co/api/v1/products')
    const productHttp = await lastValueFrom(request)
    return productHttp.map(pHttp => Product.fromHttp(pHttp))
  }
}
