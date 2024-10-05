import db from '../models/index.cjs'

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


export default {
    getHomePage,
    getTest,
};