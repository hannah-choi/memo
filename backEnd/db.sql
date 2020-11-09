CREATE TABLE `memo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color` varchar(20) NOT NULL,
  `pageX` smallint NOT NULL,
  `pageY` smallint NOT NULL,
  `text` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


INSERT INTO memo (id, color, pageX, pageY, text) VALUES ##insert문은 한번만!
(6, 'brightred', 770, 25, ''),
(11, 'blue', 400, 25, ''),
(49, 'lightblue', 30, 25, '"I pop a beautiful sentence into my mouth and suck it like a fruit drop, or I sip it like a liqueur until the thought dissolves in me like alcohol, infusing brain and heart and coursing on through the veins to the root of each blood vessel.”
― Bohumil Hrabal, Too Loud a Solitude'),
(360, 'blue', 770, 330, 'Why Do Cats Have Whiskers on Their Front Legs?

- The whiskers on a cat’s legs are not there to help them calculate space. That’s the job of the facial whiskers. The whiskers on their front legs help them to calculate the position of their prey. This makes them very important for hunting and catching their prey.'),
(361, 'lightpink', 30, 330, 'Ingredientes para pulpo a la gallega

(para 4 personas)
- Pulpo fresco o ya congelado 2 kg
- Patata 1 kg
- Pimentón de la Vera dulce o picante, al gusto
- Aceite de oliva virgen extra de 1º, al gusto
- Sal gruesa al gusto
'),
(396, 'lightblue', 401, 632, '');

