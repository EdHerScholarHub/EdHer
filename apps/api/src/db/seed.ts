import { db } from "./database";
import { scholarDetail } from "./schema";
import { scholarshipData } from "./seed-data";

try {
  console.log("Cleaning up....");
  await db.delete(scholarDetail);
  console.log("Clean up Finished");

  console.log("Seeding new data...");
  const scholarshipPromises = scholarshipData.map(async (item) => {
    return db.insert(scholarDetail).values({ ...item });
  });

  await Promise.all(scholarshipPromises);
  console.log("Seeding complete");
}
catch (e) {
  console.log(e);
}
