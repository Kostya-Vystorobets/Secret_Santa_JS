"use strict";

function User(name, wish) {
    this.__happiness = 30;
    this.__name = name;
    this.__wish = wish;
    this.__gift = null;
    this.__wishFriend = null;
    this.__giftFriend = null;
    this.__storeGifts = null;
}

User.prototype.getName = function () {
    return this.__name;
};

User.prototype.getWish = function () {
    return this.__wish;
};

User.prototype.getGift = function () {
    return this.__gift;
};

User.prototype.setGift = function (gift) {
    this.__gift = gift;
};

User.prototype.unpackGift = function () {
    this.__gift.unpackGift();
    this.__happiness = Math.floor(Math.random() * (100 - 30) + 30);
};

User.prototype.getWishFriend = function () {
    return this.__wishFriend;
};

User.prototype.setWishFriend = function (wishFriend) {
    this.__wishFriend = wishFriend;
};

User.prototype.getGiftFriend = function () {
    return this.__giftFriend;
};

User.prototype.buyGiftFriend = function () {
    this.__giftFriend = this.__storeGifts.buyGiftByWish(this.__wishFriend);
    this.__giftFriend.packGift();
};

User.prototype.deleteGiftFriend = function () {
    this.__giftFriend = null;
};

User.prototype.setStoreGifts = function (storeGifts) {
    this.__storeGifts = storeGifts;
};

