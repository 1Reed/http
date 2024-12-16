CREATE DATABASE data;

\c data

CREATE TABLE IF NOT EXISTS studentData (id SERIAL PRIMARY KEY, studentName TEXT, studentAge INTEGER);

INSERT INTO studentData (id, studentName, studentAge) VALUES (0, 'Simon', 24);
INSERT INTO studentData (id, studentName, studentAge) VALUES (1, 'Hans', 25);
INSERT INTO studentData (id, studentName, studentAge) VALUES (2, 'Peter', 26);