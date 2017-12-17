class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this._created = created;
  }

  get created() {
    return this._created;
  }

  set created(created) {
    if (!created) {
      throw new Error('inválido');
    }
    this._created = created;
  }

  toString() {
    return `mensagem criada em: ${this.created}`; 
  }

}

var mensagem = new Message();
console.log(String(mensagem));
