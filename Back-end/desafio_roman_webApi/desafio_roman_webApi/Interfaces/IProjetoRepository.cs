using desafio_roman_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desafio_roman_webApi.Interfaces
{
    interface IProjetoRepository
    {
        /// <summary>
        /// Lista todos os projetos
        /// </summary>
        /// <returns>Uma lista de projetos</returns>
        List<Projeto> Listar();

        /// <summary>
        /// Cadastra o objeto criado
        /// </summary>
        /// <param name="objCadastrado">Objeto cadastrado</param>
        void Cadastrar(Projeto objCadastrado);
    }
}
