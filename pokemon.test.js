const pokemon = require('./pokemon');
const {PokemonPlante} = require('./pokemon');
const {quiEstTuPokemon} = require('./pokemon');
const {turnerDecider} = require('./pokemon');
const {accuracyCalculator} = require('./pokemon');
const {Move} = require('./pokemon');
const {Attaque} = require('./pokemon');
const {Type} = require('./pokemon');


describe('pokemon',() => {
  it('should return vert de terre when pokemon is named vert de terre',() => {
    var poke=new PokemonPlante("vert de terre", "attaque_mange_feuille")
    expect(quiEstTuPokemon(poke)).toBe("Tu es vert de terre");
  })
  it('pokemon with bigger speed than an other begin',() => {
    var poke_lent=new PokemonPlante("vert de terre", "attaque_mange_feuille",10)
    var poke_rapide=new PokemonPlante("vert de terre", "attaque_mange_feuille",80)
    expect(turnerDecider(poke_lent,poke_rapide)).toBe(poke_rapide);
  })

  it('initial accuracy calculator should be return 50 if target have wonder_skin and the attaque is 0 damage',() => {
    let attaque_sommeil= new Move("sommeil",30,Type.PLANTE);
    let attaque_mange_feuille= new Attaque("attaque_mange_feuille",1,Type.PLANTE,99);
    let vert_de_terre = new PokemonPlante("vert de terre",attaque_mange_feuille,10,false);
    let escargot = new PokemonPlante("escargot",attaque_sommeil,90,true);
    expect(accuracyCalculator(vert_de_terre,escargot,attaque_sommeil)).toBe(50);
  })
});
