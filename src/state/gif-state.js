// 90 gifs -> gifstate
// let offset = 1
// array.slice(offset,offset+15)
// container

// const gifState = [
//    id: {
//         id,
//         url,
//         username,
//         uploadedTime
//     },
//     {
//         id,
//         url,
//         username,
//         uploadedTime
//     },
//     {
//         id,
//         url,
//         username,
//         uploadedTime
//     }
// ]
// }

// new page - new gif state
// detailed - getGifStatebyId
// favourites - id => id: { }
//

//

let gifState = [];
let offset = 0;
let currOffset = 0;

export const populateGifState = (data) => {
    gifState = data.map(gif => ({
        id: gif.id,
        username: gif.username,
        date: gif.import_datetime,
        url: gif.images.original.url
    }));
}

export const getGifState = () => [...gifState];

export const resetGifState = () => {
    gifState = [];
    offset = 0;
    currOffset = 0;
}

export const getOffset = () => offset;
export const incrementOffset = () => offset+=45;

export const getCurrOffset = () => currOffset;
export const incrementCurrOffset = () => offset+=15;
