let points = [{"x":0, "y":0}, {"x":1, "y":1}, {"x":1, "y":0}, {"x":0, "y":1}, {"x":2, "y":1},{"x":2, "y":0}, {"x":0, "y":0} ];
let lines = [];
let result = 0;

for(let i = 0; i < points.length; i++) {
    for(let j = i; j < points.length; j++) {
        if (points[i].y === points[j].y && points[i].x !== points[j].x) {
            if (points[i].x > points[j].x) {
                lines.push([points[j], points[i]]);
            } else {
                lines.push([points[i], points[j]]);
            }
        }
    }
}

for (let i = 0; i < lines.length; i++) {
    for (let j = i; j < lines.length; j++) {
        if (lines[i][0].x === lines[j][0].x && lines[i][1].x === lines[j][1].x && lines[i][0].y !== lines[j][0].y) {
            result++;
        }
    }
}

console.log(result);