//* https://leetcode.com/problems/design-movie-rental-system/

//* tc : O((m * log(m)) + (n * log(n))) | sc : O(m + n)

var MovieRentingSystem = function(n, entries) {
    this.priceMap = new Map();
    this.movieToShops = new Map();
    this.currentRentals = new Set();
    
    for (let [shop, movie, price] of entries) {
        let key = `${shop},${movie}`;
        this.priceMap.set(key, price);
        
        if (!this.movieToShops.has(movie)) {
            this.movieToShops.set(movie, []);
        }
        this.movieToShops.get(movie).push([price, shop]);
    }
    
    for (let [movie, shops] of this.movieToShops) {
        shops.sort((a, b) => {
            if (a[0] !== b[0]) return a[0] - b[0];
            return a[1] - b[1];
        });
    }
};


MovieRentingSystem.prototype.search = function(movie) {
    let result = [];
    if (!this.movieToShops.has(movie)) {
        return result;
    }
    
    let shops = this.movieToShops.get(movie);
    for (let [price, shop] of shops) {
        let key = `${shop},${movie}`;
        if (!this.currentRentals.has(key)) {
            result.push(shop);
            if (result.length === 5) {
                break;
            }
        }
    }
    return result;
};


MovieRentingSystem.prototype.rent = function(shop, movie) {
    let key = `${shop},${movie}`;
    this.currentRentals.add(key);
};


MovieRentingSystem.prototype.drop = function(shop, movie) {
    let key = `${shop},${movie}`;
    this.currentRentals.delete(key);
};


MovieRentingSystem.prototype.report = function() {
    let rentalList = [];
    
    for (let key of this.currentRentals) {
        let [shop, movie] = key.split(',').map(Number);
        let price = this.priceMap.get(key);
        rentalList.push([price, shop, movie]);
    }
    
    rentalList.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[2] - b[2];
    });
    
    return rentalList.slice(0, 5).map(([price, shop, movie]) => [shop, movie]);
};