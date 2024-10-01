
export const getHomePage = (req, res) => {
    return res.render('homepage.ejs')
}

export const getTest = (req, res) => {
    return res.render('test.ejs')
}


export default {
    getHomePage,
    getTest,
};