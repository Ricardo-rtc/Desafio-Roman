using desafio_roman_webApi.Domains;
using desafio_roman_webApi.Interfaces;
using desafio_roman_webApi.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desafio_roman_webApi.Contexts
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        private IProjetoRepository _Repository { get; set; }

        public ProjetosController()
        {
            _Repository = new ProjetoRepository();
        }

        [HttpGet]
        [Authorize]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_Repository.Listar());
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost]
        [Authorize]
        public IActionResult Cadastrar(Projeto obj)
        {
            _Repository.Cadastrar(obj);
            return StatusCode(201);
        }
    }
}
