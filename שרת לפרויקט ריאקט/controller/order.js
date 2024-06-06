const fs = require('fs');

function get(req, res) {
    fs.readFile("orders.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file student ")
        } else {
            res.send(JSON.parse(data));
        }

    })
}
//אפשרות ראשונה ליצא פונקציה מדף
exports.getById = (req, res) => {

    fs.readFile("orders.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file student ")
        } else {
            let id = req.params.id;

            data = JSON.parse(data);
            let order = data.find(st => st.id == id)

            if (order == undefined) {
                res.status(500).send("not found student by tz " + id);
            } else {
                res.send(order);
            }

        }


    })
}

exports.updateOrder  = (req, res) => {

    fs.readFile("orders.json", "utf-8", (err, data) => {
        let id = req.params.id
        let orders = JSON.parse(data);
        // let newArrProduct = products.filter(i=> i.id != id)
        let index = products.findIndex(i=> i.id != id)
        orders.splice(index, 1, req.body)

        fs.writeFile("orders.json", JSON.stringify(orders), (err) => {
            if (err) {
                res.status(500).send("error  in add products ");
            } else {
                res.send(newArrProduct);
            }
        })
    })
}
exports.post = (req, res) => {

    fs.readFile("orders.json", "utf-8", (err, data) => {
        //המרה של טקסט למערך
        let orders = JSON.parse(data);
        //body =  לתוכן שנשלח בפונקציה פןסט 
        req.body.id = orders[orders.length-1].id + 1;
        orders.push(req.body);
        fs.writeFile("orders.json", JSON.stringify(orders), (err) => {
            if (err) {
                res.status(500).send("error  in add order ");
            } else {
                res.send("sucess add order");
            }
        })
    })
}

exports.delete = (req, res) => {

    fs.readFile("orders.json", "utf-8", (err, data) => {
        let id = req.params.id
        let orders = JSON.parse(data);
        let newArrProduct = products.filter(i=> i.id != id)

        fs.writeFile("orders.json", JSON.stringify(newArrProduct), (err) => {
            if (err) {
                res.status(500).send("error  in add products ");
            } else {
                res.send(newArrProduct);
            }
        })
    })
}

//אפשרות שניה ליצא פונקציה מדף
exports.get = get;
