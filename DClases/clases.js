class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libro = [];
    this.mascotas = [];
  }

  getFullName() {
    console.log(this.nombre + " " + this.apellido);
  }

  addMascota(masc) {
    this.mascotas.push(masc);
  }

  countMascota() {
    console.log(this.mascotas.length);
  }

  addBook(nomb, aut) {
    this.libro.push(nomb, aut);
  }

  getBookName() {
    let nomLib = this.libro;
    console.log(nomLib[0]);
  }
}

const prueba1 = new Usuario("Pepe", "Sanchez", [], []);

prueba1.addMascota("Yoko");

prueba1.addMascota("Zim");

prueba1.addBook("El Aleph", "Jorge Luis Borges");

console.log(prueba1);

prueba1.countMascota();

prueba1.getFullName();

prueba1.getBookName();
