Office.initialize = () => {
  console.log("office initialize");
};

function onMessageCompose(event) {
  console.log("On message compose event", JSON.stringify(event));
  event.completed();
}

function onMessageSend(event) {
  console.log("On message send event", JSON.stringify(event));
  event.completed({ allowEvent: true });
}

function onAttachmentsChanged(event) {
  console.log("On attachments changed event", JSON.stringify(event));
  event.completed();
}
