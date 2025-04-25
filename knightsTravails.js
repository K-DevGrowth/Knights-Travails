const knightMoves = (start, end) => {
    const knightMove = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [-1, 2], [1, -2], [-1, -2]
    ];

    const isValid = (u, v) => {
        return u >= 0 && u < 8 && v >= 0 && v < 8;
    }

    const queue = [[start, [start]]]; // position, path
    const visited = new Set([`${start[0]},${start[1]}`]);

    while (queue.length > 0) {
        const [current, path] = queue.shift();
        const [x, y] = current;

        if (x === end[0] && y === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(pos => console.log(`[${pos[0]},${pos[1]}]`));
            return path;
        }

        for (const [dx, dy] of knightMove) {
            const newX = x + dx;
            const newY = y + dy;
            const key = `${newX},${newY}`;

            if (isValid(newX, newY) && !visited.has(key)) {
                visited.add(key);
                queue.push([[newX, newY], [...path, [newX, newY]]]);
            }
        }
    }
    console.log("No valid path exists!");
    return null;
}

// Test the class
knightMoves([3, 3], [4, 3]);