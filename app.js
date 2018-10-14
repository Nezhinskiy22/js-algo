    function writeAlgoDemo1() {
        var side_a = Math.random() * 10 + 5;
        var side_b = Math.random() * 10 + 5;
        document.write("Side a" + side_a + "Side d" + side_b);
        document.write("Объем куба" + side_a * side_a * side_a);
        document.write("Площадь квадрата" + side_a * side_a);
        document.write("Площадь прямоугольника" + side_a * side_b);
    }

    function writeAlgoDemo2() {
        var side_a = Math.randon() * 10 + 5;
        var side_b = Math.random() * 10 + 5;
        document.write("<p>Side a = " + side_a + "</p><p>Side b" + side_b + "</p>");
        document.write("<p> Площадь прямоугольного треугольника" + side_a * side_b / 2 + "</p>");
    }

    function writeAlgoDemo3() {
        var radius = Math.random() * 10 + 5;
        var square = Math.PI * radius * radius;
        document.write("<p>Radius= " + radius + "</p>");
        document.write("<p>Площадь круга" + square + "</p>");
    }