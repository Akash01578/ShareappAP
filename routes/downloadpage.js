const router = require('express').Router();
const File = require('../models/file');

router.get('/:uuid', async (req, res) => {
    try{
        const file = await File.findOne({uuid: req.params.uuid });

        if(!file){
            return res.render('download', {error: 'link has expired.'});
        }

        const link=`${process.env.APP_BASE_URL}/files/download/${file.uuid}`;
        return res.render('download', {
            uuid: file.uuid,
            filename: file.filename,
            size: file.size,
            downloadlink:link
        });
    } catch(err){
        return res.render('download', {error: 'something went wrong.'});
    }
});


module.exports = router;