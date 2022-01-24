"use strict";

class User {
    constructor(name, wish) {
        this.__happiness = 30;
        this.__name = name;
        this.__wish = wish;
        this.__gift = null;
        this.__wishFriend = null;
        this.__giftFriend = null;
        this.__storeGifts = null;
    }
    get name() {
        return this.__name;
    }
    get wish() {
        return this.__wish;
    }
    get gift() {
        return this.__gift;
    }
    set gift(gift) {
        this.__gift = gift;
    }
    unpackGift() {
        this.__gift.unpackGift();
        this.__happiness = Math.floor(Math.random() * (100 - 30) + 30);
    }
    get wishFriend() {
        return this.__wishFriend;
    }
    set wishFriend(wishFriend) {
        this.__wishFriend = wishFriend;
    }
    get giftFriend() {
        return this.__giftFriend;
    }
    buyGiftFriend() {
        this.__giftFriend = this.__storeGifts.buyGiftByWish(this.__wishFriend);
        this.__giftFriend.packGift();
    }
    deleteGiftFriend() {
        this.__giftFriend = null;
    }
    set storeGifts(storeGifts) {
        this.__storeGifts = storeGifts;
    }
}