import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiPropertyOptional } from '@nestjs/swagger';
import {Post as PostSchema } from './post.model';
import {IsNotEmpty} from 'class-validator'
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types'
import { from } from 'rxjs';

class CreatePostDto {
    @ApiPropertyOptional({ description: '帖子标题'})
    @IsNotEmpty({message: '请填写标题'})
    title: string
    @ApiPropertyOptional({ description: '帖子内容'})
    content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    constructor(
        @InjectModel(PostSchema) private readonly postModel: ModelType<PostSchema>
    ){}
    @Get()
    @ApiOperation({summary: '帖子列表'})
    async index(){
        return await this.postModel.find()
    }

    @Post()
    @ApiOperation({summary: '创建帖子'})
    async create(@Body() createPostDto:CreatePostDto){
        await this.postModel.create(createPostDto)
        return {
            success: true
        }
    }

    @Get(':id')
    @ApiOperation({summary: '帖子详情'})
    async detail(@Param('id') id:string){
        return await this.postModel.findById(id)
    }

    @Put(':id')
    @ApiOperation({summary: '编辑帖子'})
    async upate(@Param('id') id: string, @Body() updaPostDto: CreatePostDto){
        await this.postModel.findByIdAndUpdate(id, updaPostDto)
        return{
            success: true
        }
    }

    @Delete(':id')
    @ApiOperation({summary: '删除帖子'})
    async remove(@Param('id') id: string){
        await this.postModel.findByIdAndDelete(id)
        return {
            success: true
        }
    }
}
