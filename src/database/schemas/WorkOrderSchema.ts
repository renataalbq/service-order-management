import { ObjectSchema } from "realm";

export const WorkOrderSchema: ObjectSchema = {
  name: "WorkOrder",
  primaryKey: "id",
  properties: {
    id: "string",
    title: "string",
    description: "string",
    status: "string",
    assignedTo: "string",
    createdAt: "string",
    updatedAt: "string",
    deletedAt: "string?",
    completed: { type: "bool", default: false },
    deleted: { type: "bool", default: false },
    localOnly: { type: "bool", default: false },
    needsSync: { type: "bool", default: false },
  },
};
