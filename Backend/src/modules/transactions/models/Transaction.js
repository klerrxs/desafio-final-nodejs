import { v4 as uuidV4 } from "uuid";

export class Transaction {

  id;
  titulo;
  valor;
  tipo;
  categoria;
  created_at;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}