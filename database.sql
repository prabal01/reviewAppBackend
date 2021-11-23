CREATE DATABASE review_app;
\c review_app
CREATE TABLE users
( uid SERIAL PRIMARY KEY,
  username varchar(25) NOT NULL,
  email varchar(100) NOT NULL,
  password varchar(100) NOT NULL
  );
  

  CREATE TABLE profiles
( uid SERIAL PRIMARY KEY,
  slug varchar(100) NOT NULL,
  image varchar(100) NOT NULL,
  name varchar(50) NOT NULL,
  type varchar(50)
  );

  

CREATE TABLE reviews (
reviewId SERIAL PRIMARY KEY,
    rating int NOT NULL,
    review varchar(500),
    profileId int,
    CONSTRAINT uid
      FOREIGN KEY(profileId) 
	  REFERENCES profiles(uid));

ALTER TABLE profiles
ADD type varchar(20);
alter table profiles alter column 'type' type character varying(50);

ALTER TABLE reviews
ADD createdAt timestamp NOT NULL DEFAULT LOCALTIMESTAMP();
ALTER TABLE reviews
RENAME COLUMN currentdate TO createdAt;
