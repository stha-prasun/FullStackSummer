export const test = async (req, res) => {
  try {
    return res.status(201).json({
      success: true,
      message: "Helloo",
    });
  } catch (error) {
    console.log(error);
  }
};