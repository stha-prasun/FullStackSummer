import { data } from "../data/dummy.js";

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

export const testPost = async (req, res) => {
  try {
    const { name, category } = req.body;

    console.log(req.body);

    if (!name || !category) {
      return res.status(400).json({
        message: "Fields cannot be left empty",
        success: false,
      });
    }

    const newData = {
      id: data.length + 1,
      name,
      category,
    };

    data.push(newData);

    return res.status(201).json({
      success: true,
      message: "Done",
    });
  } catch (error) {
    console.log(error);
  }
};

export const testParams = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Id missing",
      });
    }

    const gotData = data.find((item) => item.id === id);

    if (!gotData) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: gotData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Id missing",
      });
    }

    const gotData = data.find((item) => item.id === id);

    if (!gotData) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    gotData.name = name;
    gotData.category = category;

    return res.status(200).json({
      success: true,
      message: "Data updated successfully",
    });
  } catch (error) {
    console.error(error);
  }
};