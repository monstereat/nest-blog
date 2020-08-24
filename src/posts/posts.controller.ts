import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiPropertyOptional } from '@nestjs/swagger';

class CreatePostDto {
    @ApiPropertyOptional({ description: '帖子标题'})
    title: string
    @ApiPropertyOptional({ description: '帖子内容'})
    content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    @Get()
    @ApiOperation({summary: '显示博客列表'})
    index(){
        return [{
            id: 1,
        },{
            id: 1,
        },{
            id: 1,
        },{
            id: 1,
        },{
            id: 1,
        }]
    }

    @Post()
    @ApiOperation({summary: '创建帖子'})
    create(@Body() body:CreatePostDto){
        body
        return body
    }

    @Get(':id')
    @ApiOperation({summary: '帖子详情'})
    detail(@Param('id') id:string){
        return {
            id:1,
            title: 'aaaa'
        }
    }

    @Put(':id')
    @ApiOperation({summary: '编辑帖子'})
    upate(@Param('id') id: string, @Body() body: CreatePostDto){
        return{
            success: true
        }
    }

    @Delete(':id')
    @ApiOperation({summary: '删除帖子'})
    remove(@Param('id') id: string){
        return {
            success: true
        }
    }
}
