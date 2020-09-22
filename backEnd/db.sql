CREATE TABLE `memo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color` varchar(20) NOT NULL,
  `pageX` smallint NOT NULL,
  `pageY` smallint NOT NULL,
  `text` text,
  `userID` smallint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


INSERT INTO memoSystem.memo (id, color, pageX, pageY, text, userID) VALUES (6, 'blue', 573, 337, '234234324', 7);
INSERT INTO memoSystem.memo (id, color, pageX, pageY, text, userID) VALUES (11, 'lightpink', 234, 11, 'sdfdfsdfsdf', 44);
INSERT INTO memoSystem.memo (id, color, pageX, pageY, text, userID) VALUES (12, 'brightred', 220, 430, 'asdasdads', 22);
INSERT INTO memoSystem.memo (id, color, pageX, pageY, text, userID) VALUES (49, 'lightblue', -3, 385, null, null);


CREATE TABLE `user` (
  `userID` smallint NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `user_username_uindex` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


INSERT INTO memoSystem.user (userID, username, password) VALUES (0, 'aaa', '111');
INSERT INTO memoSystem.user (userID, username, password) VALUES (1, 'bbb', '222');
INSERT INTO memoSystem.user (userID, username, password) VALUES (2, 'ccc', '333');