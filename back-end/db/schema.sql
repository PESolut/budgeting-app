DROP DATABASE IF EXISTS budgeting;
CREATE DATABASE budgeting;

\c budgeting;

DROP TABLE IF EXISTS transactions;

CREATE TABLE transactions (
  id serial PRIMARY KEY,
  item_name varchar(255) NOT NULL,
  amount money NOT NULL,
  date date NOT NULL,
  sender varchar(255) NOT NULL,
  category varchar(255) NOT NULL
);