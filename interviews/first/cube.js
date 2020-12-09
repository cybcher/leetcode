let points = [{
    "x": 0,
    "y": 0
}, {
    "x": 1,
    "y": 1
}, {
    "x": 1,
    "y": 0
}, {
    "x": 0,
    "y": 1
}, {
    "x": 2,
    "y": 1
}, {
    "x": 2,
    "y": 0
}];

let equals = (a, b) => {
    return a.x == b.x && a.y == b.y;
}

let isLeftBottom = (c, left) => left.x == c.x && left.y > c.y;

let result = 0;
points.forEach(a => points.filter(b => a.x > b.x && a.y == b.y).forEach(b => {
    points.filter(c => isLeftBottom(c, a)).forEach(d => {
        d.x == b.x && d.y == c.y;
        result++;
    });
}));

console.log(`result ${result}`);

// o  o  o
// o  o  o
//   o  o 
//   let points = [
// {"x":0, "y":0}, {"x":1, "y":1}, {"x":1, "y":0}, {"x":0, "y":1}, {"x":2, "y":1}
// ];