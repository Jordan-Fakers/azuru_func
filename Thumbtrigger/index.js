module.exports = async function (context, myBlob) {
    context.log("Ajour d'un fichier dans images/")

    //context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");

    //Appel de ma librairie de génération de thumbnails
    const imageThumbnail = require('image-thumbnail');
    var nodemailer = require('nodemailer');
    //require('dotenv').config() //Azure gère le password

    //Ma variable d'entrée : myBlob
    //context.log('myBlob:', myBlob);


    var new_image = await imageThumbnail(myBlob);    
    
    //context.log('context:', new_image);

    //je met mon image dans ma variable de sortie : conext.bindings.outputBlob
    context.bindings.outputBlob = new_image;
    context.log("L'image a été uploadé dans imagesthumbnails/");


};