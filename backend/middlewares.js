// export function async checkFind(req, res, next) {
//     try {
//         const reaction = await Reaction.findByPk(req.params.id);

//         if (!reaction) {
//             return res.status(404).json({
//                 message: 'reaction not found',
//             });
//         }
//         res.status(200).json(reaction);
//     } catch (err) {
//         res.status(500).json({
//             message: 'failed to get a reaction',
//         });
//     }

//     next()
// }

// export const checkFind = async (req, res, next) => {
//     try {
//         const reaction = await Reaction.findByPk(req.params.id);

//         if (!reaction) {
//             return res.status(404).json({
//                 message: 'reaction not found',
//             });
//         }
//         req.isFinded = true;
//         next();
//     } catch (err) {
//         return res.status(500).json({
//             message: 'failed to get a reaction',
//         });
//     }
// }

// export function logger(req, res, next) {

// }