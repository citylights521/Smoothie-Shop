-- * creates `smoothie_db`.

DROP DATABASE IF EXISTS smoothieShop_db;
CREATE DATABASE smoothieShop_db;
USE smoothieShop_db;

CREATE TABLE smoothies (
    item_id INTEGER(10) AUTO_INCREMENT,
    smoothie_name VARCHAR(30) NOT NULL,
    devoured boolean not null default 0,
    PRIMARY KEY(item_id)
);
