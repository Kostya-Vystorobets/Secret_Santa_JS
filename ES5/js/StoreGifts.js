"use strict";

function StoreGifts() {
    this.__gifts = [];
}

StoreGifts.prototype.addGift = function (gift) {
    this.__gifts.push(gift);
};

StoreGifts.prototype.getGifts = function () {
    return this.__gifts;
};

StoreGifts.prototype.getGiftByName = function (name) {
    var giftsNames = this.__gifts.map(function (value) {
        return value.getName();
    });
    var index = giftsNames.indexOf(name);
    return this.__gifts[index] || null;
};

StoreGifts.prototype.deleteGiftByName = function (name) {
    this.__gifts = this.__gifts.filter(function (value) {
        return name !== value.getName();
    });
};

StoreGifts.prototype.buyGiftByWish = function (wish) {
    var gift = this.getGiftByName(wish);
    if (gift) {
        this.deleteGiftByName(wish);
    }
    return gift;
};

// Async
StoreGifts.prototype.buyGiftByWishAsync = function (wish, callback) {
    setTimeout(
        function () {
            var error;
            var gift = this.getGiftByName(wish);
            if (gift) {
                this.deleteGiftByName(wish);
            } else {
                error = new Error('Error: Gift is absent!')
            }
            callback(error, gift);
        }.bind(this), 2000);
};
