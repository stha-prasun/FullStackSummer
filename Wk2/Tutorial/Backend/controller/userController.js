import { Professional } from "../models/professionalSchema.js";

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

export const addUser = async (req, res) => {
  try {
    const { name, category } = req.body;

    if (!name || !category) {
      return res.status(400).json({
        message: "Email Already In Use!!",
        success: false,
      });
    }

    await Professional.create({
      name,
      category,
    });

    return res.status(201).json({
      message: "User created successfully!!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
