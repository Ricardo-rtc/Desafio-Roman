USE ROMAN;

INSERT INTO	TipoUsuario		(nomeTipoUsuario)
VALUES						('Professor'),
							('Administrador')

INSERT INTO Usuario			(idTipoUsuario, email, senha)
VALUES						(1, 'prof1@gmail.com', 'senai@132'),
							(1, 'prof2@gmail.com', 'senai@132')
go

INSERT INTO Equipe			(nomeEquipe)
VALUES						('Desenvolvimento'),
							('Redes'), 
							('Multimidia')
go

INSERT INTO Professor		(idUsuario, idEquipe, nomeProfessor)
VALUES						(1, 1, 'Saulo'),
							(2, 1, 'Lucas')
go

INSERT INTO Tema			(nomeTema)
VALUES						('HQ'),
							('Gest�o')
go

INSERT INTO Projeto			(idTema, nomeProjeto, idProfessor)
VALUES						(1,'Vil�es', 1),
							(2,'Controle de presen�a', 2)
go

