using desafio_roman_webApi.Domains;
using desafio_roman_webApi.Interfaces;
using desafio_roman_webApi.Repositories;
using desafio_roman_webApi.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace desafio_roman_webApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository _Repository { get; set; }

        public LoginController()
        {
            _Repository = new UsuarioRepository();
        }

        /// <summary>
        /// Método responsável por fazer o login na api
        /// </summary>
        /// <returns>Lista apenas o objeto selecionado</returns>
        [HttpPost()]
        public IActionResult Login(LoginViewModel login)
        {
            try
            {
                Usuario usuarioBuscado = _Repository.Logar(login.email, login.senha);

                if (usuarioBuscado == null)
                {
                    return BadRequest($"E-mail ou senha inválidos!");
                }

                var minhasClaims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email),
                    new Claim(ClaimTypes.Role, usuarioBuscado.IdTipoUsuario.ToString()),
                    new Claim("role", usuarioBuscado.IdTipoUsuario.ToString())
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("roman-chave-autenticacao"));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var meuToken = new JwtSecurityToken(
                        issuer: "desafioRoman.webAPI",
                        audience: "desafioRoman.webAPI",
                        claims: minhasClaims,
                        expires: DateTime.Now.AddHours(2),
                        signingCredentials: creds
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(meuToken)
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
