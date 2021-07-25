import {User} from "../model/user.model";
import {DataGeneratorUtil} from "../utils/data-generator.util";

/**
 * Create a static user list
 */
export const usersDb: User[] = DataGeneratorUtil.populateUsers();
