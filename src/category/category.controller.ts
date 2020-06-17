import {Controller, Get, Post, Render, Req, Request} from '@nestjs/common';
import {Repository} from "typeorm";
import {Category} from "../category.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Controller('categories')
export class CategoryController {

    constructor(
        @InjectRepository(Category)
        private categoryRepo: Repository<Category>
    ) {
    }

    @Get() //API Rest - JSON
    index() {
        return this.categoryRepo.find();
    }

    @Get('list')
    @Render('category_list')
    async category_list(){
        const categories = await this.categoryRepo.find();
        return {layout: false, categories};
    }

    @Get('create')
    async category_create() {
        const category = await this.categoryRepo.create({name: 'category teste'});
        return this.categoryRepo.save(category);
    }

    @Post()
    async store(@Req() request: Request){
        const category = await this.categoryRepo.create(request.body as any)
        return this.categoryRepo.save(category);
    }

}
