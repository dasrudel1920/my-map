/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import {ActionMessage} from "@workadventure/iframe-api-typings";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(async () => {
    console.log('Scripting API ready');
    
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    await WA.players.configureTracking({
        players: true,
        movement: false,
    });

    // The doorState variable contains the state of the door.
    // True: the door is open
    // False: the door is closed
    // We listen to variable change to display the correct door image.
    WA.state.onVariableChange('doorState').subscribe((doorState) => {
       displayDoor(doorState);
    });

    displayDoor(WA.state.doorState);

    let openCloseMessage: ActionMessage | undefined;

    // When someone walks on the doorstep (inside the room), we display a message to explain how to open or close the door
    WA.room.onEnterLayer('doorsteps/inside_doorstep').subscribe(() => {
        openCloseMessage = WA.ui.displayActionMessage({
            message: "Drücke 'Leertase' zum hissen der Flagge.",
            callback: () => {
                WA.state.doorState = !WA.state.doorState;
            }
        });
    });

    // When someone leaves the doorstep (inside the room), we remove the message
    WA.room.onLeaveLayer('doorsteps/inside_doorstep').subscribe(() => {
        if (openCloseMessage !== undefined) {
            openCloseMessage.remove();
        }
    });
        
    //FangeMarvspiel
    WA.room.setTiles([
      { x: Number(WA.state.xMarv), y: Number(WA.state.yMarv), tile: "marv", layer: "FangeMarv" },
    ]);
    
    WA.room.onEnterLayer('FangeMarv').subscribe(() => {
            WA.ui.modal.openModal({
            title: 'casino',
            src: 'https://google.de',
            position: 'left',
            allowApi: true,
            allow: null
        });
    });
    
}).catch(e => console.error(e));

/**
 * Display the correct door image depending on the state of the door.
 */

function displayDoor(state: unknown) {
    var mySound = WA.sound.loadSound("Rudelhymne.mp3");
    var config = {
        volume : 0.5,
        loop : false,
        rate : 1,
        detune : 1,
        delay : 0,
        seek : 0,
        mute : false
    }
    if (state === true) {
        WA.room.hideLayer('door/door_closed');
        WA.room.showLayer('door/door_opened');
        mySound.play(config);
    } else {
        WA.room.showLayer('door/door_closed');
        WA.room.hideLayer('door/door_opened');
        mySound.stop();
    }
}

export {};
