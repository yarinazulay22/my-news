import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { News } from './news.entity';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  @Get('getShortNews')
  async getShortNews() {
    return await this.newsService.getShortNews();
  }

  @Get(':id')
  async news(@Param('id') id: number, @Req() req) {
    const user = req.user;
    return await this.newsService.getNews(id);
  }


  @Put() 
    async update(@Body() item: any) { return await this.newsService.update(item) }


  @Delete('delete/:id')
    async delete(@Param('id', new ParseIntPipe()) item: number,
    ) {
        return await this.newsService.deleteNews(item);
    }


    @Post()
    async add(@Body() item: News) {
        return await this.newsService.addNews(item);
    }
  

  constructor(private newsService: NewsService) {}
}

