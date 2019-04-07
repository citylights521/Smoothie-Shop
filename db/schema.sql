-- * Create the `burgers_db`.
--    * Switch to or use the `burgers_db`.
--    * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.

DROP DATABASE IF EXISTS smoothieShop_db;
CREATE DATABASE smoothieShop_db;
USE smoothieShop_db;

CREATE TABLE smoothies(
    item_id INTEGER(10) AUTO_INCREMENT,
    smoothie_name VARCHAR(30) NOT NULL,
    devoured boolean not null default 0,
    PRIMARY KEY(item_id)
);
