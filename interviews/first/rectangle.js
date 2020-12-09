let points = [{x:4, y:5}, {x:0,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:0}, {x:2,y:1}, {x:2,y:0}]

paralell_x = (point1, point2) =>
    point1.y == point2.y

paralell_y = (point1, point2) =>
    point1.x == point2.x

same_point = (point1, point2) =>
    point1.y == point2.y && point1.x == point2.x

compare_point = (point1, point2) => {
    let point1_value = point1.x * 10 + point1.y;
    let point2_value = point2.x * 10 + point2.y; 
    if  (point1_value > point2_value) 
        return 1;
    if  (point1_value < point2_value) 
        return -1;
    return 0;
}

hash_point = point => `x${point.x}y${point.y}`

hash_rectangle = points => points.map(point => hash_point(point)).join()

hashedPoints = points.map(point => hash_point(point));

rectangles = new Set();

points.forEach(main_point => {
    pointsX = points.filter(point => paralell_x(main_point, point) && !same_point(main_point, point));
    pointsY = points.filter(point => paralell_y(main_point, point) && !same_point(main_point, point));
    pointsX.forEach(px => {
        pointsY.forEach(py => {
            // we have 3 corners, lets check if 4 exist
            if (hashedPoints.includes(hash_point({x: px.x, y: py.y}))) {
                rectangle = [main_point, px, py, {x: px.x, y: py.y}].sort(compare_point);
                rectangles.add(hash_rectangle(rectangle));
            }
        })
    })
})

console.log(rectangles.size);