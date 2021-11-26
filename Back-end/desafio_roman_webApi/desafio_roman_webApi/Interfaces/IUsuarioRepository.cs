using desafio_roman_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desafio_roman_webApi.Interfaces
{
    interface IUsuarioRepository
    {
        /// <summary>
        /// Verifica a identificação do usuário
        /// </summary>
        /// <param name="email">Email</param>
        /// <param name="senha">Senha</param>
        /// <returns>Objeto do usuário logado</returns>
        Usuario Logar(string email, string senha);
    }
}
