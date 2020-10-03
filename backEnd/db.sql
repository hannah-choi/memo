DROP TABLE IF EXISTS `memo`; ## 테스트를 몇번할 지 모르니 중복의 경우 삭제
CREATE TABLE `memo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color` varchar(20) NOT NULL,
  `pageX` smallint NOT NULL,
  `pageY` smallint NOT NULL,
  `text` text,
  `userID` smallint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


INSERT INTO memo (id, color, pageX, pageY, text, userID) VALUES ##insert문은 한번만!
  (307, 'brightred', 240, 254, 'werwerwer', 1),
  (308, 'blue', 300, 161, 'reegdgfg', 0),
  (309, 'lightblue', 500, 200, 'wrerwer', 2),
  (310, 'lightpink', 100, 600, '563452345', 0),
  (311, 'blue', 300, 400, 'dlskdjfskdlf', 1),
  (312, 'lightpink', 700, 200, 'skdhfsdkf', 2);


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userID` smallint NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `user_username_uindex` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO memoSystem.user (userID, email, password) VALUES
(0, 'a@a.com', '1111'),
(1, 'b@b.com', '2222'),
(2, 'c@c.com', '3333');