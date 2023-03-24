CREATE DATABASE geospatial;

\c geospatial;


CREATE EXTENSION postgis

CREATE TABLE geospatial (
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    geom geometry(polygon, 4326)
);


\d geospatial;