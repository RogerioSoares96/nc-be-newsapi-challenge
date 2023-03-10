exports.psqlError = (err, req, res, next) => {
    if (err.code === '22P02') {
      res.status(400).send('Invalid param');
    } else if (err.code === '23503') {
      res.status(404).send('Invalid value of key-value')
    } else if (err.code === '23502') {
      res.status(400).send('Missing key-value')
    } else {
      next(err);
    }
};

exports.customErrorHandler = (err, req, res, next) => {
  if (err === 'article not found') {
    res.status(404).send({ msg: 'article not found'});
  } else if (err === 'id not found') {
    res.status(404).send({ msg: 'id not found'});
  } else if (err === 'topic is invalid') {
    res.status(400).send({ msg: 'topic is invalid'});
  } else if (err === 'sorting selection is invalid') {
    res.status(400).send({ msg: 'sorting selection is invalid'});
  } else if (err === 'order selection is invalid') {
    res.status(400).send({ msg: 'order selection is invalid'});
  } else if (err === 'query key not found') {
    res.status(404).send({ msg: 'query key not found'});
  } else {
    next(err);
  }
}
exports.endPointNotFound = (err, req, res, next) => {
    res.status(404).send('Not found!');
};
  
exports.serverError = (err, req, res, next) => {
    console.log(err);
    res.status(500).send('Internal Server Error');
};