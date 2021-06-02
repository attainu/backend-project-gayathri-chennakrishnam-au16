const Garden = require('../models/gardenModel');
const catchAsync = require('../utils/catchAync');


exports.getOveriew = (req,res) => {
    res.status(200).render('overview',{
      title: 'overview about us'
    });
};


exports.getGardens = catchAsync(async (req,res,next) => {

  //get allGradens data from collection
  const gardens = await Garden.find();
  //build and render template using allGardens data from step 1

    res.status(200).render('gardens',{
      title: 'Visit our gardens',
      gardens
    });
});

//build template and render it.



exports.getGarden = (req, res)=>{
  res.status(200).render('garden',{
    title: 'The Veggies Garden'
  });
};
