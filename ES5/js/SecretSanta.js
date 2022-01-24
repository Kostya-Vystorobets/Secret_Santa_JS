"use strict";

function SecretSanta(name, wish) {
    User.call(this, name, wish);
    this.__allUsers = [];
    this.__allGifts = [];
}

SecretSanta.prototype = Object.create(User.prototype);
SecretSanta.prototype.constructor = SecretSanta;

SecretSanta.prototype.addUser = function (user) {
    this.__allUsers.push(user);
};

SecretSanta.prototype.getAllUsers = function () {
    return this.__allUsers;
};

SecretSanta.prototype.giveOutWishUsers = function () {
    var allWishsUsers = [];
    this.__allUsers.forEach(function (value) {
        allWishsUsers.push(value.getWish())
    });
    allWishsUsers.sort();
    console.log(allWishsUsers);
    this.__allUsers.forEach(function (value) {
        for (var i = 0; i < allWishsUsers.length; i++)
            if (value.getWish() !== allWishsUsers[i]) {
                value.setWishFriend(allWishsUsers[i]);
                allWishsUsers.splice(i, 1);
                break;
            }
    });
};

SecretSanta.prototype.collectGifts = function () {
    var collectionGifts = [];
    this.__allUsers.forEach(function (value) {
        collectionGifts.push(value.getGiftFriend());
        value.deleteGiftFriend();
    })
    this.__allGifts = collectionGifts;
};

SecretSanta.prototype.getAllGifts = function () {
    return this.__allGifts;
};

SecretSanta.prototype.giveGiftsUsers = function () {
    this.__allUsers.forEach(function (user) {
        for (var i = 0; i < this.__allGifts.length; i++)
            if (user.getWish() === this.__allGifts[i].getName()) {
                user.setGift(this.__allGifts[i]);
                this.__allGifts.splice(i, 1);
                break;
            }
    }, this);
};