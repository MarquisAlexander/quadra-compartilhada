const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {name, email, whatsapp} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('users_quadra').insert({
            id,
            name,
            email,
            whatsapp,
        })

        return response.json({ id });
    },
}