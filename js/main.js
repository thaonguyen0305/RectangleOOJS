let rectangle = new Rectangle(100, 50);
rectangle.drawOnCanvas();

let area = rectangle.getArea();
let perimeter = rectangle.getPerimeter();
document.write("Chu vi hinh chu nhat: " + rectangle.getPerimeter() + "m");
document.write("<br>");
document.write("Dien tich hinh chu nhat: " + rectangle.getArea() + "m2");