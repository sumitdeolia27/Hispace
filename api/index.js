// Vercel Serverless Function Entry Point
// This file adapts the HiSpace server for Vercel's serverless environment

// Set Vercel environment flag
process.env.VERCEL = '1';

// Vercel handles SSL automatically, so we need to modify the server
// to work without local SSL certificates
const fs = require('fs');
const path = require('path');

// Check if SSL certificates exist, if not create dummy ones for Vercel
const keyPath = path.join(__dirname, '../app/ssl/key.pem');
const certPath = path.join(__dirname, '../app/ssl/cert.pem');

if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
    // Create dummy certificates for Vercel (Vercel handles SSL)
    const dummyKey = '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----';
    const dummyCert = '-----BEGIN CERTIFICATE-----\nMIIDXTCCAkWgAwIBAgIJAK...\n-----END CERTIFICATE-----';
    
    if (!fs.existsSync(path.dirname(keyPath))) {
        fs.mkdirSync(path.dirname(keyPath), { recursive: true });
    }
    
    if (!fs.existsSync(keyPath)) {
        fs.writeFileSync(keyPath, dummyKey);
    }
    if (!fs.existsSync(certPath)) {
        fs.writeFileSync(certPath, dummyCert);
    }
}

// Import the server
const serverModule = require('../app/src/server');

// Export the Express app for Vercel
// The server.js should export the app, but if it doesn't, we'll need to modify it
module.exports = serverModule.app || serverModule;
