import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Pokemon } from '../../entities/pokemon.entity';
import { PokemonCardComponent } from "../../components/pokemon-card/pokemon-card.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [PokemonCardComponent, NgIf, PokemonCardComponent],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements OnInit{
  private readonly pokemonService = inject(PokemonService)

  @Input({required: true, transform: numberAttribute}) id: number // le transform change notre id de l'url qui est un string en number

  pokemon: Pokemon

  async ngOnInit(){
    this.pokemon = await this.pokemonService.getByPokedexId(this.id)
  }
}
