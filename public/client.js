socket.on('updateModel', (data) => {
    displayInstructions(data.model, data.role); 
});
