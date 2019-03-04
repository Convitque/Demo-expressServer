var db = require('../db');


module.exports.viewProduct = function (req, res) {
    var page = parseInt(req.query.page) || 1;
    var itemsPerPage = 4;
    var maxPage = Math.ceil(db.get('products').value().length / itemsPerPage);

    var products = db.get('products').value();

    var begin = (page - 1) * itemsPerPage;
    var end = page * itemsPerPage;

    if(page == 1) {
        res.render('products/index', {
            products: products.slice(begin, end),
            x: page+1,
            currentPage: page,
            previousIsDisabled: 'disabled',
            isFirstActive: 'active'
        });
        return;
    }
    if(page == maxPage) {
        res.render('products/index', {
            products: products.slice(begin, end),
            x:maxPage-1,
            currentPage: maxPage,
            isThirdActive: 'active',
            nextIsDisabled: 'disabled'
        });
    }
    res.render('products/index', {
        products: products.slice(begin, end),
        x: page,
        currentPage: page,
        isSecondActive: 'active'
    });
}