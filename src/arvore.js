class Node {
    constructor(age = null, name = null) {
        this.name = name;
        this.age = age;
        this.left = null;
        this.right = null;
    };
};


export class PeDeAcerola {
    constructor() {
        this.root = null;
    };

    insert(chave, data) {
        const newNode = new Node(chave, data);

        if(this.root === null) {
            this.root = newNode;
            console.log(`Pessoa ${newNode.name} (idade: ${newNode.age} inserida na Raíz!)`);
        } else {
            this.insert_recursive(this.root, newNode);
        };
    };

    insert_recursive(node, newNode) {
        if(newNode.age < node.age) {
            if(node.left === null) {
                node.left = newNode;
                console.log(`Pessoa ${newNode.name} (idade: ${newNode.age} inserida na Esquerda!)`);
            } else this.insert_recursive(node.left, newNode);

        } else if(newNode.age > node.age) {
            if(node.right === null) {
                node.right = newNode;
                console.log(`Pessoa ${newNode.name} (idade: ${newNode.age} inserida na Direita!)`);
            } else this.insert_recursive(node.right, newNode);

        } else {
            if(newNode.name.length < node.name.length) {
                if(node.left === null) {
                    node.left = newNode;
                    console.log(`Pessoa ${newNode.name} (idade: ${newNode.age} inserida na Esquerda! Idade Já existente)`);
                } else this.insert_recursive(node.left, newNode);

            } else if (newNode.name.length > node.name.length) {
                if(node.right === null) {
                    node.right = newNode;
                    console.log(`Pessoa ${newNode.name} (idade: ${newNode.age} inserida na Direita! Idade já existente)`);
                } else this.insert_recursive(node.right, newNode);
        
            } else {
                node.right = newNode;
                console.log(`Pessoa ${newNode.name} (idade: ${newNode.age} inserida na Direita! Idade e Nome já Existente)`)
            };
        };
    };

    inOrder() {
        if(this.root === null) {
            console.log(`A árvore está vazia`);
        } else {
            this._recursiveInOrder(this.root);
        };
    };

    preOrder() {
        if(this.root === null) {
            console.log(`A árvore está vazia`);
        } else {
            this._recursivePreOrder(this.root);
        };
    };

    postOrder() {
        if(this.root === null) {
            console.log(`A árvore está vazia`);
        } else {
            this._recursivePostOrder(this.root);
        };
    };

    deOrder() {
        if(this.root === null) {
            console.log(`A árvore está vazia`);
        } else {
            this._recursiveDeOrder(this.root);
        }
    };

    large() {
        if(this.root === null) {
            console.log(`A árvore está vazia`);
            return
        } else {
            this._inLarge();
        }
    }

    _recursiveInOrder(node) {
        if(node === null) return;
        this._recursiveInOrder(node.left);
        console.log(`Nome: ${node.name}  -- Idade: ${node.age}`);
        this._recursiveInOrder(node.right);
    };

    _recursivePreOrder(node) {
        if(node === null) return;

        console.log(`Nome: ${node.name}  -- Idade: ${node.age}`);
        this._recursivePreOrder(node.left);
        this._recursivePreOrder(node.right);
    };

    _recursivePostOrder(node) {
        if(node === null) return;

        this._recursivePostOrder(node.left);
        this._recursivePostOrder(node.right);
        console.log(`Nome: ${node.name}  -- Idade: ${node.age}`);
    };

    _recursiveDeOrder(node) {
        if(node === null) return;

        this._recursiveDeOrder(node.right);
        console.log(`Nome: ${node.name}  -- Idade: ${node.age}`);
        this._recursiveDeOrder(node.left);
    };

    _inLarge() {
        let fila = [];
        fila.push(this.root);
        while(fila.length > 0) {
            let node = fila.shift();
            console.log(`Nome: ${node.name}  -- Idade: ${node.age}`);

            if(node.left != null) fila.push(node.left); 
            if(node.right != null) fila.push(node.right);
        } 
    };

};