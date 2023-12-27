// api/conteudo.js
import banner from "../imagens/banner.avif";
import superMario1 from "../imagens/superMario1.avif";
import superMario2 from "../imagens/superMario2.avif";
import superMario3 from "../imagens/superMario3.avif";
import superMario4 from "../imagens/superMario4.avif";
import superMario5 from "../imagens/superMario5.avif";
import superMario6 from "../imagens/superMario6.avif";

import console1 from "../imagens/console.avif";
import Console2 from "../imagens/console2.avif";
import Console3 from "../imagens/console3.avif";
import XBox from "../imagens/Xbox.avif";
import GameBoy from "../imagens/gameBoy.avif";
import Ps5 from "../imagens/ps5.avif";

import Game from "../imagens/game.avif";
import sonic from "../imagens/sonic.avif";
import bonecos from "../imagens/bonecos.avif";
import donkeys from "../imagens/donkeys.avif";
import pokemon from "../imagens/pokemon.avif";
import pokeball from "../imagens/pokeball.avif";

export const conteudo = {
  banner: {
    src: banner,
    title: "Promoção de Aniversário",
    description: "Todos os produtos com 20% de desconto",
  },
  superMario: [
    {
      src: superMario1,
      width: 192,
      height: 127,
      text: "Boneco Super Mario",
      price: "R$50,00",
    },
    {
      src: superMario2,
      width: 192,
      height: 127,
      text: "Bonecos Mario e amigos",
      price: "R$50,00",
    },
    {
      src: superMario3,
      width: 192,
      height: 127,
      text: "Bonecos Casamento Mario",
      price: "R$50,00",
    },
    {
      src: superMario4,
      width: 192,
      height: 127,
      text: "Boneco Mario Kart",
      price: "R$50,00",
    },
    {
      src: superMario5,
      width: 192,
      height: 127,
      text: "Boneco Mario com powerup",
      price: "R$50,00",
    },
    {
      src: superMario6,
      width: 192,
      height: 127,
      text: "Boneco Mario",
      price: "R$50,00",
    },
  ],

  consoles: [
    {
      src: console1,
      width: 192,
      height: 127,
      text: "Console Clássico",
      price: "R$50,00",
    },
    {
      src: XBox,
      width: 192,
      height: 127,
      text: "X Box",
      price: "R$50,00",
    },
    {
      src: GameBoy,
      width: 192,
      height: 127,
      text: "Game Boy",
      price: "R$50,00",
    },
    {
      src: Console2,
      width: 192,
      height: 127,
      text: "Console Clássico",
      price: "R$50,00",
    },
    {
      src: Ps5,
      width: 192,
      height: 127,
      text: "Plastation 5",
      price: "R$50,00",
    },
    {
      src: Console3,
      width: 192,
      height: 127,
      text: "Console moderno",
      price: "R$50,00",
    },
  ],

  diversos: [
    {
      src: Game,
      width: 192,
      height: 127,
      text: "Game",
      price: "R$50,00",
    },
    {
      src: sonic,
      width: 192,
      height: 127,
      text: "Boneco Sonic",
      price: "R$50,00",
    },
    {
      src: bonecos,
      width: 192,
      height: 127,
      text: "Bonecos Diversos",
      price: "R$50,00",
    },
    {
      src: donkeys,
      width: 192,
      height: 127,
      text: "Bonecos Donkey Kong",
      price: "R$50,00",
    },
    {
      src: pokemon,
      width: 192,
      height: 127,
      text: "Bonecos Pokémon",
      price: "R$50,00",
    },
    {
      src: pokeball,
      width: 192,
      height: 127,
      text: "Pokébola",
      price: "R$50,00",
    },
  ] 
};
