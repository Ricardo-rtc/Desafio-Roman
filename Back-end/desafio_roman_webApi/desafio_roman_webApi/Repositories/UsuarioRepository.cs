using desafio_roman_webApi.Contexts;
using desafio_roman_webApi.Domains;
using desafio_roman_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desafio_roman_webApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        DesafioRomanContext ctx = new DesafioRomanContext();

        public Usuario Logar(string email, string senha)
        {
            Usuario user = ctx.Usuarios.FirstOrDefault(u => u.Email == email);

            if (user != null && user.Senha == senha)
            {
                return user;
            }

            return null;
        }
    }
}
