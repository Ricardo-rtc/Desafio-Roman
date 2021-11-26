using System;
using System.Collections.Generic;

#nullable disable

namespace desafio_roman_webApi.Domains
{
    public partial class Tema
    {
        public Tema()
        {
            Projetos = new HashSet<Projeto>();
        }

        public int IdTema { get; set; }
        public string NomeTema { get; set; }

        public virtual ICollection<Projeto> Projetos { get; set; }
    }
}
