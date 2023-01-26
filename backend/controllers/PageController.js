import Page from '../models/Page.js'

export const getAll = async (req, res) => {
    try {
        const pages = await Page.findAll();
        
        res.json(pages);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'failed to get pages',
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const page = await Page.findByPk(req.params.id);

        if (!page) {
            return res.status(404).json({
                message: 'page not found',
            });
        }
        res.status(200).json(page);
    } catch (err) {
        res.status(500).json({
            message: 'failed to get a page',
        });
    }
}

export const remove = async (req, res) => {
    try {
        const page = await Page.findByPk(req.params.id);

        if (!page) {
            return res.status(404).json({
                message: 'page not found',
            });
        } else {
            page.destroy({
                where: {
                    id: req.params.id
                }
            });
                
            res.json({
                success: true,
            });
        }
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'failed to remove a page',
            });
        }
}

export const update = async (req, res) => {
    try {
        const page = await Page.findByPk(req.params.id);
        
        if (!page) {
            return res.status(404).json({
                message: 'page not found',
            });
        } else {
            page.update(
                { where: { id: req.params.id } },
                {            
                    name: req.body.name,
                    descr: req.body.descr,
                    photo: req.body.photo,
                },
                );
                
            res.json({
                success: true,
            });
        }
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'failed to update a page',
            });
        }
}

export const create = async (req, res) => {
    try {
        const doc = new Page({
            name: req.body.name,
            descr: req.body.descr,
            photo: req.body.photo,
        });
        const page = await doc.save();
        
        res.json(page);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'failed to create a page',
        })
    }
}