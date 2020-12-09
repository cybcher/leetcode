// . . . [{x1 = 1, y1 = 1, x2 = 2, y2 = 1}, 
//       {x1 = 1, y1 = 1, x2 = 3, y2 = 1} ]

// . . \ + + X
// ----------    o----------o----------o
                //  |          |
                //  o----------o
                //  [{x1 = 1, y1 = 1, x2 = 3, y2 = 1},{x1 = 1, y1 = 1, x2 = 3, y2 = 1}}}]
// . . \ .
// . . \ .
// task - https://www.youtube.com/watch?v=EuPSibuIKIg&ab_channel=Cl%C3%A9mentMihailescu&t=2s

//Roman
// let a = 0;
// let equals = (a, b) => {
//     return a.x == b.x && a.y == b.y;
// }

// let points = [{"x":0, "y":0}, {"x":1, "y":1}, {"x":1, "y":0}, {"x":0, "y":1}, {"x":2, "y":1}];

// let result = 0;
// for (let index = 0; index < points.length; index++) {
//     const a = array[index];
//     arr = points.filter( b => a.x != b.x && a.y == b.y).forEach(b => {
//         points.filter(c => !equals(a, c) && !equals(b,c) && a.x == c.x && a.y > c.y).forEach(d => {
//             d.x == b.x && d.y == c.y;
//             result++;
//         });
//     });
// }
// console.log(`result ${result}`);


let points = [{"x":0, "y":0}, {"x":1, "y":1}, {"x":1, "y":0}, {"x":0, "y":1}, {"x":2, "y":1},{"x":2, "y":0}];

// Vitalii Variant
const isPointsIdentical = (pointOne, pointTwo) => (pointOne.x === pointTwo.x && pointOne.y === pointTwo.y);
const isLinesIdentical = (lineOne, lineTwo) => (
    isPointsIdentical(lineOne[0], lineTwo[0]) && isPointsIdentical(lineOne[1], lineTwo[1])
    || isPointsIdentical(lineOne[0], lineTwo[1]) && isPointsIdentical(lineOne[1], lineTwo[0])
);
const checkIfLineIsHorizontal = (pointOne, pointTwo) => (pointOne.x !== pointTwo.x && pointOne.y === pointTwo.y);
const checkIfLineIsVertical = (pointOne, pointTwo) => (pointOne.x === pointTwo.x && pointOne.y !== pointTwo.y);

const checkLineExistsInArray = (lines, line) => {
    for (let i = 0; i < lines.length; i++) {
        const lineToCompare = lines[i];
        if (isLinesIdentical(lineToCompare, line)) {
            return false;
        }
    }

    return true;
}

const createCorner = (horizontal, vertical) => {
    for (let i = 0; i < horizontal.length; i++) {
        const horizontalPoint = horizontal[i];
        for (let y = 0; y < vertical.length; y++) {
            const verticalPoint = vertical[y];
            if ((horizontalPoint.x === verticalPoint.x && horizontalPoint.y === verticalPoint.y)) {
                const firstPoint = !isPointsIdentical(horizontal[0], horizontalPoint) ? horizontal[0] : horizontal[1];
                const secondPoint = !isPointsIdentical(vertical[0], horizontalPoint) ? vertical[0] : vertical[1];
                console.log(`corner: f: ${JSON.stringify(firstPoint)}, m: ${JSON.stringify(horizontalPoint)}, s: ${JSON.stringify(secondPoint)}`)
                return { firstPoint, middlePoint: horizontalPoint, secondPoint};
            }
        }
    }
};

const isCornersIdentical = (firstCorner, secondCorner) => (
    isPointsIdentical(firstCorner.firstPoint, secondCorner.firstPoint) 
    && isPointsIdentical(firstCorner.middlePoint, secondCorner.middlePoint)
    && isPointsIdentical(firstCorner.secondPoint, secondCorner.secondPoint) 
);

