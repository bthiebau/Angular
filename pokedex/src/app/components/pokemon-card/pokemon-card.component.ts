import { Component, Input } from '@angular/core';
import { Pokemon } from '../../entities/pokemon.entity';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input({required: true}) pokemon: Pokemon
}
