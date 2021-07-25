/**
 * Interface describing the properties of a user returned from server
 * usageRatio not return by server and calculated on return from server
 */
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  capAllocationInBytes: number;
  usageInBytes: number;
  usageRatio?: number;
}
