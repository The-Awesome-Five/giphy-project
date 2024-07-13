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
}
