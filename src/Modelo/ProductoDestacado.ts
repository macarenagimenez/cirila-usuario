export default class ProductoDestacado {
  public Nombre: string;
  precio: number;
  urlImagen: string;

  constructor(nombre: string, precio: number, urlImagen: string) {
    this.Nombre = nombre;
    this.precio = precio;
    this.urlImagen = urlImagen;
  }
}
