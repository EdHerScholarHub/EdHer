import { createId } from "@paralleldrive/cuid2";

import type { TScholarDetail } from "./schema";

import { db } from "./database";
import { scholarDetail } from "./schema";
import { scholarshipData } from "./seed-data";

try {
  console.log("Cleaning up....");
  // @ts-expect-error This is excepted
  await db.delete(scholarDetail);
  console.log("Clean up Finished");

  console.log("Seeding new data...");

  for (const data of scholarshipData) {
    const id = createId();
    const scholarshipPromises = data.map(async (item) => {
      return db.insert(scholarDetail).values({
        id,
        ...item,
      } as TScholarDetail);
    });
    // @ts-expect-error This is excepted
    await Promise.all(scholarshipPromises);
  }
  console.log("Seeding complete");
}
catch (e) {
  console.log(e);
}
