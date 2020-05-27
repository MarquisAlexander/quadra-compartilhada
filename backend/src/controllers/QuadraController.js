const connection = require('../database/connection');

const crypto = require('crypto');

module.exports = {
    async create(request, response) {
        const { name_quadra, dias_disponiveis, horario, modelidade, rua, numero, bairro } = request.body;
        const user_id = request.headers.authorization;

        const [ info ] = await connection('quadras').insert({
            name_quadra,
            dias_disponiveis,
            horario,
            modelidade,
            rua,
            numero,
            bairro,
            user_id
        });

        return response.json(` Quadra criada com sucesso! :) total de quadras cadastradas ${info}` );
    },

    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const quadra = await connection('quadras')
        .where('id', id)
        .select('user_id')
        .first();

        if(quadra.user_id != user_id) {
            return response.status(401).json({error: 'Você não tem permissão para isso'});
        }

        await connection('quadras').where('id', id).delete();

        return response.status(204).send();
    }
}