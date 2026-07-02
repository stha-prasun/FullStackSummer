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
        message: "Fields cannot be left empty!!",
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

export const getAllProfessionals = async (req, res) => {
  try {
    const professionals = await Professional.find();
    
    if (professionals.length === 0) {
      return res.status(200).json({
        success: false,
        message: "No users found",
        professionals: [],
      });
    }
    return res.status(200).json({
      success: true,
      professionals,
    });
  } catch (error) {
    console.log(error);
  }
};
