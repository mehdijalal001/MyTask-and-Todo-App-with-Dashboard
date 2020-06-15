import { NewsFeed } from '../models/newsfeed';

export interface INewsFeedService {
  getAllNewsFeeds(req?:any , res?:any,next?:any): Promise<any>;
  getAllPublishedNewsfeed(req?:any , res?:any,next?:any): Promise<any>;
  getNewsFeedById(req?:any , res?:any,next?:any): Promise<any>;
  insertNewsfeed(req?:any , res?:any,next?:any): Promise<any>;
  updateNewsfeed(req?:any , res?:any,next?:any): Promise<any>;
  publishArchiveNewsfeed(req?:any , res?:any,next?:any): Promise<any>;
  deleteNewsFeed(req?:any , res?:any,next?:any): Promise<any>;
}
