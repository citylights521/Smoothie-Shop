-- * creates `smoothie_db`.

DROP DATABASE IF EXISTS smoothieShop_db;
CREATE DATABASE smoothieShop_db;
USE smoothieShop_db;


CREATE TABLE smoothies (
    item_id int NOT NULL AUTO_INCREMENT,
    smoothie_name VARCHAR(30) NOT NULL,
    devoured boolean not null default false,
    PRIMARY KEY(item_id)
);

-- ALTER TABLE smoothies auto_increment_increment=1;

-- using clear DB for storing table for Heroku to access MySQL data. ClearDB's auto-increment is set to 10 with an offset of 2, so doesn't go in numerical order. Have tried fixes such as in line 15 but online research shows that there is no way to override this. Any ideas/should I use a different hosting service/or is this ok as is?