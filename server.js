const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

const monitors = {};

io.on('connection', (socket) => {
    console.log(`Yeni bağlantı: ${socket.id}`);

    socket.on('registerMonitor', (data) => {
        monitors[socket.id] = data;
        console.log(`Monitör kaydedildi - Socket ID: ${socket.id}, Monitor ID: ${data.monitorId}, Rol: ${data.role}`);
    });

    socket.on('modelSelected', (modelData) => {
        console.log(`Model seçildi: ${modelData.model}`);
        
        Object.keys(monitors).forEach(socketId => {
            const monitorInfo = monitors[socketId];
            io.to(socketId).emit('updateModel', { model: modelData.model, role: monitorInfo.role });
        });
    });

    socket.on('disconnect', () => {
        console.log(`Bağlantı kesildi: ${socket.id}`);
        delete monitors[socket.id];
    });
});

const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Sunucu çalışıyor:`);
    console.log(`   Local:   http://localhost:${PORT}`);
    console.log(`   Network: http://192.168.1.14:${PORT}`);
});
