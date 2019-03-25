var Type;
(function (Type) {
    Type[Type["PLANTE"] = 0] = "PLANTE";
    Type[Type["ELECTRIQUE"] = 1] = "ELECTRIQUE";
    Type[Type["EAU"] = 2] = "EAU";
})(Type || (Type = {}));
exports.Type = Type;
var Move = /** @class */ (function () {
    function Move(name, initial_accuracy, type) {
        this.name = name;
        this.initial_accuracy = initial_accuracy;
        this.type = type;
        this.dommage = 0;
    }
    return Move;
}());
exports.Move = Move;
var Attaque = /** @class */ (function () {
    function Attaque(name, initial_accuracy, type, dommage) {
        this.name = name;
        this.initial_accuracy = initial_accuracy;
        this.type = type;
        this.dommage = dommage;
    }
    return Attaque;
}());
exports.Attaque = Attaque;
var PokemonPlante = /** @class */ (function () {
    function PokemonPlante(name, attaque, speed, wonder_skin) {
        this.name = name;
        this.attaque = attaque;
        this.speed = speed;
        this.wonder_skin = wonder_skin;
        this.type = Type.PLANTE;
    }
    return PokemonPlante;
}());
exports.PokemonPlante = PokemonPlante;
function turnerDecider(poke1, poke2) {
    if (poke1.speed > poke2.speed) {
        return poke1;
    }
    else {
        return poke2;
    }
}
exports.turnerDecider = turnerDecider;
function quiEstTuPokemon(pokemon) {
    return "Tu es " + pokemon.name;
}
exports.quiEstTuPokemon = quiEstTuPokemon;
function accuracyCalculator(pokemon_killer, pokemon_targeted, move) {
    if (move.dommage == 0) {
        if (pokemon_targeted.wonder_skin == true) {
            return 50;
        }
    }
    else {
        return move.initial_accuracy;
    }
}
exports.accuracyCalculator = accuracyCalculator;
var attaque_sommeil = new Move("sommeil", 70, Type.PLANTE);
var attaque_mange_feuille = new Attaque("attaque_mange_feuille", 99, Type.PLANTE, 1);
var vert_de_terre = new PokemonPlante("vert de terre", attaque_mange_feuille, 10, false);
var escargot = new PokemonPlante("escargot", attaque_sommeil, 90, true);
console.log(accuracyCalculator(vert_de_terre, escargot, attaque_sommeil));
// document.body.innerHTML = accuracyCalculator(vert_de_terre,escargot,attaque_sommeil);
