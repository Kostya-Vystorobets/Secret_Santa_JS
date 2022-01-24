"use strict";

class SecretSanta extends User {
    constructor(name, wish) {
        super(name, wish);
        this.__allUsers = [];
        this.__allGifts = [];
    }
    addUser(user) {
        this.__allUsers.push(user);
    }
    get allUsers() {
        return this.__allUsers;
    }
    giveOutWishUsers() {
        const allWishesUsers = [];
        this.__allUsers.forEach((value) => allWishesUsers.push(value.wish));
        allWishesUsers.sort();
        this.__allUsers.forEach((value) => {
            for (let i = 0; i < allWishesUsers.length; i++)
                if (value.wish !== allWishesUsers[i]) {
                    value.wishFriend = allWishesUsers[i];
                    allWishesUsers.splice(i, 1);
                    break;
                }
        });
    }
    collectGifts() {
        const collectionGift = [];
        this.__allUsers.forEach((value) => {
            collectionGift.push(value.giftFriend);
            value.deleteGiftFriend()
        });
        this.__allGifts = collectionGift;
    }
    get allGifts() {
        return this.__allGifts;
    }
    giveGiftsUsers() {
        this.__allUsers.forEach((user) => {
            for (var i = 0; i < this.__allGifts.length; i++)
                if (user.wish === this.__allGifts[i].name) {
                    user.gift = this.__allGifts[i];
                    this.__allGifts.splice(i, 1);
                    break;
                }
        }, this);
    }
}
