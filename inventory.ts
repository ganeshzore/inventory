
function hackFlipmart(maxTime: number, inventory: any[]) {
    let maxCost = 0
    let hackInventory = []

    for (let i = 0; i < inventory.length; i++) {
        let b: any = []
        let cost = 0
        let time = 0
        if (inventory[i][0] > maxTime) {
            continue;
        }

        for (let j = 0, k = i + j; j < inventory.length; j++ , k++) {
            if (k >= inventory.length) {
                k = k - inventory.length
            }

            if (i === k) {
                continue;
            }

            let current = time + inventory[k][0]
            if (current > maxTime) {
                continue;
            }
            time += inventory[k][0]
            cost += inventory[k][1]
            b.push(inventory[k])
        }

        if (cost > maxCost) {
            maxCost = cost
            hackInventory = b
        }
    }
    return { maxCost: maxCost, inventory: hackInventory }
}

console.log(hackFlipmart(15, [
    [15, 75], [2, 20], [3, 50], [20, 100], [30, 200], [5, 25], [1, 10], [7, 40], [8, 55]
]))