import {User} from "../model/user.model";
import * as faker from "faker";


export class DataGeneratorUtil {
    /**
     * Generates a list of 10 users
     * the faker module is used to generate random values
     * The default cap for all users is set to 2GB
     * Random data usage is calculated for each user
     */
    static populateUsers(): User[] {
        const users: User[] = [];
        const capAllocationInBytes = 2048000000;
        for (let i = 0; i < 10; i++) {
            users.push({
                id: i,
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                capAllocationInBytes: capAllocationInBytes,
                usageInBytes: capAllocationInBytes * (faker.random.number(100) / 100),
            });
        }
        return users;
    }
}
