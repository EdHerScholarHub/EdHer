"use server";

import { db } from "@repo/api/db";
import { test } from "@repo/api/schemas";

export const testAction = async () => {
  const [data] = await db.select().from(test);
  return data ? data.context : "NO Data FUCK!";
};
