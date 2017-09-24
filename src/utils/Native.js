// Native.js
// r.w. 2017

export var Native = {
    Dialogs: {
        Alert (msg, callback, title, buttonLabel) {
            navigator.notification.alert(msg, callback, title, buttonLabel);
        },
        Confirm (msg, callback, title, buttonLabels) {
            navigator.notification.confirm(msg, callback, title, buttonLabels);
        },
        Prompt (msg, callback, title, buttonLabels, defaultText) {
            navigator.notification.prompt(msg, callback, title, buttonLabels, defaultText);
        }
    }
};


export default Native;