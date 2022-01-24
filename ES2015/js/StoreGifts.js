"use strict";

class StoreGifts {
    constructor() {
        this.__gifts = [];
    }
    addGift(gift) {
        this.__gifts.push(gift);
    }
    get gifts() {
        return this.__gifts;
    }
    getGiftByName(name) {
        const giftsNames = this.__gifts.map((value) => value.name);
        const index = giftsNames.indexOf(name);
        return this.__gifts[index] || null;
    }
    deleteGiftByName(name) {
        this.__gifts = this.__gifts.filter((value) => name !== value.name);
    }
    buyGiftByWish(wish) {
        const gift = this.getGiftByName(wish);
        if (gift) {
            this.deleteGiftByName(wish);
        }
        return gift;
    }

    // Async2
    buyGiftByWishAsyncPromis(wish) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const gift = this.getGiftByName(wish);
                if (gift) {
                    this.deleteGiftByName(wish);
                    resolve(gift);
                } else {
                    reject(new Error('Error: Gift is absent!'));
                }
            }, 2000);
        })
    }
}


// Async1
// StoreGifts.prototype.buyGiftByWishAsync = function (wish, callback) {
//     setTimeout(
//         function () {
//             var error;
//             var gift = this.getGiftByName(wish);
//             if (gift) {
//                 this.deleteGiftByName(wish);
//             } else {
//                 error = new Error('Error: Gift is absent!')
//             }
//             callback(error, gift);
//         }.bind(this), 2000);
// };