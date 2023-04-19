export default class ProductoDestacado {
  id: string;
  public Nombre: string;
  precio: number;
  urlImagen: string;

  constructor(id: string, nombre: string, precio: number, urlImagen: string) {
    this.id = id;
    this.Nombre = nombre;
    this.precio = precio;
    this.urlImagen = urlImagen;
  }
}
