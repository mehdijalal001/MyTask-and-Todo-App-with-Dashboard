import { IOfficeTasks } from "../interfaces/iOfficeTasks";

export class MockTasksRepo implements IOfficeTasks {

    getAllTasks(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    getCurrentTasks(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    getCompletedTasks(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    viewTasks(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    insertTasks(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    updateTasks(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    deleteTasks(): Promise<any> {
        throw new Error('Method not implemented.');
    }
}