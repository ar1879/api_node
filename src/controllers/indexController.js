import pkg from 'pg';
const { Pool } = pkg;


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '187984',
    database: 'geospatial',
    port: '5432'
});



const welcome = async (req, res) => {
    res.json(`/poligons`);
};

const deletePolygon = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM poligonos where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};

const getPolygon = async (req, res) => {
    pool.query('SELECT id, nombre, ST_AsGeoJSON(geom) as geometry FROM poligonos;', (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al obtener los polígonos');
        } else {
            res.send(results.rows);
        }
    });
};

const getPolygonById = async (req, res) => {
    const id = req.params.id;
    pool.query('SELECT id, nombre, ST_AsGeoJSON(geom) as geometry FROM poligonos WHERE id = $1', [id], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al obtener el polígono');
        } else {
            res.send(results.rows[0]);
        }
    });
};


const createPolygon = async(req, res) => {
    const nombre = req.body.nombre;
    const wkt = req.body.wkt;
    console.log(wkt)

    pool.query(
        `INSERT INTO poligonos (geom, nombre) VALUES (ST_GeomFromText($1, 4326), $2)`,
        ['POLYGON((' + wkt + '))', nombre],
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).send('Error al insertar el polígono');
            } else {
                res.json({ message: "Polígono creado" });
            }
        }
    );
};


export {
    welcome,
    getPolygon,
    getPolygonById,
    createPolygon,
    deletePolygon
};