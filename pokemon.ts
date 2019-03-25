enum Type {
    PLANTE,
    ELECTRIQUE,
    EAU,
}
exports.Type = Type;

class Move {
  public dommage: number;
    constructor(public name: string,public initial_accuracy: number,public type: Type) {
      this.dommage=0;
    }
}
exports.Move = Move;


class Attaque {
    constructor(public name: string,public initial_accuracy: number,public type: Type,public dommage: number) {
    }
}
exports.Attaque = Attaque;


class PokemonPlante {
  public type: Type;
    constructor(public name: string,public attaque: Attaque,public speed: number,public wonder_skin: boolean) {
      this.type=Type.PLANTE;
    }
}
exports.PokemonPlante = PokemonPlante;

interface Pokemon {
    name: string;
    attaque: Attaque;
    speed: number;
    type: Type;
    wonder_skin: boolean;
}

interface IMove {
    name: string;
    initial_accuracy: number;
    type: Type;
    dommage: number;
}

function turnerDecider(poke1 :Pokemon , poke2:Pokemon)
{
  if(poke1.speed>poke2.speed)
  {
    return poke1;
  }
  else
  {
    return poke2;
  }
}
exports.turnerDecider = turnerDecider;

function quiEstTuPokemon(pokemon : Pokemon) {
    return "Tu es " + pokemon.name;
}
exports.quiEstTuPokemon = quiEstTuPokemon;

function accuracyCalculator(pokemon_killer:Pokemon,pokemon_targeted:Pokemon,move:IMove)
{
  if (move.dommage==0)
  {
    if(pokemon_targeted.wonder_skin==true)
    {
      return 50;
    }
  }
  else
  {
    return move.initial_accuracy;
  }
}
exports.accuracyCalculator = accuracyCalculator;

let attaque_sommeil= new Move("sommeil",70,Type.PLANTE);
let attaque_mange_feuille= new Attaque("attaque_mange_feuille",99,Type.PLANTE,1);


let vert_de_terre = new PokemonPlante("vert de terre",attaque_mange_feuille,10,false);
let escargot = new PokemonPlante("escargot",attaque_sommeil,90,true);

console.log(accuracyCalculator(vert_de_terre,escargot,attaque_sommeil))

// document.body.innerHTML = accuracyCalculator(vert_de_terre,escargot,attaque_sommeil);
