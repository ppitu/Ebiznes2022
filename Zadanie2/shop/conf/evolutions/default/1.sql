-- !Ups

CREATE TABLE "category"
(
    "id"         INTEGER   NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name"       VARCHAR   NOT NULL,
    "created_at" TIMESTAMP NOT NULL,
    "updated_at" TIMESTAMP NOT NULL
);

CREATE TABLE "product"
(
    "id"         INTEGER   NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name"       VARCHAR   NOT NULL,
    "description" VARCHAR   NOT NULL,
    "category_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP NOT NULL,
    "updated_at" TIMESTAMP NOT NULL,
    FOREIGN KEY(category_id) REFERENCES category(id)
);

CREATE TABLE "address"
(
    "id"         INTEGER   NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street"    VARCHAR ,
    "zipcode"    VARCHAR ,
    "number"    VARCHAR ,
    "city"    VARCHAR ,
    "created_at" TIMESTAMP NOT NULL,
    "updated_at" TIMESTAMP NOT NULL
);

-- !Downs

DROP TABLE "product"
DROP TABLE "category"
DROP TABLE "address"
