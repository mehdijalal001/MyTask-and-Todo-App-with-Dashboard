import { ITasks } from '../interfaces/iTasks';
import { TasksRepo } from '../repositories/tasksRepository';
import { TasksModel } from '../models/tasksModel';
import { MockTasksRepo } from '../repositories/mockTasksRepo';
export class TasksService implements ITasks {
    private repo: ITasks;
    constructor() {
        let envName = process.env.ENV;

        if (envName !== 'test') {
            this.repo = new TasksRepo();
        } else {
            this.repo = new MockTasksRepo();
        }
    }
    //---get all--------//
    async getMyTasksDueToday(req: any, res: any, next: any): Promise<any> {
      let modelClass: TasksModel[] = [];
      await this.repo
      .getMyTasksDueToday(req, res, next)
      .then(results => (modelClass = results))
      .catch(err => {
          next(err);
        });
        return modelClass;
    }
    async getMyTasksDueTomorrow(req: any, res: any, next: any): Promise<any> {
      let modelClass: TasksModel[] = [];
      await this.repo
      .getMyTasksDueTomorrow(req, res, next)
      .then(results => (modelClass = results))
      .catch(err => {
          next(err);
        });
        return modelClass;
    }
    async getAllTasks(req: any, res: any, next: any): Promise<any> {
      let modelClass: TasksModel[] = [];
      await this.repo
      .getAllTasks(req, res, next)
      .then(results => (modelClass = results))
      .catch(err => {
          next(err);
        });
        return modelClass;
    }
    async getCurrentTasks(req: any, res: any, next: any): Promise<any> {
      let modelClass: TasksModel[] = [];
      await this.repo
      .getCurrentTasks(req, res, next)
      .then(results => (modelClass = results))
      .catch(err => {
          next(err);
        });
        return modelClass;
    }
    async getCompletedTasks(req: any, res: any, next: any): Promise<any> {
      let modelClass: TasksModel[] = [];
      await this.repo
      .getCompletedTasks(req, res, next)
      .then(results => (modelClass = results))
      .catch(err => {
          next(err);
        });
        return modelClass;
    }
    async getTaskById(req: any, res: any, next: any): Promise<any> {
      let modelClass: TasksModel[] = [];
      await this.repo
      .getTaskById(req, res, next)
      .then(results => (modelClass = results))
      .catch(err => {
          next(err);
        });
        return modelClass;
    }
    async getTaskByCategoryIdAndDueDate(req: any, res: any, next: any): Promise<any> {
      let modelClass: TasksModel[] = [];
      await this.repo
      .getTaskByCategoryIdAndDueDate(req, res, next)
      .then(results => (modelClass = results))
      .catch(err => {
          next(err);
        });
        return modelClass;
    }
    async viewTasks(req: any, res: any, next: any): Promise<any> {
      let modelClass: TasksModel[] = [];
      await this.repo
      .viewTasks(req, res, next)
      .then(results => (modelClass = results))
      .catch(err => {
          next(err);
        });
        return modelClass;
    }
    
    async insertTasks(req: any, res: any, next: any): Promise<any>  {
        console.log('-----here------');
        let modelClass;
        await this.repo
        .insertTasks(req,res,next)
        .then(result => {
            modelClass = result;
        })
        .catch(err => {
            next(err);
        });
        return modelClass;
    }
    
    async updateTasks(req: any, res: any, next: any): Promise<any>  {
        let modelClass = new TasksModel();
        await this.repo
        .updateTasks(req,res,next)
        .then(result => {
            modelClass = result;
        })
        .catch(err => {
            next(err);
        });
        return modelClass;
    }
    async updateStatus(req: any, res: any, next: any): Promise<any>  {
        let modelClass = new TasksModel();
        await this.repo
        .updateStatus(req,res,next)
        .then(result => {
            modelClass = result;
        })
        .catch(err => {
            next(err);
        });
        return modelClass;
    }
    
    async deleteTasks(req: any, res: any, next: any): Promise<any> {
        let bIsSuccess = false;
        await this.repo
        .deleteTasks(req,res,next)
        .then(result => {
            bIsSuccess = true;
        })
        .catch(err => {
            next(err);
        });
        return bIsSuccess;
    }
    async deleteAll(req: any, res: any, next: any): Promise<any> {
        let bIsSuccess = false;
        await this.repo
        .deleteAll(req,res,next)
        .then(result => {
            bIsSuccess = true;
        })
        .catch(err => {
            next(err);
        });
        return bIsSuccess;
    }
}
