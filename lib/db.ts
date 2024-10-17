import mongoose from "mongoose"
export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL || '', );
    console.log("Connected to MONGODB 🟢");
  } catch (error) {
    console.log(error);
  }
};

// const disconnectFromDB = async () => {
//   try {
//     await mongoose.disconnect();
//     console.log("Disconnected from MONGODB 🔴");
//   } catch (error) {
//     console.log(error);
//   }
// };

