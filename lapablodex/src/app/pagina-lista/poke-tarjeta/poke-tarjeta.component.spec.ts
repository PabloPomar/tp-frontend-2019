import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokeTarjetaComponent } from './poke-tarjeta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PokeTarjetaComponent', () => {
  let component: PokeTarjetaComponent;
  let fixture: ComponentFixture<PokeTarjetaComponent>;
  let poke: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule],
      declarations: [ PokeTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeTarjetaComponent);
    component = fixture.componentInstance;
    poke = {_id: '5d8d277196f0ecc951bfd0f4',
      id: '001',
      name: 'Bulbasaur',
      img: 'http://img.pokemondb.net/artwork/bulbasaur.jpg',
      type: ['Grass', 'Poison'],
      stats: {hp: 45, attack: '49', defense: '49', spattack: '65', spdefense: '65', speed: 45},
      moves: {level:
          [{learnedat: '', name: 'tackle', gen: 'V'},
            {learnedat: '3', name: 'growl', gen: 'V'},
            {learnedat: '7', name: 'leech seed', gen: 'V'},
            {learnedat: '9', name: 'vine whip', gen: 'V'},
            {learnedat: '13', name: 'poisonpowder', gen: 'V'},
            {learnedat: '13', name: 'sleep powder', gen: 'V'},
            {learnedat: '15', name: 'take down', gen: 'V'},
            {learnedat: '19', name: 'razor leaf', gen: 'V'},
            {learnedat: '21', name: 'sweet scent', gen: 'V'},
            {learnedat: '25', name: 'growth', gen: 'V'},
            {learnedat: '27', name: 'double-edge', gen: 'V'},
            {learnedat: '31', name: 'worry seed', gen: 'V'},
            {learnedat: '33', name: 'synthesis', gen: 'V'},
            {learnedat: '37', name: 'seed bomb', gen: 'V'}],
        tmhm: [{learnedat: 'tm06', name: 'toxic', gen: 'V'},
          {learnedat: 'tm09', name: 'venoshock', gen: 'V'},
          {learnedat: 'tm10', name: 'hidden power', gen: 'V'},
          {learnedat: 'tm11', name: 'sunny day', gen: 'V'},
          {learnedat: 'tm16', name: 'light screen', gen: 'V'},
          {learnedat: 'tm17', name: 'protect', gen: 'V'},
          {learnedat: 'tm20', name: 'safeguard', gen: 'V'},
          {learnedat: 'tm21', name: 'frustration', gen: 'V'},
          {learnedat: 'tm22', name: 'solarbeam', gen: 'V'},
          {learnedat: 'tm27', name: 'return', gen: 'V'},
          {learnedat: 'tm32', name: 'double team', gen: 'V'},
          {learnedat: 'tm36', name: 'sludge bomb', gen: 'V'},
          {learnedat: 'tm42', name: 'facade', gen: 'V'},
          {learnedat: 'tm44', name: 'rest', gen: 'V'},
          {learnedat: 'tm45', name: 'attract', gen: 'V'},
          {learnedat: 'tm48', name: 'round', gen: 'V'},
          {learnedat: 'tm49', name: 'echoed voice', gen: 'V'},
          {learnedat: 'tm53', name: 'energy ball', gen: 'V'},
          {learnedat: 'tm70', name: 'flash', gen: 'V'},
          {learnedat: 'tm75', name: 'swords dance', gen: 'V'},
          {learnedat: 'tm86', name: 'grass knot', gen: 'V'},
          {learnedat: 'tm87', name: 'swagger', gen: 'V'},
          {learnedat: 'tm90', name: 'substitute', gen: 'V'},
          {learnedat: 'tm94', name: 'rock smash', gen: 'V'},
          {learnedat: 'hm01', name: 'cut', gen: 'V'},
          {learnedat: 'hm04', name: 'strength', gen: 'V'}],
        egg: [{name: 'skull bash', gen: 'V'},
          {name: 'charm', gen: 'V'},
          {name: 'petal dance', gen: 'V'},
          {name: 'magical leaf', gen: 'V'},
          {name: 'grasswhistle', gen: 'V'},
          {name: 'curse', gen: 'V'},
          {name: 'ingrain', gen: 'V'},
          {name: 'nature power', gen: 'V'},
          {name: 'amnesia', gen: 'V'},
          {name: 'leaf storm', gen: 'V'},
          {name: 'power whip', gen: 'V'},
          {name: 'sludge', gen: 'V'},
          {name: 'endure', gen: 'V'},
          {name: 'giga drain', gen: 'V'}],
        tutor: [{name: 'grass pledge', gen: 'V'}],
        gen34: [{name: 'bullet seed', method: 'Gen IV TM09'},
          {name: 'secret power', method: 'Gen IV TM43'},
          {name: 'captivate', method: 'Gen IV TM78'},
          {name: 'sleep talk', method: 'Gen IV TM82'},
          {name: 'natural gift', method: 'Gen IV TM83'},
          {name: 'fury cutter', method: 'Move Tutor  PtHGSS'},
          {name: 'knock off', method: 'Move Tutor  PtHGSS'},
          {name: 'snore', method: 'Move Tutor  PtHGSS'},
          {name: 'mudslap', method: 'Move Tutor  PtHGSS'},
          {name: 'string shot', method: 'Move Tutor  HGSS'},
          {name: 'headbutt', method: 'Move Tutor  HGSS'},
          {name: 'defense curl', method: 'Move Tutor  Emerald'},
          {name: 'body slam', method: 'Move Tutor  FRLG'},
          {name: 'mimic', method: 'Move Tutor  FRLG'}]},
      damages: {normal: '1', fire: '2', water: '0.5', electric: '0.5',
        grass: '0.25', ice: '2', fight: '0.5', poison: '1', ground: '1',
        flying: '2', psychic: '2', bug: '1', rock: '1', ghost: '1', dragon: '1', dark: '1', steel: '1'},
      misc: {sex: {male: 87.5, female: '12.5'},
        abilities: {normal: ['Overgrow'], hidden: ['Chlorophyll']},
        classification: 'seed pokemon',
        height: '2’04”', weight: '15.2',
        capturerate: 45, eggsteps: '5120',
        expgrowth: '1059860', happiness: '70',
        evpoints: ['1 Sp. Attack Point(s)'], fleeflag: '34',
        entreeforestlevel: '10'}, description: 'Esto esta funcionando'};
    component.pokemon = poke;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
