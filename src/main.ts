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
    //WA.state.onVariableChange('doorState').subscribe((doorState) => {
    //   displayDoor(doorState);
    //});

    displayDoor(WA.state.doorState);

    let openCloseMessage: ActionMessage | undefined;

    // When someone walks on the doorstep (inside the room), we display a message to explain how to open or close the door
    WA.room.onEnterLayer('doorsteps/inside_doorstep').subscribe(() => {
        openCloseMessage = WA.ui.displayActionMessage({
            message: "Drücke 'Leertase' zum hissen der Flagge.",
            callback: () => {
                if (WA.state.doorState == 0) {
                        WA.state.doorState = "2";
                        displayDoor("2");
                         setTimeout(() => {
                         WA.state.doorState = "1";
                        displayDoor("1");
                     }, 2500); 
                }  else if (WA.state.doorState == 1) {
                        WA.state.doorState = "3";
                        displayDoor("3");
                         setTimeout(() => {
                         WA.state.doorState = "0";
                        displayDoor("0");
                     }, 2500); 
                }  

            }
        });
    });

    // When someone leaves the doorstep (inside the room), we remove the message
    WA.room.onLeaveLayer('doorsteps/inside_doorstep').subscribe(() => {
        if (openCloseMessage !== undefined) {
            openCloseMessage.remove();
        }
    });


}).catch(e => console.error(e));

/**
 * Display the correct door image depending on the state of the door.
 */

function displayDoor(state: unknown) {
    if (state == 0) {
        WA.room.showLayer('door/door_closed');
        WA.room.hideLayer('door/door_opened');
        WA.room.hideLayer('door/flag_up');
        WA.room.hideLayer('door/flag_down');
    } else if (state == 1) {
        WA.room.hideLayer('door/door_closed');
        WA.room.showLayer('door/door_opened');
        WA.room.hideLayer('door/flag_up');
        WA.room.hideLayer('door/flag_down');
    } else if (state == 2) {
        WA.room.hideLayer('door/door_closed');
        WA.room.hideLayer('door/door_opened');
        WA.room.showLayer('door/flag_up');
        WA.room.hideLayer('door/flag_down');
    }  else if (state == 3) {
        WA.room.hideLayer('door/door_closed');
        WA.room.hideLayer('door/door_opened');
        WA.room.hideLayer('door/flag_up');
        WA.room.showLayer('door/flag_down');
    }
}



export {};
