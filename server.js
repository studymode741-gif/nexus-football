'use strict';

const { PeerServer } = require('peer');

const port = Number(process.env.PORT || 9000);
const path = '/peerjs';

const server = PeerServer({
  port,
  path,
  proxied: true,
  allow_discovery: false,
  // PeerJS uses this value to route client signalling requests; it is not an account password.
  key: 'peerjs',
  alive_timeout: 60000,
  expire_timeout: 10000,
});

server.on('connection', (client) => {
  console.log(`[PeerServer] connected: ${client.getId()}`);
});

server.on('disconnect', (client) => {
  console.log(`[PeerServer] disconnected: ${client.getId()}`);
});

console.log(`[NEXUS] PeerServer listening on port ${port}, path ${path}`);
