// api/conteudo.js
import banner from "../imagens/banner.avif";
import superMario1 from "../imagens/superMario1.avif";
import superMario2 from "../imagens/superMario2.avif";
import superMario3 from "../imagens/superMario3.avif";
import superMario4 from "../imagens/superMario4.avif";
import superMario5 from "../imagens/superMario5.avif";
import superMario6 from "../imagens/superMario6.avif";

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
};
