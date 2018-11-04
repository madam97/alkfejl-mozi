INSERT INTO `USER` (`NAME`, `PASS`, `AGE`, `ROLE`) VALUES ('admin', '$2a$04$aRYAGeJbvX20Cb26UPoPdeFiiuqIbhSwOObz7UU7.nRu3rbsCNVUu', 50, 'ROLE_ADMIN');
INSERT INTO `USER` (`NAME`, `PASS`, `AGE`, `ROLE`) VALUES ('user', '$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C', 30, 'ROLE_USER');
INSERT INTO `USER` (`NAME`, `PASS`, `AGE`, `ROLE`) VALUES ('user2', '$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C', 12, 'ROLE_USER');
INSERT INTO `USER` (`NAME`, `PASS`, `AGE`, `ROLE`) VALUES ('user3', '$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C', 18, 'ROLE_USER');

INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`) VALUES ('The Shawshank Redemption(1994)', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 9.2, 16);
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`) VALUES ('Matrix (1999)', 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', 8.7, 16);
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`) VALUES ('Shutter Island (2010)', 'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.', 8.1, 16);
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`) VALUES ('12 Years a Slave (2013)', 'In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.', 8.1, 16);
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`) VALUES ('Guardians of the Galaxy (2014)', 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.', 8.1, 12);
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`) VALUES ('A Wednesday (2008)', 'A retiring police officer reminisces about the most astounding day of his career. About a case that was never filed but continues to haunt him in his memories - the case of a man and a Wednesday.', 8.2, 16);
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`) VALUES ('Drishyam (2015)', 'Desperate measures are taken by a man who tries to save his family from the dark side of the law, after they commit an unexpected crime.', 8.3, 16);
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`) VALUES ('The Silence of the Lambs (1991)', 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.', 8.6, 18);

INSERT INTO `CINEMA` (`NAME`, `ADDRESS`) VALUES ('Allee - Budapest', '1117 Budapest Október huszonharmadika u. 8-10.');
INSERT INTO `CINEMA` (`NAME`, `ADDRESS`) VALUES ('Apollo Mozi - Debrecen', '4025 Debrecen, Miklós u. 1.');
INSERT INTO `CINEMA` (`NAME`, `ADDRESS`) VALUES ('Cinema City - Győr', '9023 Győr, Plaza, Vasvári Pál u. 1.');

INSERT INTO `ROOM` (`NAME`, `ROWS`, `SEATS`, `CINEMAROOMS_ID`) VALUES ('Nagy terem', 18, 20, 1);
INSERT INTO `ROOM` (`NAME`, `ROWS`, `SEATS`, `CINEMAROOMS_ID`) VALUES ('Kis terem', 7, 10, 1);
INSERT INTO `ROOM` (`NAME`, `ROWS`, `SEATS`, `CINEMAROOMS_ID`) VALUES ('Alfa terem', 30, 20, 2);
INSERT INTO `ROOM` (`NAME`, `ROWS`, `SEATS`, `CINEMAROOMS_ID`) VALUES ('Kör terem', 15, 20, 2);
INSERT INTO `ROOM` (`NAME`, `ROWS`, `SEATS`, `CINEMAROOMS_ID`) VALUES ('Közepes terem', 10, 15, 1);
INSERT INTO `ROOM` (`NAME`, `ROWS`, `SEATS`, `CINEMAROOMS_ID`) VALUES ('Emelet', 15, 20, 3);
INSERT INTO `ROOM` (`NAME`, `ROWS`, `SEATS`, `CINEMAROOMS_ID`) VALUES ('Földszinti terem', 20, 20, 3);

INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `PROJECTIONROOM_ID`, `PROJECTIONMOVIE_ID`) VALUES ('2018-12-03T10:00:00', FALSE, 2000, 1, 1);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `PROJECTIONROOM_ID`, `PROJECTIONMOVIE_ID`) VALUES ('2018-12-04T12:00:00', FALSE, 2000, 2, 1);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `PROJECTIONROOM_ID`, `PROJECTIONMOVIE_ID`) VALUES ('2018-12-05T09:00:00', FALSE, 2000, 1, 1);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `PROJECTIONROOM_ID`, `PROJECTIONMOVIE_ID`) VALUES ('2018-12-03T13:00:00', FALSE, 3000, 3, 2);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `PROJECTIONROOM_ID`, `PROJECTIONMOVIE_ID`) VALUES ('2018-12-03T11:30:00', FALSE, 2500, 4, 3);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `PROJECTIONROOM_ID`, `PROJECTIONMOVIE_ID`) VALUES ('2018-12-10T10:30:00', FALSE, 2500, 6, 3);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `PROJECTIONROOM_ID`, `PROJECTIONMOVIE_ID`) VALUES ('2018-12-03T10:30:00', FALSE, 2000, 6, 4);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `PROJECTIONROOM_ID`, `PROJECTIONMOVIE_ID`) VALUES ('2018-12-04T08:00:00', TRUE, 4000, 5, 5);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `PROJECTIONROOM_ID`, `PROJECTIONMOVIE_ID`) VALUES ('2018-12-10T20:00:00', TRUE, 4000, 3, 5);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `PROJECTIONROOM_ID`, `PROJECTIONMOVIE_ID`) VALUES ('2018-12-12T13:00:00', TRUE, 3500, 2, 6);

INSERT INTO `PROJECTION_USERS` (`PROJECTIONS_ID`, `USERS_ID`) VALUES (1,2);
INSERT INTO `PROJECTION_USERS` (`PROJECTIONS_ID`, `USERS_ID`) VALUES (2,2);
INSERT INTO `PROJECTION_USERS` (`PROJECTIONS_ID`, `USERS_ID`) VALUES (3,3);
INSERT INTO `PROJECTION_USERS` (`PROJECTIONS_ID`, `USERS_ID`) VALUES (6,4);
INSERT INTO `PROJECTION_USERS` (`PROJECTIONS_ID`, `USERS_ID`) VALUES (8,3);
