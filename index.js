import { PeDeAcerola } from "./src/arvore.js";
const arvore = new PeDeAcerola;
arvore.insert(20, "Edoardo");
arvore.insert(20, "João");
arvore.insert(19, "Eduarda");
arvore.insert(18, "Gabriel");
arvore.insert(20, "Edoardo");
arvore.insert(27, "Gustavo");
arvore.insert(23, "Ana");
arvore.insert(22, "Estevam");
arvore.insert(32, "Josiel");
arvore.insert(18, "Vanda");

console.log(`\n In Order: `);
arvore.inOrder();

console.log(`\n Pre Order: `)
arvore.preOrder();

console.log(`\n Post Order: `)
arvore.postOrder();

console.log(`\n Dec Order: `)
arvore.deOrder();

console.log(`\n Largura: `);
arvore.large();
