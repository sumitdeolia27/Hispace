'use strict';

// npm i node-fetch

async function getJoin() {
    try {
        // Use dynamic import with await
        const { default: fetch } = await import('node-fetch');

        const API_KEY_SECRET = 'hispacep2p_default_secret';
        const hispace_URL = 'https://p2p.hispace.com/api/v1/join';
        // const hispace_URL = 'http://localhost:3000/api/v1/join';
        // const hispace_URL = "https://hispace.up.railway.app/api/v1/join";

        const response = await fetch(hispace_URL, {
            method: 'POST',
            headers: {
                authorization: API_KEY_SECRET,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                room: 'test',
                name: 'hispace',
                avatar: false,
                audio: false,
                video: false,
                screen: false,
                chat: false,
                hide: false,
                notify: true,
                token: {
                    username: 'username',
                    password: 'password',
                    presenter: true,
                    expire: '1h',
                },
            }),
        });
        const data = await response.json();
        if (data.error) {
            console.log('Error:', data.error);
        } else {
            console.log('join:', data.join);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getJoin();
