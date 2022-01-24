"use strict";

class Gift {
    constructor(name) {
        this.__name = name;
        this.__pack = false;
    }
    get name() {
        return this.__name;
    }
    get pack() {
        return this.__pack;
    }
    packGift() {
        this.__pack = true;
    }
    unpackGift() {
        this.__pack = false;
    }
}