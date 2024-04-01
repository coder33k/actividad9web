// Definir la clase Square que hereda de Shape
class Square extends Shape {
    constructor(sideLength) {
      // Llamar al constructor de Shape con los valores apropiados
      super("square", 4, sideLength);
    }
  
    // Agregar el método calcArea para calcular el área del cuadrado
    calcArea() {
      const area = this.sideLength ** 2;
      console.log(`Area of square: ${area}`);
    }
  }
  
  // Crear una instancia de Square llamada square
  const square = new Square(5);
  
  // Llamar a los métodos calcPerimeter() y calcArea() en la instancia square
  square.calcPerimeter();
  square.calcArea();