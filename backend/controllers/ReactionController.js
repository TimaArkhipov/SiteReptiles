import Reaction from '../models/Reaction.js'

export const getAll = async (req, res) => {
    try {
        const reactions = await Reaction.findAll();
        
        res.json(reactions);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'failed to get reactions',
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const reaction = await Reaction.findByPk(req.params.id);

        if (!reaction) {
            return res.status(404).json({
                message: 'reaction not found',
            });
        }
        res.status(200).json(reaction);
    } catch (err) {
        res.status(500).json({
            message: 'failed to get a reaction',
        });
    }
}

export const remove = async (req, res) => {
    try {
        const reaction = await Reaction.findByPk(req.params.id);

        if (!reaction) {
            return res.status(404).json({
                message: 'reaction not found',
            });
        } else {
            Reaction.destroy({
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
                message: 'failed to remove a reaction',
            });
        }
}

export const update = async (req, res) => {
    try {
        const reaction = await Reaction.findByPk(req.params.id);
        
        if (!reaction) {
            return res.status(404).json({
                message: 'reaction not found',
            });
        } else {
            Reaction.update(
                {            
                    page_id: req.body.page_id,
                    comment: req.body.comment,
                    grade: req.body.grade,
                },
                { where: { id: req.params.id } }
                );
                
            res.json({
                success: true,
            });
        }
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'failed to update a reaction',
            });
        }
}

export const create = async (req, res) => {
    try {
        const doc = new Reaction({
            user_id: req.userId,
            page_id: req.body.page_id,
            comment: req.body.comment,
            grade: req.body.grade,
        });
        const post = await doc.save();
        
        res.json(post);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'failed to create a reaction',
        })
    }
}