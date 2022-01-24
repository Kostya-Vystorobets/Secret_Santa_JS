"use strict";

function Gift(name) {
    this.__name = name;
    this.__pack = false;
}

Gift.prototype.getName = function () {
    return this.__name;
};

Gift.prototype.getPack = function () {
    return this.__pack;
};

Gift.prototype.packGift = function () {
    return this.__pack = true;
};

Gift.prototype.unpackGift = function () {
    return this.__pack = false;
};