const db = require("../config");

getHeroes = (callback) => {
  const sql = "SELECT * FROM hero";

  db.query(sql, (err, result) => {
    if (err) {
      return console.log(`Error db: ${err.message}`);
    }

    callback(JSON.parse(JSON.stringify(result)));
  });
};

getHeroById = (id, callback) => {
  const sql = `SELECT * FROM hero WHERE id = ${id} LIMIT 1`;

  db.query(sql, (err, result) => {
    if (err) {
      return console.log(`Error db: ${err.message}`);
    }

    callback(JSON.parse(JSON.stringify(result)));
  });
};

updateHeroById = (data, callback) => {
  const { id, name, role, skills } = data;

  const sql = `UPDATE hero SET name = '${name}', role = '${role}', skills = '${skills}' WHERE id = '${id}'`;

  db.query(sql, (err, _) => {
    if (err) {
      return console.log(`Error db: ${err.message}`);
    }

    callback();
  });
};

addHero = (data, callback) => {
  const { name, role } = data;

  const sql = `INSERT INTO hero (name, role) VALUES ('${name}', '${role}')`;

  db.query(sql, (err, _) => {
    if (err) {
      return console.log(`Error db: ${err.message}`);
    }

    callback();
  });
};

deleteHeroById = (data, callback) => {
  const { id } = data;

  const sql = `DELETE FROM hero WHERE id = ${id}`;

  db.query(sql, (err, _) => {
    if (err) {
      return console.log(`Error db: ${err.message}`);
    }

    callback();
  });
};

module.exports = {
  getHeroes,
  getHeroById,
  updateHeroById,
  addHero,
  deleteHeroById,
};
