import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Leo Messi' },
      { id: 12, name: 'Pedri' },
      { id: 13, name: 'Gavi' },
      { id: 14, name: 'Xavi' },
      { id: 15, name: 'Ter stegen' },
      { id: 16, name: 'Hakimi' },
      { id: 17, name: 'ziyech' },
      { id: 18, name: 'Amrabat' },
      { id: 19, name: 'Buno' },
      { id: 20, name: 'De Bruyne' }
    ];
    return {heroes};
  }

 
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
