const db = require("../config/db");

const User = {
    // Create
    async create(userData) {
        const { courseNo, courseDesc, lastSemTaught, maxStudents } = userData;
        const sql = `INSERT INTO courses (courseNo, courseDesc, lastSemTaught, maxStudents) VALUES (?, ?, ?, ?)`;
        const [result] = await db.execute(sql, [courseNo, courseDesc, lastSemTaught, maxStudents]);
        return result.insertId;
    },

    // Read All
    async findAll() {
        const sql = `SELECT courseID, courseNo, courseDesc, lastSemTaught, maxStudents FROM courses`;
        const [rows] = await db.execute(sql);
        return rows;
    },

    // Read One by ID
    async findById(id) {
        const sql = `SELECT courseID, courseNo, courseDesc, lastSemTaught, maxStudents FROM courses WHERE courseID = ?`;
        const [rows] = await db.execute(sql, [id]);
        return rows[0] || null;
    },

    // Update
    async update(id, userData) {
        const { courseNo, courseDesc, lastSemTaught, maxStudents } = userData;
        const sql = `UPDATE courses SET courseNo = ?, courseDesc = ?, lastSemTaught = ?, maxStudents = ? WHERE courseID = ?`;
        const [result] = await db.execute(sql, [courseNo, courseDesc, lastSemTaught, maxStudents, id]);
        return result.affectedRows > 0;
    },

    // Delete
    async delete(id) {
        const sql = `DELETE FROM courses WHERE courseID = ?`;
        const [result] = await db.execute(sql, [id]);
        return result.affectedRows > 0;
    },
};

module.exports = User;
