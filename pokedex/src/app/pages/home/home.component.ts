import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Pokemon } from '../../entities/pokemon.entity';
import { PokemonCardComponent } from "../../components/pokemon-card/pokemon-card.component";
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokemonCardComponent, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly pokemonService = inject(PokemonService)

  pokemon:  Pokemon[];

  async ngOnInit() {
    this.pokemon = await this.pokemonService.list()
    console.log(this.pokemon)
  }
}
