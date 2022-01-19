CREATE SCHEMA `db`;

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT=0;

USE `db`;

DROP TABLE IF EXISTS `Musica`;
DROP TABLE IF EXISTS `Artista`;
DROP TABLE IF EXISTS `Album`;
DROP TABLE IF EXISTS `Users`;

CREATE TABLE IF NOT EXISTS `Album` (id bigint unsigned NOT NULL AUTO_INCREMENT,
`nomealbum` varchar(50) COLLATE latin1_bin NOT NULL,
PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

CREATE TABLE IF NOT EXISTS `Musica` (id bigint NOT NULL auto_increment,
nomeMusica varchar(50) COLLATE latin1_bin NOT NULL,
genero varchar(50) COLLATE latin1_bin NOT NULL,
datadelancamento bigint NOT NULL,
nomeartista bigint NOT NULL,
foreign key (`nomeartista`) references Artista(`id`),
albumId bigint NOT NULL,
foreign key (`albumId`) references Album(`id`),
PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

CREATE TABLE IF NOT EXISTS `Artista` (id bigint NOT NULL auto_increment,
nomeartista varchar(50)COLLATE latin1_bin NOT NULL,
pais varchar(50) COLLATE latin1_bin NOT NULL,
PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

CREATE TABLE IF NOT EXISTS `Users` (id bigint NOT NULL auto_increment,
nome varchar(50) COLLATE latin1_bin NOT NULL,
pais varchar(50) COLLATE latin1_bin NOT NULL,
idade int(6) NOT NULL,
email varchar(200) COLLATE latin1_bin NOT NULL,
`musicamaisouvida` bigint NOT NULL,
foreign key (`musicamaisouvida`) references Musica(`id`),
PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

START TRANSACTION;

INSERT INTO Musica(id,nomeMusica,genero,datadelancamento,nomeartista,albumId)
Values(1,'Dó','Pop',2000,1,1),
(2,'Malvadão','Trap',2010,2,1),
(3,'Maquina do tempo','Pop',2020 ,3,5),
(4,'Qualidade','Hip-Hop',2021,4,3),
(5,'Final','Latin',2019,5,7),
(6,'Craque','Rock',2014,6,5),
(7,'M4','Pop',2000,7,2),
(8,'Bala Azul','Trap',1900,8,2),
(9,'Tino','Trap',2007,10,11),
(10,'Tomas','Rock',2021,9,12),
(11,'Mustang','Pop',2020,11,16),
(12,'Fashion','Latin',2001,12,21),
(13,'Salto alto','Pop',2010,13,22),
(14,'Bang','Pop',2012,14,23),
(15,'Fe','Rock',2018,15,22),
(16,'Class','Pop',2013,16,21),
(17,'Fin','Pop',2010,17,20),
(18,'Contdown','Rock',1990,18,13),
(19,'Death note','Jazz',2000,19,12),
(20,'Zumm','Metal',2010,20,11),
(21,'R','Fado',2017,21,2),
(22,'RQW','Disco',2015,22,1),
(23,'Camadas','Hip-hop',2009,23,3),
(24,'Sonhador','Pop',2020,24,4),
(25,'Sweet spot','Pop',2010,25,5),
(26,'Boa sorte','Antigo',1990,27,6),
(27,'Tom','Pop',1980,28,7),
(28,'GG','Hip-Hop',2000,29,8),
(29,'Ping','Hip-Hop',1990,26,9),
(30,'Ola','Velha Guarda',2000,30,10)
;

INSERT INTO Artista(id,nomeartista,pais)
Values (1, 'Xama', 'Portugal'),
(2, 'Teto', 'Angola'),
(3, 'T-rex', 'Africa'),
(4, 'Antiga', 'Brasil'),
(5, 'Bispo', 'Portugal'),
(6, 'Murta', 'Bolivia'),
(7, 'Papillion', 'Dinamarca'),
(8, 'Bin', 'Etiopia'),
(9, 'Beyonce', 'EUA'),
(10, 'Adele', 'Filipinas'),
(11, 'Eminem', 'Franca'),
(12, 'Bin', 'Gabao'),
(13, 'Limao', 'Filipinas'),
(14, 'Greg', 'Brasil'),
(15, 'Lutz', 'Hungria'),
(16, 'XXX', 'Inglaterra'),
(17, 'Juice World', 'EUA'),
(18, 'Pop Smoke', 'Japao'),
(19, 'Coni', 'Kuwait'),
(20, 'Clark', 'Irlanda'),
(21, 'Tupac', 'EUA'),
(22, 'Fernand', 'Maldivas'),
(23, 'Pablo', 'Mexico'),
(24, 'Joao', 'Portugal'),
(25, 'Piruka', 'Portugal'),
(26, 'Jonh', 'Inglaterra'),
(27, 'Shelby', 'Namibia'),
(28, 'NN', 'Nigeria'),
(29, 'Pou', 'Nicarágua'),
(30, 'Bruno Mars', 'Polonia')
;

INSERT INTO Album(id, nomealbum)
Values (1, 'New'),
(2, 'Classic'),
(3, 'Galvao'),
(4, 'Album'),
(5, 'PopSmokeAlbum'),
(6, 'Win'),
(7, 'Hi'),
(8, 'Freeky'),
(9, 'Frees'),
(10, 'Imortal'),
(11, 'Wild'),
(12, 'Tilt'),
(13, 'Frank'),
(14, 'Rafa'),
(15, 'Fill'),
(16, 'Antony'),
(17, 'Ruiz'),
(18, 'Album'),
(19, 'Yike'),
(20, 'Diego'),
(21, 'Iork'),
(22, 'Pedro'),
(23, 'Thor'),
(24, 'Help'),
(25, 'Hugo'),
(26, 'Real'),
(27, 'Benfica'),
(28, 'Ok'),
(29, 'Gnomo'),
(30, 'Tiz');



INSERT INTO User(id, nome, pais,idade,email, musicamaisouvida)
Values (1, 'Pedro', 'Portugal',30,'pedro@gmail.com' , 1 ),
(2, 'Carlos', 'Portugal', 20,'carlos@gmail.com' , 20 ),
(3, 'Tomas', 'Portugal',18, 'tomas@gmail.com' ,  30),
(4, 'Joao', 'Portugal',9, 'joao@gmail.com' , 22 ),
(5, 'Andre', 'Portugal',50, 'andre@gmail.com' , 15 ),
(6, 'Ana', 'Portugal', 40,'ana@gmail.com' , 15 ),
(7, 'Antonio', 'Portugal', 37,'antonio@gmail.com' , 2 ),
(8, 'Jose', 'Portugal', 36,'jose@gmail.com' , 6),
(9, 'Toze', 'Portugal', 23,'toze@gmail.com' , 8),
(10, 'Fernando', 'Portugal',11, 'fernando@gmail.com' , 10),
(11, 'Paulo', 'Portugal', 23,'paulo@gmail.com' , 29),
(12, 'Carla', 'Portugal', 28,'carla@gmail.com' , 28),
(13, 'Manuel', 'Portugal',46, 'manuel@gmail.com' , 4),
(14, 'Aurora', 'Portugal',70, 'aurora@gmail.com' , 14),
(15, 'Fernanda', 'Portugal', 22,'fernanda@gmail.com' , 20),
(16, 'Gloria', 'Portugal',26, 'gloria@gmail.com' , 22),
(17, 'Bruna', 'Portugal',29, 'bruna@gmail.com' , 7),
(18, 'Bruno', 'Portugal',43, 'bruno@gmail.com' , 18),
(19, 'Joana', 'Portugal',23, 'joana@gmail.com' , 13),
(20, 'Raul', 'Portugal',37, 'raul@gmail.com' , 12),
(21, 'Josefina', 'Portugal',35, 'josefina@gmail.com' , 24),
(22, 'Leonor', 'Portugal', 37,'leonor@gmail.com' , 11),
(23, 'Francisca', 'Portugal',38, 'francisca@gmail.com' , 2),
(24, 'Ines', 'Portugal', 20,'ines@gmail.com' , 8),
(25, 'Sofia', 'Portugal',17, 'sofia@gmail.com' , 10),
(26, 'Francisco', 'Portugal', 54,'francisco@gmail.com' , 15),
(27, 'Duarte', 'Portugal', 46,'duarte@gmail.com' , 20),
(28, 'Gabriel', 'Portugal',38, 'gabriel@gmail.com' , 26),
(29, 'Martim', 'Portugal',56, 'martim@gmail.com' , 5),
(30, 'Afonso', 'Portugal', 43,'afonso@gmail.com' , 6)
;


GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678'
