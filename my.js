class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getPerimeter() {
        return (this.height + this.width) * 2;
    }

    getArea() {
        return this.height * this.width;
    }

    drawOnCanvas() {
        let canvas = document.getElementById("myCanvas"); //khai báo biến canvas
        let ctx = canvas.getContext("2d"); //lấy thuộc tính của canvas

        ctx.clearRect(0, 0, canvas.width, canvas.height); //clear lại để vẽ hình mới
        ctx.fillRect(10, 10, this.height, this.width); // vẽ hình chữ nhật với kích thước yêu cầu 
    }
}

let rectangle = new Rectangle(100, 50);
rectangle.drawOnCanvas();

let area = rectangle.getArea();
let perimeter = rectangle.getPerimeter();
document.getElementById("area").innerHTML="Diện tích của hình chữ nhật là: " + area;
document.getElementById("perimeter").innerHTML="Chu vi của hình chữ nhật là: " + perimeter;
