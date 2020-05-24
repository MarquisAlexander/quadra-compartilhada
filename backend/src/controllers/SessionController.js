const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const user = await connection('users_quadra')
        .where('id', id)
        .select('name')
        .first();

        if (!user) {
            return response.status(400).json({ error: `Nenhum usuário encontrado com esse id ${id}` });
        }

        return response.json(user);
    }
}