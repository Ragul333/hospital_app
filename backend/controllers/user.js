const mongoose = require('mongoose');
const models = require('../models/users');

const createUser = async (req, res) => {
    try {

        const existingUser = await models.userModel.findOne({
            phone: req.body.phone,
        });

        if (existingUser) {
            res.send('User Already Exists')
        } else {
            const newUser = await models.userModel.create({
                name: req.body.name,
                date: req.body.date,
                address: req.body.address,
                phone: req.body.phone,
            });
        }

        res.json(newUser);
    } catch (error) {
        res.json(error);
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await models.userModel.find({});
        res.json(users)
    } catch (error) {
        res.json(error);
    }
}

const getUser = async (req, res) => {
    try {
        const phoneNumber = req.params.phone;
        console.log(phoneNumber)
        const user = await models.userModel.findOne({phone: phoneNumber });
        console.log(user);
        res.json(user)
    } catch (error) {
        res.json(error);
    }
}

const createReport = async (req, res) => {
    try {
        const report = await models.reportModel.create({
            name: req.body.name,
            date: req.body.date,
            address: req.body.address,
            phone: req.body.phone,
            medicine: req.body.medicine,
            summary: req.body.summary
        });

        res.json(report);
    } catch (error) {
        res.json(error);
    }
};

const getReports = async (req, res) => {
    try {
        const reports = await models.reportModel.find({});
        res.json(reports)
    } catch (error) {
        res.json(error);
    }
}

const getReport = async (req, res) => {
    try {
        const phoneNumber = req.params.phone;
        const useReport = await models.reportModel.find({ phone:phoneNumber });
        res.json(useReport)
    } catch (error) {
        res.json(error);
    }
}
module.exports = { createUser, getUsers, getUser, createReport, getReports, getReport }