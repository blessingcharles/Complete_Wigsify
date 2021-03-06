
-------------- VALIDATE EMAIL PROCEDURE -------------------

DROP PROCEDURE IF EXISTS validate_users;
DELIMITER $$
CREATE PROCEDURE validate_users(
	IN email VARCHAR(128)
)
DETERMINISTIC
NO SQL
BEGIN
	IF NOT (SELECT email REGEXP '^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$') THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Wrong email';
	END IF;
END$$
DELIMITER ;