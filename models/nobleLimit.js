const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const nobleLimit = sequelize.define('nobleLimit', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    createdAt: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
}, {
    tableName: 'nobleLimit', // 실제 테이블 이름
    freezeTableName: true, // 테이블 이름 고정
    timestamps: true,
    timezone: '+09:00', // 한국 시간대로 설정 (GMT+9)
});

module.exports = nobleLimit;
