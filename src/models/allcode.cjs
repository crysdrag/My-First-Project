'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
        static associate(models) {
            // define association here
        }
    }

    Allcode.init({
        // id : DataTypes.INTEGER,
        key: DataTypes.STRING,
        type: DataTypes.STRING,
        valueEN: DataTypes.STRING,
        valueVI: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Allcode',
    });

    return Allcode;
};
