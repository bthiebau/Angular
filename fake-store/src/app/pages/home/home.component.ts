import { Component, inject } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../entities/product.entity';
import { NgForOf, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, NgForOf, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly productService = inject(ProductService)
  private readonly router = inject(Router)

  searchForm: FormGroup
  product:  Product[];

  async ngOnInit() {
    const product = await this.productService.list()
    const randomIndex = Math.floor(Math.random() * product.length)
    this.product = product.slice(randomIndex, randomIndex + 4)

    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.minLength(3), Validators.required])
    })
  }

  onSubmitSearch(){
    const { search } = this.searchForm.value
    this.router.navigate(['/search-results'], { queryParams: { s: search} })
  }
}
