/**
 * Interface describing the properties of a user
 */
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  capAllocationInBytes: number;
  usageInBytes: number;
}
