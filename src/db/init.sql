CREATE TABLE IF NOT EXISTS todoitems (
  id SERIAL PRIMARY KEY,
  todo VARCHAR(255) NOT NULL
);

INSERT INTO todoitems (todo)
VALUES ('Test1'), ('Test2');