import ProblemTable from "../models/ProblemTable.js";

const problemsTable = async (req, res) => {
  try {
const problems = await ProblemTable.find().select(
      "id title difficulty category "
    );
res.status(200).json({ data: problems });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  
}};
export default problemsTable;
