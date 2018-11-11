-- Színészek
INSERT INTO `ACTOR` (`NAME`) VALUES ('Jack Nicholson');
INSERT INTO `ACTOR` (`NAME`) VALUES ('Morgan Freeman');
INSERT INTO `ACTOR` (`NAME`) VALUES ('Tommy Lee Jones');
INSERT INTO `ACTOR` (`NAME`) VALUES ('Will Smith');
INSERT INTO `ACTOR` (`NAME`) VALUES ('Robert De Niro');
INSERT INTO `ACTOR` (`NAME`) VALUES ('Tom Hanks');
INSERT INTO `ACTOR` (`NAME`) VALUES ('Halle Berry');
INSERT INTO `ACTOR` (`NAME`) VALUES ('Hugo Weaving');
INSERT INTO `ACTOR` (`NAME`) VALUES ('Keanu Reeves');
INSERT INTO `ACTOR` (`NAME`) VALUES ('Robin Williams');

-- Filmek
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`, `LENGTH`) VALUES ('The Bucket List (2007)', 'Two terminally ill men escape from a cancer ward and head off on a road trip with a wish list of to-dos before they die.', 7.4, 12, 97);
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`, `LENGTH`) VALUES ('Men in Black (1997)', 'A police officer joins a secret organization that polices and monitors extraterrestrial interactions on Earth.', 7.3, 12, 98);
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`, `LENGTH`) VALUES ('Last Vegas (2013)', 'Four friends take a break from their day-to-day lives to throw a bachelor party in Las Vegas for their last remaining single pal.', 6.6, 16, 105);
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`, `LENGTH`) VALUES ('Cloud Atlas (2012)', 'An exploration of how the actions of individual lives impact one another in the past, present and future, as one soul is shaped from a killer into a hero, and an act of kindness ripples across centuries to inspire a revolution.', 7.5, 12, 172);
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`, `LENGTH`) VALUES ('The Matrix (1999)', 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', 8.7, 12, 136);
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`, `LENGTH`) VALUES ('Dead Poets Society (1989)', 'English teacher John Keating inspires his students to look at poetry with a different perspective of authentic knowledge and feelings.', 8.1, 16, 128);

-- Filmek és színészek összekapcsolása
-- Bucket list
INSERT INTO `ACTOR_MOVIES` (`ACTORS_ID`, `MOVIES_ID`) VALUES (1, 1);
INSERT INTO `ACTOR_MOVIES` (`ACTORS_ID`, `MOVIES_ID`) VALUES (2, 1);
-- MIB
INSERT INTO `ACTOR_MOVIES` (`ACTORS_ID`, `MOVIES_ID`) VALUES (3, 2);
INSERT INTO `ACTOR_MOVIES` (`ACTORS_ID`, `MOVIES_ID`) VALUES (4, 2);
-- Last Vegas
INSERT INTO `ACTOR_MOVIES` (`ACTORS_ID`, `MOVIES_ID`) VALUES (2, 3);
INSERT INTO `ACTOR_MOVIES` (`ACTORS_ID`, `MOVIES_ID`) VALUES (5, 3);
-- Could atlas
INSERT INTO `ACTOR_MOVIES` (`ACTORS_ID`, `MOVIES_ID`) VALUES (6, 4);
INSERT INTO `ACTOR_MOVIES` (`ACTORS_ID`, `MOVIES_ID`) VALUES (7, 4);
INSERT INTO `ACTOR_MOVIES` (`ACTORS_ID`, `MOVIES_ID`) VALUES (8, 4);
-- Matrix
INSERT INTO `ACTOR_MOVIES` (`ACTORS_ID`, `MOVIES_ID`) VALUES (8, 5);
INSERT INTO `ACTOR_MOVIES` (`ACTORS_ID`, `MOVIES_ID`) VALUES (9, 5);
-- Dead Poets Society
INSERT INTO `ACTOR_MOVIES` (`ACTORS_ID`, `MOVIES_ID`) VALUES (10, 6);

-- Termek
INSERT INTO `ROOM` (`NAME`, `ROWS`, `SEATS`) VALUES ('Big Room', 18, 20);
INSERT INTO `ROOM` (`NAME`, `ROWS`, `SEATS`) VALUES ('Small Room', 7, 10);
INSERT INTO `ROOM` (`NAME`, `ROWS`, `SEATS`) VALUES ('Round Room', 30, 20);

-- Vetítések
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `MOVIE_ID`, `ROOM_ID`) VALUES ('2018-12-23T10:00:00', FALSE, 2000, 1, 1);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `MOVIE_ID`, `ROOM_ID`) VALUES ('2018-12-23T12:00:00', TRUE, 3000, 4, 2);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `MOVIE_ID`, `ROOM_ID`) VALUES ('2018-12-23T15:00:00', TRUE, 3000, 5, 2);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `MOVIE_ID`, `ROOM_ID`) VALUES ('2018-12-23T12:00:00', FALSE, 1500, 2, 2);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `MOVIE_ID`, `ROOM_ID`) VALUES ('2018-12-24T14:00:00', FALSE, 1000, 6, 3);

-- Felhasználók
INSERT INTO `USER` (`NAME`, `EMAIL`, `PASS`, `AGE`, `ROLE`) VALUES ('admin', 'admin@gmail.com', '$2a$04$aRYAGeJbvX20Cb26UPoPdeFiiuqIbhSwOObz7UU7.nRu3rbsCNVUu', 50, 'ROLE_ADMIN');
INSERT INTO `USER` (`NAME`, `EMAIL`, `PASS`, `AGE`, `ROLE`) VALUES ('user', 'user@gmail.com', '$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C', 30, 'ROLE_USER');
INSERT INTO `USER` (`NAME`, `EMAIL`, `PASS`, `AGE`, `ROLE`) VALUES ('user2', 'user2@gmail.com', '$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C', 12, 'ROLE_USER');
INSERT INTO `USER` (`NAME`, `EMAIL`, `PASS`, `AGE`, `ROLE`) VALUES ('user3', 'user3@gmail.com', '$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C', 18, 'ROLE_USER');

-- Jegyek
INSERT INTO `TICKET` (`ROW`, `SEAT`, `PROJECTION_ID`, `USER_ID`) VALUES (9, 10, 1, 2);
INSERT INTO `TICKET` (`ROW`, `SEAT`, `PROJECTION_ID`, `USER_ID`) VALUES (9, 11, 1, 2);
INSERT INTO `TICKET` (`ROW`, `SEAT`, `PROJECTION_ID`, `USER_ID`) VALUES (9, 12, 1, 2);