const allVerticalLines = [];
const allHorizontalLines = [];
const pointsCount = points.length;
const alreadyCheckedPoints = [];
for (let a = 0; a < pointsCount; a++) {
    const firstPoint = points[a];
    const alreadySecondIterationCheckedPoints = [];
    for (let b = 0; b < pointsCount; b++) {
        const secondPoint = points[b];
        if (alreadyCheckedPoints.includes(firstPoint) || alreadySecondIterationCheckedPoints.includes(secondPoint) || isPointsIdentical(firstPoint, secondPoint)) continue;
        alreadySecondIterationCheckedPoints.push(firstPoint);
        if (checkIfLineIsVertical(firstPoint, secondPoint)) {
            if (allVerticalLines.length === 0) {
                allVerticalLines.push([ firstPoint, secondPoint ]);
                continue;
            }

            if (checkLineExistsInArray(allVerticalLines, [ firstPoint, secondPoint ])) {
                allVerticalLines.push([ firstPoint, secondPoint ]);
            }
        }

        if (checkIfLineIsHorizontal(firstPoint, secondPoint)) {
            if (allHorizontalLines.length === 0) {
                allHorizontalLines.push([ firstPoint, secondPoint ]);
                continue;
            }

            if (checkLineExistsInArray(allHorizontalLines, [ firstPoint, secondPoint ])) {
                allHorizontalLines.push([ firstPoint, secondPoint ]);
            }
        }
    }

    alreadyCheckedPoints.push(firstPoint);
}

console.log("horizontal lines: "+JSON.stringify(allHorizontalLines));
console.log("vertical lines: "+JSON.stringify(allVerticalLines));

// todo: need to create only unique corners or at same time create rectangle
// issue here other parts works
const corners = [];
const checkedVerticalLines = [];
for (let i = 0; i < allVerticalLines.length; i++) {
    const verticalLine = allVerticalLines[i];
    const checkedHorizontalLines = [];
    for (let y = 0; y < allHorizontalLines.length; y++) {
        const horizontalLine = allHorizontalLines[y];
        if (checkedVerticalLines.length > 0 && checkedHorizontalLines.length > 0) {
            if (!checkedHorizontalLines.includes(horizontalLine) && !checkedVerticalLines.includes(verticalLine)) {
                let newCorner = createCorner(horizontalLine, verticalLine);
                if (newCorner !== undefined) {
                    corners.push(newCorner);
                }
            }
        }

        checkedHorizontalLines.push(horizontalLine);
    }

    checkedVerticalLines.push(verticalLine);
}

let rectangle = new Set()
for (let i = 0; i < corners.length; i++) {
    const corner = corners[i];
    for (let y = i; y < corners.length; y++) {
        const otherCorner = corners[y];
        if (isCornersIdentical(corner, otherCorner)) {
            continue;
        }

        if (isPointsIdentical(corner.firstPoint, otherCorner.secondPoint) && isPointsIdentical(corner.secondPoint, otherCorner.firstPoint) && !isPointsIdentical(corner.middlePoint, otherCorner.middlePoint)) {
            console.log(`rectangle: ${JSON.stringify({"1": corner.firstPoint, "2": corner.middlePoint, "3": corner.secondPoint, "4": otherCorner.middlePoint})}`);
            rectangle.add(`${JSON.stringify(corner.firstPoint)}_${JSON.stringify(corner.middlePoint)}_${JSON.stringify(corner.secondPoint)}_${JSON.stringify(otherCorner.middlePoint)}`);
        }
    }
    
}

console.log("number is: ", rectangle.size);
console.log(rectangle);
// number is:  Set {
//     '{"x":0,"y":1}_{"x":0,"y":0}_{"x":1,"y":0}_{"x":1,"y":1}',
//     '{"x":1,"y":1}_{"x":1,"y":0}_{"x":0,"y":0}_{"x":0,"y":1}',
//     '{"x":0,"y":1}_{"x":0,"y":0}_{"x":2,"y":0}_{"x":2,"y":1}',
//     '{"x":2,"y":1}_{"x":2,"y":0}_{"x":0,"y":0}_{"x":0,"y":1}',
//     '{"x":1,"y":0}_{"x":1,"y":1}_{"x":2,"y":1}_{"x":2,"y":0}',
//     '{"x":2,"y":0}_{"x":2,"y":1}_{"x":1,"y":1}_{"x":1,"y":0}' }