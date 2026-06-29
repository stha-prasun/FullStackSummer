export const test = async (req, res) => {
  try {
    return res.status(201).json({
      success: true,
      message: "Helloo",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};