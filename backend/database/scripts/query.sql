DROP TABLE IF EXISTS Admin;
DROP TABLE IF EXISTS Employee;
DROP TABLE IF EXISTS Department;

CREATE TABLE IF NOT EXISTS Admin(
    id SERIAL PRIMARY KEY ,
    email VARCHAR(50) NOT NULL UNIQUE, 
    password VARCHAR(140) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS Department(
    id  SERIAL	 PRIMARY KEY ,
    name VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS Employee(
    id  SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL UNIQUE,
    salary INT NOT NULL,
    dept_id INT NOT NULL,
    FOREIGN KEY (dept_id) REFERENCES Department(id)
);

-- Insert data into the Admin table
INSERT INTO Admin (email, password) 
VALUES
('a@a.com', 'aaa'),
('b@b.com', 'bbb'),
('c@c.com', 'ccc');

-- Insert data into the Department table
INSERT INTO Department (name) 
VALUES
('IT'),
('MARKETING'),
('NETWORK');

-- Insert data into the Employee table
INSERT INTO Employee (name, email, password, salary, dept_id)
VALUES
('aaa', 'a@a.com', 'aaa', 6000000, 1),
('bbb', 'b@b.com', 'bbb', 300000, 2),
('ccc', 'c@c.com', 'ccc', 4000000, 1),
('ddd', 'd@d.com', 'ddd', 60000, 3);

