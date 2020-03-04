function hackFlipmart(maxTime, inventory) {
    var maxCost = 0;
    var hackInventory = [];
    for (var i = 0; i < inventory.length; i++) {
        var b = [];
        var cost = 0;
        var time = 0;
        if (inventory[i][0] > maxTime) {
            continue;
        }
        for (var j = 0, k = i + j; j < inventory.length; j++, k++) {
            if (k >= inventory.length) {
                k = k - inventory.length;
            }
            if (i === k) {
                continue;
            }
            var current = time + inventory[k][0];
            if (current > maxTime) {
                continue;
            }
            time += inventory[k][0];
            cost += inventory[k][1];
            b.push(inventory[k]);
        }
        if (cost > maxCost) {
            maxCost = cost;
            hackInventory = b;
        }
    }
    return { maxCost: maxCost, inventory: hackInventory };
}
var hackedData = hackFlipmart(15, [
    [15, 75], [2, 20], [3, 50], [20, 100], [30, 200], [5, 25], [1, 10], [7, 40], [8, 55]
]);
console.log(hackedData);
