import { Delete, Get, Injectable, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './news.entity';

@Injectable()
export class NewsService {
    
    @Get()
    async getNews(id :number) {
        return await this.newsRepository.findOneBy({id});
    }
    @Get()
    async getShortNews() {
        const q = "SELECT id, title,author, SUBSTRING_INDEX(body, ' ',35) as body, image, time FROM news";
        return await this.newsRepository.query(q);
    }

    @Get()
    async addNews(item: News) {
        item.id = null;
        item.time= new Date();
        await this.newsRepository.save(item);
      }

    @Put()
    async update(item: any) {
     await this.newsRepository.save(item);
      }

      @Delete()
      async deleteNews(id: number) {
        await this.newsRepository.delete(id);
      }
    


    

    constructor(@InjectRepository(News) private newsRepository: Repository<News>) {}
}
