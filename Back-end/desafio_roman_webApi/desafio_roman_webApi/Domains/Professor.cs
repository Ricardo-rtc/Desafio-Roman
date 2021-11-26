using System;
using System.Collections.Generic;

#nullable disable

namespace desafio_roman_webApi.Domains
{
    public partial class Professor
    {
        public Professor()
        {
            Projetos = new HashSet<Projeto>();
        }

        public int IdProfessor { get; set; }
        public int? IdUsuario { get; set; }
        public int? IdEquipe { get; set; }
        public string NomeProfessor { get; set; }

        public virtual Equipe IdEquipeNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Projeto> Projetos { get; set; }
    }
}
