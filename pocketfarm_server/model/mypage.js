const pool = require('../module/db/pool');
const table1 = 'User';
const table2 = 'Reservation';
const table3 = 'Board';
const table4 = 'Timeline';

module.exports = {
    readInfo: async(userIdx) => {
        const fields = 'name, userImg';
        const result = await pool.queryParam_None(`SELECT ${fields} FROM ${table1} WHERE userIdx = ${userIdx}`)
        return result;
    },
    readAll: async(userIdx) => {
        const fields = 'reserveIdx, Reservation.boardIdx, title, boardImg, progressRate, remainPeriod';
        const result = await pool.queryParam_None(`SELECT ${fields} FROM ${table2} JOIN ${table3} ON ${table2}.boardIdx = ${table3}.boardIdx WHERE Reservation.userIdx = ${userIdx} ORDER BY reserveIdx desc`)
        return result;
    },
    read: async(boardIdx) => {
        const fields = 'tlIdx, date, tlImg, tlContent';
        const result = await pool.queryParam_None(`SELECT ${fields} FROM ${table4} WHERE boardIdx = ${boardIdx} ORDER BY tlIdx desc`)
        return result;
    }
};