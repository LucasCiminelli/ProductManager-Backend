class ProductManager {
  products;
  static id = 0;

  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const product = {
      id: ProductManager.id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (
      product.title === undefined ||
      product.id === undefined ||
      product.description === undefined ||
      product.price === undefined ||
      product.thumbnail === undefined ||
      product.code === undefined ||
      product.stock === undefined
    ) {
      console.error("Faltan completar campos");
      return;
    }

    this.products.push(product);
    ProductManager.id++;
    return product;
  }

  getProducts() {
    return this.products;
  }

  getProductsById(id) {
    const foundProduct = this.products.find((prod) => prod.id === id);
    if (!foundProduct) {
      console.error(
        "Error, el ID ingresado no coincide con ningun producto. Ingrese un ID válido"
      );
      return;
    }
    return console.log(
      "El id ingresado corresponde al siguiente producto: ",
      foundProduct
    );
  }

  getProductRepetido(code) {
    const repetido = this.products.find((prod) => prod.code === code);
    if (repetido) {
      console.log("Producto repetido", repetido);
      return repetido;
    }
  }
}

const manager = new ProductManager();

manager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
manager.addProduct(
  "producto prueba2",
  "Este es un producto prueba2",
  200,
  "Sin imagen2",
  "abc123",
  10
);

const verProducts = manager.getProducts();
console.log("Products:", verProducts);

const productoBuscado = manager.getProductsById(4);

const productoRepetido = manager.getProductRepetido("abc123");
