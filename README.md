# api_node
### Initial Configuration

1.- Clone this repository:

                        git clone https://github.com/ar1879/api_node

2.- Install libraries.

                    npm install 

3.- Ceate db (postgres)

                    CREATE DATABASE geospatial;

                    \c geospatial;

                    CREATE EXTENSION postgis

                    CREATE TABLE geospatial (
                        id SERIAL PRIMARY KEY,
                        nombre TEXT,
                        geom geometry(polygon, 4326)
                    );


                    \d geospatial; 


5.- Run command:

                    npm run dev
                    
                   
