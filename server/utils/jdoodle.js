import axios from 'axios';

export const runCode = async ({ code, language, input }) => {
  const config = {
    clientId: process.env.JDOODLE_CLIENT_ID,
    clientSecret: process.env.JDOODLE_CLIENT_SECRET,
    script: code,
    language: language,
    stdin: input,
    versionIndex: "0"
  };

  const { data } = await axios.post('https://api.jdoodle.com/v1/execute', config);
  return data;
};
