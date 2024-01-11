import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero';
import { HeroService } from '../shared/services/hero.service';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHeroe?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    console.log('Heroe selected:', hero);
    this.selectedHeroe = hero;

    // this.messageService.add('HeroesComponent: Selected Hero ID= ' + hero.id);
    this.messageService.add(`HeroesComponent: Selected Hero ID= ${hero.id}`);
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}
