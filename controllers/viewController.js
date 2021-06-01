exports.getOveriew = (req,res) => {
    res.status(200).render('overview',{
      title: 'overview about us',
      tab: 'OUR GALLERY'
    });
};

exports.getGardens = (req,res) => {
    res.status(200).render('gardens',{
      title: 'Visit our gardens',
      tab: 'ABOUT US'
    });
};