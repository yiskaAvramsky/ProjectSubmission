
const fs = require('fs');

function get(req, res) {
    fs.readFile("products.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file student ")
        } else {
            res.send(JSON.parse(data));
        }

    })
}
//אפשרות ראשונה ליצא פונקציה מדף
exports.getById = (req, res) => {

    fs.readFile("products.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file student ")
        } else {
            let id = req.params.id;

            data = JSON.parse(data);
            let product = data.find(st => st.id == id)

            if (product == undefined) {
                res.status(500).send("not found student by tz " + id);
            } else {
                res.send(product);
            }

        }


    })
}


exports.delete = (req, res) => {

    fs.readFile("products.json", "utf-8", (err, data) => {
        let id = req.params.id
        let products = JSON.parse(data);
        let newArrProduct = products.filter(i=> i.id != id)

        fs.writeFile("products.json", JSON.stringify(newArrProduct), (err) => {
            if (err) {
                res.status(500).send("error  in add products ");
            } else {
                res.send(newArrProduct);
            }
        })
    })
}


exports.put = (req, res) => {
    fs.readFile("products.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file products ");
        } else {
            let id = req.params.id;
            let products = JSON.parse(data);
            let index = products.findIndex(product => product.id == id);
            if (index === -1) {
                res.status(404).send("Product not found");
            } else {
                let updatedProduct = req.body;
                updatedProduct.id = id;
                products[index] = updatedProduct;
                fs.writeFile("products.json", JSON.stringify(products), (err) => {
                    if (err) {
                        res.status(500).send("Error updating product");
                    } else {
                        res.send(updatedProduct);
                    }
                });
            }
        }
    });
};


exports.post = (req, res) => {
    fs.readFile("products.json", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading products file");
        }

        let products = JSON.parse(data);
        let product = req.body;

        // הוספת איידי למוצר החדש
        product.id = products.length + 1;

        // הוספת המוצר לרשימת המוצרים
        products.push(product);

        // כתיבת הנתונים המעודכנים לקובץ
        fs.writeFile("products.json", JSON.stringify(products), (err) => {
            if (err) {
                return res.status(500).send("Error writing to products file");
            } else {
                res.send(product);
            }
        });
    });
};

//אפשרות שניה ליצא פונקציה מדף
exports.get = get;
