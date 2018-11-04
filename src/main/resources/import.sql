INSERT INTO `USER` (`NAME`, `PASS`, `AGE`, `ROLE`) VALUES ('admin', 'YWRtaW46YWRtaW4=', 50, 'ROLE_ADMIN');
INSERT INTO `USER` (`NAME`, `PASS`, `AGE`, `ROLE`) VALUES ('user', 'dXNlcjp1c2Vy=', 30, 'ROLE_USER');

INSERT INTO `MOVIE` (`TITLE`, `DESCRIPTION`, `RATE`, `AGELIMIT`) VALUES ('The Shawshank Redemption(1994)', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 9.2, 16);

INSERT INTO `ROOM` (`NAME`, `ROWS`, `SEATS`) VALUES ('EMELET', 15, 20);

INSERT INTO `PROJECTION` (`TIME`, `IS3D`, `PRICE`, `PROJECTIONROOM_ID`, `PROJECTIONMOVIE_ID`) VALUES ('2018-12-03T10:00:00', FALSE, 2000, 1, 1);

INSERT INTO `PROJECTION_USERS` (`PROJECTIONS_ID`, `USERS_ID`) VALUES (1,2);
