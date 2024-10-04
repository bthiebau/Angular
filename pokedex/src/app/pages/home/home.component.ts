import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Pokemon } from '../../entities/pokemon.entity';
import { PokemonCardComponent } from "../../components/pokemon-card/pokemon-card.component";
import { NgForOf, NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokemonCardComponent, NgForOf, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly pokemonService = inject(PokemonService)
  private readonly router = inject(Router)

  searchForm: FormGroup
  pokemon:  Pokemon[];

  async ngOnInit(): Promise<void> {
    const pokemon = await this.pokemonService.list()
    const randomIndex = Math.floor(Math.random() * pokemon.length)
    this.pokemon = pokemon.slice(randomIndex, randomIndex + 4)

    this.searchForm = new FormGroup({ 
      search: new FormControl('', [Validators.minLength(3), Validators.required])
    })
  }

  onSubmitSearch(){
    const { search } = this.searchForm.value
    this.router.navigate(['/search-results'], { queryParams: { s: search} })
  }
}
