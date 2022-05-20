const db = require("../config");

const description = `Mobile Legends: Bang Bang (MLBB) adalah game seluler multipemain online battle arena (MOBA), dikembangkan dan diterbitkan oleh Shanghai Moonton Technology. Game ini pertama kali dirilis pada 9 November 2016; dan menjadi populer di wilayah Asia Tenggara dan termasuk game terpilih untuk acara kompetisi esports medali pertama di Pesta Olahraga Asia Tenggara 2019 di Filipina.
      Kedua tim lawan bertarung untuk mencapai dan menghancurkan markas musuh, sambil mempertahankan markas mereka sendiri untuk mengendalikan ketiga jalur yang dikenal sebagai top/atas, mid/tengah dan bottom/bawah , yang menghubungkan kedua markas. Karakter terkendali komputer yang lemah disebut minion, muncul dari markas tim dan mengikuti tiga jalur menuju markas tim lawan, untuk melawan musuh dan tower. Setiap tim terdiri dari lima pemain, yang masing-masing mengendalikan avatar, yang dikenal sebagai hero, dari gawai mereka sendiri. Setiap hero dikelompokkan menjadi 6 role yang berbeda, Tank, Fighter, Assassin, Marksman, Mage, dan Support Mage.\nSumber: https://mobile-legends.fandom.com/id/wiki/Mobile_Legends:_Bang_Bang_Wikia`;

getHistory = (callback) => {
  const sql = "SELECT * FROM history LIMIT 1";

  db.query(sql, (err, result) => {
    if (err) {
      return console.log(`Error db: ${err.message}`);
    }

    const resultQuery = JSON.parse(JSON.stringify(result));

    if (!resultQuery.length) {
      const insertSql = `INSERT INTO history (description) VALUES ('${description}')`;

      db.query(insertSql, (err, resultInsert) => {
        if (err) {
          return console.log(`Error db: ${err.message}`);
        }

        callback(JSON.parse(JSON.stringify(resultInsert)));
      });

      return;
    }

    callback(resultQuery);
  });
};

module.exports = { getHistory };
