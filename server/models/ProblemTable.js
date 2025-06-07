import mongoose from "mongoose";
const problemsSchema = new mongoose.Schema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  difficulty: {
    type: String
  },
  category: {
    type: String
  }
});

const ProblemTable = mongoose.model("ProblemTable", problemsSchema);
export default ProblemTable;
