"use strict"

var sg = new StoreGifts();
// console.log(sg);

sg.addGift(new Gift('робот'));
sg.addGift(new Gift('брелок'));
sg.addGift(new Gift('игрушка'));
sg.addGift(new Gift('игра'));
sg.addGift(new Gift('блокнот'));
sg.addGift(new Gift('тарелка'));
sg.addGift(new Gift('мяч'));
sg.addGift(new Gift('олень'));
sg.addGift(new Gift('гирлянда'));
// console.log(sg.getGifts());


// console.log(sg.getGiftByName('игра'));
// console.log(sg.getGifts());

// sg.deleteGiftByName('тарелка');
// console.log(sg.getGifts());

// var pr = sg.buyGiftByWish('игрушка');
// console.log(sg.getGifts());
// console.log(pr);


// console.log(sg.buyGiftByWish('брелок'));
// console.log(sg.getGifts());

///////////////////////////////////////////////////////////////////
var vs = new User('Вася', 'блокнот');
var pt = new User('Петя', 'игра');
var vn = new User('Ваня', 'брелок');
var gn = new User('Гена', 'мяч');
var fd = new User('Федя', 'робот');
var lh = new User('Леха', 'игрушка');

//////////////////////////////////////////////////////////////////

var ss = new SecretSanta('Santa', 'олень');

ss.addUser(vs);
ss.addUser(pt);
ss.addUser(vn);
ss.addUser(gn);
ss.addUser(fd);
ss.addUser(lh);
ss.addUser(ss);
//console.log(ss);


pt.setStoreGifts(sg);
vs.setStoreGifts(sg);
vn.setStoreGifts(sg);
gn.setStoreGifts(sg);
fd.setStoreGifts(sg);
lh.setStoreGifts(sg);
ss.setStoreGifts(sg);

ss.giveOutWishUsers();
console.log(ss);

// Async
sg.buyGiftByWishAsync('гирлянда', function (error, gift) {
    if (error) {
        console.log(error);
    } else {
        console.log(gift);
    }
    sg.buyGiftByWishAsync('тарелка', function (error, gift) {
        if (error) {
            console.log(error);
        } else {
            console.log(gift);
        }
        sg.buyGiftByWishAsync('тарелка', function (error, gift) {
            if (error) {
                console.log(error);
            } else {
                console.log(gift);
            }
        });
    });
});



console.log(pt);
pt.buyGiftFriend();
vs.buyGiftFriend();
vn.buyGiftFriend();
gn.buyGiftFriend();
fd.buyGiftFriend();
lh.buyGiftFriend();
ss.buyGiftFriend();
//console.log(ss);


ss.collectGifts();
//console.log(ss);








ss.giveGiftsUsers();
//console.log(ss);


// gn.unpackGift();
// console.log(gn);
// pt.unpackGift();
// console.log(pt);
// vs.unpackGift();
// console.log(vs);
// fd.unpackGift();
// console.log(fd);
// lh.unpackGift();
// console.log(lh);
// ss.unpackGift();
// console.log(ss);
