export const doSomething = async (req, res, next) => {
  try {
    console.log("got hit")
    return res.send({message: "Api Got Hit"})
  } catch (err) {
    next(err);
  }
};

