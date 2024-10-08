import db from '../models/index.cjs'
import CRUDServide from '../services/CRUDService.cjs';

export const getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('------------------------------');
        console.log(data);
        console.log('------------------------------');
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }

}

export const getTest = (req, res) => {
    return res.render('test.ejs');
}

export const getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

export const postCRUD = async (req, res) => {
    let message =  await CRUDServide.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}

export default {
    getHomePage,
    getTest,
    getCRUD,
    postCRUD,
};