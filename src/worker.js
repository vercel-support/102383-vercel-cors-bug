console.log("Hello from worker.js");

// Create a SharedArrayBuffer
// This requires the Cross-Origin-Embedder-Policy and Cross-Origin-Opener-Policy headers to be set
// and will throw an error if they are not set
const buffer = new SharedArrayBuffer(4);
