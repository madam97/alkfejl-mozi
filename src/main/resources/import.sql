INSERT INTO `USER` (`NAME`, `PASS`, `AGE`, `ROLE`) VALUES ('admin', '$2a$04$aRYAGeJbvX20Cb26UPoPdeFiiuqIbhSwOObz7UU7.nRu3rbsCNVUu', 50, 'ROLE_ADMIN');
INSERT INTO `USER` (`NAME`, `PASS`, `AGE`, `ROLE`) VALUES ('user', '$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C', 30, 'ROLE_USER');
INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`) VALUES ('The Shawshank Redemption(1994)', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 9.2, 16);
INSERT INTO `ROOM` (`NAME`, `ROWS`, `SEATS`) VALUES ('EMELET', 15, 20);
INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `PROJECTIONROOM_ID`, `PROJECTIONMOVIE_ID`) VALUES ('2018-12-03T10:00:00', FALSE, 2000, 1, 1);
INSERT INTO `PROJECTION_USERS` (`PROJECTIONS_ID`, `USERS_ID`) VALUES (1,2);
