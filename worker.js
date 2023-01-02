// this is a worker script
addEventListener("message", (event) => {
  // event.data is a property that Returns the data of the message.

  postMessage(event.data * event.data);
});

/* postMessage() function
function postMessage(message: any, options?: WindowPostMessageOptions | undefined): void (+1 overload)
Posts a message to the given window. Messages can be structured objects, 
e.g. nested objects and arrays, can contain JavaScript values (strings, numbers, 
    Date objects, etc), and can contain certain data objects such as File Blob, FileList, 
    and ArrayBuffer objects.
Objects listed in the transfer member of options are transferred, not just cloned, 
meaning that they are no longer usable on the sending side.

A target origin can be specified using the targetOrigin member of options. If not 
provided, it defaults to "/". This default restricts the message to same-origin targets 
only.
If the origin of the target window doesn't match the given target origin, the message is 
discarded, to avoid information leakage. To send the message to the target regardless of 
origin, set the target origin to "*".
Throws a "DataCloneError" DOMException if transfer array contains duplicate objects or 
if message could not be cloned.

*/
