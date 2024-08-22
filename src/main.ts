/// <reference types="@workadventure/iframe-api-typings" />

console.log('Script started successfully');


// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags);


    WA.room.area.onEnter('stairBottomToMiddle').subscribe(() => {
        WA.nav.goToRoom("#entrymiddlefrombottom")
    });

    // From middle to bottom
    WA.room.area.onEnter('stairMiddleToBottom').subscribe(() => {
        WA.nav.goToRoom("#entrybottom")
    });

    // From middle to top
    WA.room.area.onEnter('stairMiddleToTopLeft').subscribe(() => {
        WA.nav.goToRoom("#entrytopleft")
    });
    WA.room.area.onEnter('stairMiddleToTopRight').subscribe(() => {
        WA.nav.goToRoom("#entrytopright")
    });

    // From top to middle
    WA.room.area.onEnter('stairTopToMiddleLeft').subscribe(() => {
        WA.nav.goToRoom("#entrymiddleleft")
    });
    WA.room.area.onEnter('stairTopToMiddleRight').subscribe(() => {
        WA.nav.goToRoom("#entrymiddleright")
    });
}).catch(e => console.error(e));


export {};
