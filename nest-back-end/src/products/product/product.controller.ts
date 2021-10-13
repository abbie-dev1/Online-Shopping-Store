import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { ProductDTO } from '../dtos/product.dto';
import { Product } from '../interfaces/product.interface';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productsService: ProductService){}

    @Get()
    findAll(): Promise<Product[]>{
        return this.productsService.findAll();
    }

    @Get(':id')
    find(@Param('id') id): Promise<Product> {
        return this.productsService.find(id);
    }

    @Post()
    createProduct(@Body() product: ProductDTO): Promise<Product> {
        return this.productsService.Create(product);
    }

    @Put(':id')
    updateProduct(@Param('id') id, @Body() product: ProductDTO): Promise<Product> {
        return this.productsService.update(id, product);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id): Promise<Product> {
        return this.productsService.delete(id);
    }
}
