import Post from '../models/Post.js'
// import multer from 'multer';


// const storage = multer.diskStorage({
//     destination: (_, __, cb) => {
//         cb(null, 'uploads');
//     },
//     filename: (_, file, cb) => {
//         cb(null, file.originalname);
//     }
// });

// const upload = multer({ storage }); 



export const getAll = async (req, res) => {
    try {
        const posts = await Post.findAll();
        //const popularPosts = await Post.find().sort('-views')

        if(!posts){
            return res.json({message: 'Постов нет.'})
        }
        
        res.json({posts}); //popularPosts
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'failed to get posts',
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: 'post not found',
            });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({
            message: 'failed to get a post',
        });
    }
}

export const remove = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: 'post not found',
            });
        } else {
            post.destroy({
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
                message: 'failed to remove a post',
            });
        }
}

export const update = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        
        if (!post) {
            return res.status(404).json({
                message: 'post not found',
            });
        } else {
            post.update(
                {            
                    name: req.body.name,
                    descr: req.body.descr,
                    photo: req.body.photo,
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
                message: 'failed to update a post',
            });
        }
}

// export const create = (upload.single('image'), async (req, res) => {
export const create = async (req, res) => {
    try {
        // const photo_str = "/images/" + (req.body.photo)
        // console.log(photo_str)
        const doc = new Post({
            name: req.body.name,
            descr: req.body.descr,
            photo: `/images/${req.body.photo}`,
        });
        const post = await doc.save();
        
        res.json(post);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'failed to create a post',
        })
    }
};