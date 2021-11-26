using desafio_roman_webApi.Contexts;
using desafio_roman_webApi.Domains;
using desafio_roman_webApi.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desafio_roman_webApi.Repositories
{
    public class ProjetoRepository : IProjetoRepository
    {
        DesafioRomanContext ctx = new DesafioRomanContext();

        public void Cadastrar(Projeto objCadastrado)
        {
            ctx.Projetos.Add(objCadastrado);
            ctx.SaveChanges();
        }

        public List<Projeto> Listar()
        {
            return ctx.Projetos.ToList();
            // .Include(p => p.IdProfessorNavigation)
            // .Include(p => p.IdTemaNavigation)

        }
    }
}
