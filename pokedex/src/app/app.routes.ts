import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth/auth.guard';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'pokemon', pathMatch: 'full'},

    //Les enfant ont le guards du parent
    {
        path: 'pokemon', canActivate: [authGuard], children: [
            { path: '', component: HomeComponent },
            { path: ':id', component: PokemonDetailsComponent}
        ]
    },


    {path: 'search-results', canActivate: [authGuard], component: SearchResultsComponent},
    {path: 'connexion', component: LoginComponent},
    {path: '**', redirectTo:''}
];
