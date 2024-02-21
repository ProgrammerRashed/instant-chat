export const doLogout = (req, res) => {
    res
      .clearCookie("token", { maxAge: 0 })
      .clearCookie("token", {
        maxAge: 0,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true, message: "logout successful"});
  };
  

  