
export const getActiveUser = async (req, res, next) => {
  try {
    const activeUser = {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        image: req.user.image
    }
   console.log(activeUser)
   res.status(200).send(activeUser)
  } catch (err) {
    next(err);
  }
};

